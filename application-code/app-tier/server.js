const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const DbConfig = require('./DbConfig');
const transactionService = require('./TransactionService');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ============================================
// HEALTH & STATUS ENDPOINTS
// ============================================

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: 'running',
    service: 'Three-Tier Web Architecture',
    version: '2.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// ============================================
// TRANSACTION ENDPOINTS
// ============================================

// GET ALL TRANSACTIONS WITH FILTERING
app.get('/api/transaction', (req, res) => {
  try {
    const { category, sortBy, limit } = req.query;
    console.log('Fetching transactions:', { category, sortBy, limit });
    
    transactionService.getAllTransactions(function (results) {
      let transactions = results.map(row => ({
        id: row.id,
        amount: row.amount,
        description: row.description,
        category: row.category || 'general',
        date: row.date || new Date().toISOString(),
        status: 'active'
      }));

      // Filter by category if provided
      if (category) {
        transactions = transactions.filter(t => t.category === category);
      }

      // Sort functionality
      if (sortBy === 'amount_desc') {
        transactions.sort((a, b) => b.amount - a.amount);
      } else if (sortBy === 'amount_asc') {
        transactions.sort((a, b) => a.amount - b.amount);
      }

      // Limit results
      if (limit) {
        transactions = transactions.slice(0, parseInt(limit));
      }

      res.status(200).json({
        success: true,
        count: transactions.length,
        result: transactions,
        timestamp: new Date().toISOString()
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not get transactions',
      error: err.message
    });
  }
});

// GET TRANSACTION STATISTICS
app.get('/api/transaction/stats', (req, res) => {
  try {
    transactionService.getAllTransactions(function (results) {
      if (!results || results.length === 0) {
        return res.status(200).json({
          success: true,
          stats: {
            total: 0,
            average: 0,
            max: 0,
            min: 0,
            count: 0,
            categories: {}
          }
        });
      }

      const amounts = results.map(r => parseFloat(r.amount));
      const stats = {
        total: amounts.reduce((a, b) => a + b, 0),
        average: amounts.reduce((a, b) => a + b, 0) / amounts.length,
        max: Math.max(...amounts),
        min: Math.min(...amounts),
        count: results.length,
        categories: {}
      };

      res.status(200).json({
        success: true,
        stats: stats,
        timestamp: new Date().toISOString()
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not calculate statistics',
      error: err.message
    });
  }
});

// ADD NEW TRANSACTION
app.post('/api/transaction', (req, res) => {
  try {
    const { amount, desc, category } = req.body;

    // Input validation
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid amount. Must be a positive number.'
      });
    }

    if (!desc || desc.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Description is required.'
      });
    }

    console.log('Adding transaction:', { amount, desc, category });
    transactionService.addTransaction(amount, desc);
    
    res.status(201).json({
      success: true,
      message: 'Transaction added successfully',
      data: { amount, desc, category: category || 'general' },
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error adding transaction',
      error: err.message
    });
  }
});

// GET SINGLE TRANSACTION BY ID
app.get('/api/transaction/:id', (req, res) => {
  try {
    const id = req.params.id;
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid transaction ID'
      });
    }

    transactionService.findTransactionById(id, function (result) {
      if (!result || result.length === 0) {
        return res.status(404).json({
          success: false,
          message: `Transaction with id ${id} not found`
        });
      }

      const transaction = result[0];
      res.status(200).json({
        success: true,
        data: {
          id: transaction.id,
          amount: transaction.amount,
          description: transaction.description,
          category: transaction.category || 'general'
        }
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving transaction',
      error: err.message
    });
  }
});

// UPDATE TRANSACTION
app.put('/api/transaction/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { amount, desc, category } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid amount'
      });
    }

    console.log('Updating transaction:', { id, amount, desc });
    res.status(200).json({
      success: true,
      message: 'Transaction updated successfully',
      data: { id, amount, desc, category }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error updating transaction',
      error: err.message
    });
  }
});

// DELETE ONE TRANSACTION
app.delete('/api/transaction/:id', (req, res) => {
  try {
    const id = req.params.id;
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid transaction ID'
      });
    }

    transactionService.deleteTransactionById(id, function (result) {
      res.status(200).json({
        success: true,
        message: `Transaction with id ${id} deleted successfully`,
        timestamp: new Date().toISOString()
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error deleting transaction',
      error: err.message
    });
  }
});

// DELETE ALL TRANSACTIONS
app.delete('/api/transaction', (req, res) => {
  try {
    transactionService.deleteAllTransactions(function (result) {
      res.status(200).json({
        success: true,
        message: 'All transactions deleted successfully',
        timestamp: new Date().toISOString()
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error deleting all transactions',
      error: err.message
    });
  }
});

// ============================================
// DASHBOARD & ANALYTICS ENDPOINTS
// ============================================

app.get('/api/dashboard', (req, res) => {
  try {
    transactionService.getAllTransactions(function (results) {
      const transactions = results || [];
      const amounts = transactions.map(r => parseFloat(r.amount));

      const dashboardData = {
        totalTransactions: transactions.length,
        totalAmount: amounts.reduce((a, b) => a + b, 0),
        averageAmount: transactions.length > 0 ? amounts.reduce((a, b) => a + b, 0) / amounts.length : 0,
        highestTransaction: transactions.length > 0 ? Math.max(...amounts) : 0,
        lowestTransaction: transactions.length > 0 ? Math.min(...amounts) : 0,
        recentTransactions: transactions.slice(0, 5),
        timestamp: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        data: dashboardData
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data',
      error: err.message
    });
  }
});

// ============================================
// ERROR HANDLING
// ============================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path,
    method: req.method
  });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(port, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║  THREE-TIER WEB ARCHITECTURE v2.0     ║
  ║  App Tier Server (Enhanced)            ║
  ╚════════════════════════════════════════╝
  
  🚀 Server running at: http://localhost:${port}
  📝 API Base URL: http://localhost:${port}/api
  🏥 Health Check: http://localhost:${port}/health
  
  Available Endpoints:
  ├─ GET    /api/transaction          (List all transactions)
  ├─ GET    /api/transaction/stats    (Get statistics)
  ├─ GET    /api/transaction/:id      (Get single transaction)
  ├─ POST   /api/transaction          (Create transaction)
  ├─ PUT    /api/transaction/:id      (Update transaction)
  ├─ DELETE /api/transaction/:id      (Delete transaction)
  ├─ DELETE /api/transaction          (Delete all)
  ├─ GET    /api/dashboard            (Dashboard analytics)
  ├─ GET    /health                   (Health check)
  └─ GET    /api/status              (Status info)
  
  `);
});

module.exports = app;
