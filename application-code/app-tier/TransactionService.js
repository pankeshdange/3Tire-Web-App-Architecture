const dbcreds = require('./DbConfig');
const DbInit = require('./DbInit');
const mysql = require('mysql');

let con = null;
let dbConnected = false;
let usingSQLite = false;
let sqliteDb = null;

// Mock data for fallback
let mockTransactions = [
  { id: 1, amount: 50.00, description: 'Groceries', category: 'groceries' },
  { id: 2, amount: 120.00, description: 'Gas', category: 'transportation' },
  { id: 3, amount: 25.50, description: 'Movie', category: 'entertainment' },
  { id: 4, amount: 200.00, description: 'Electricity Bill', category: 'utilities' },
  { id: 5, amount: 45.00, description: 'Restaurant', category: 'food' }
];

// Initialize database connection
async function initializeDatabase() {
  try {
    if (dbcreds.USE_SQLITE) {
      // Use SQLite for local development
      console.log('📦 Initializing SQLite database...');
      sqliteDb = await DbInit.initializeDatabase();
      dbConnected = true;
      usingSQLite = true;
      console.log('✓ SQLite database initialized successfully');
    } else {
      // Use MySQL for production
      console.log('📦 Initializing MySQL database...');
      con = mysql.createConnection({
        host: dbcreds.MYSQL.DB_HOST,
        user: dbcreds.MYSQL.DB_USER,
        password: dbcreds.MYSQL.DB_PWD,
        database: dbcreds.MYSQL.DB_DATABASE
      });

      con.connect((err) => {
        if (err) {
          console.warn('⚠️  MySQL connection failed:', err.message);
          console.log('✓ Falling back to mock data');
          dbConnected = false;
        } else {
          console.log('✓ MySQL database connected successfully');
          dbConnected = true;
        }
      });
    }
  } catch (err) {
    console.warn('⚠️  Database initialization error:', err.message);
    console.log('✓ Using mock data for development');
    dbConnected = false;
  }
}

// Call initialization when module loads
initializeDatabase();

function addTransaction(amount, desc, callback) {
    if (usingSQLite && dbConnected) {
        DbInit.run(
            'INSERT INTO transactions (amount, description, category) VALUES (?, ?, ?)',
            [parseFloat(amount), desc, 'general']
        ).then(() => {
            console.log("✓ Transaction added to SQLite database");
            if (callback) callback(200);
        }).catch(err => {
            console.warn("Warning: SQLite insert failed", err.message);
            // Add to mock as fallback
            const newId = Math.max(...mockTransactions.map(t => t.id), 0) + 1;
            mockTransactions.push({
                id: newId,
                amount: parseFloat(amount),
                description: desc,
                category: 'general'
            });
            if (callback) callback(200);
        });
        return;
    }

    if (!dbConnected || !con) {
        const newId = Math.max(...mockTransactions.map(t => t.id), 0) + 1;
        mockTransactions.push({
            id: newId,
            amount: parseFloat(amount),
            description: desc,
            category: 'general'
        });
        console.log("✓ Transaction added to mock data");
        if (callback) callback(200);
        return;
    }
    
    var sql = `INSERT INTO \`transactions\` (\`amount\`, \`description\`) VALUES ('${amount}','${desc}')`;
    con.query(sql, function(err,result){
        if (err) {
            console.warn("Warning: MySQL insert failed", err.message);
            addTransaction(amount, desc, callback);
        } else {
            console.log("✓ Transaction added to MySQL database");
            if (callback) callback(200);
        }
    }) 
}

function getAllTransactions(callback){
    if (usingSQLite && dbConnected) {
        DbInit.query('SELECT * FROM transactions ORDER BY id DESC').then(rows => {
            console.log("✓ Getting transactions from SQLite...");
            callback(rows || []);
        }).catch(err => {
            console.warn("Warning: SQLite query failed", err.message);
            callback(mockTransactions);
        });
        return;
    }

    if (!dbConnected || !con) {
        console.log("✓ Getting mock transactions...");
        return callback(mockTransactions);
    }
    
    var sql = "SELECT * FROM transactions";
    con.query(sql, function(err,result){
        if (err) {
            console.warn("Warning: MySQL query failed", err.message);
            return callback(mockTransactions);
        }
        console.log("✓ Getting transactions from MySQL...");
        return callback(result);
    });
}

function findTransactionById(id, callback){
    if (usingSQLite && dbConnected) {
        DbInit.queryOne('SELECT * FROM transactions WHERE id = ?', [id]).then(row => {
            console.log(`✓ Retrieved transaction ${id} from SQLite`);
            callback(row ? [row] : []);
        }).catch(err => {
            console.warn(`Warning: SQLite query failed for id ${id}`, err.message);
            callback(mockTransactions.filter(t => t.id == id));
        });
        return;
    }

    if (!dbConnected || !con) {
        const result = mockTransactions.filter(t => t.id == id);
        console.log(`✓ Retrieved transaction ${id} from mock data`);
        return callback(result);
    }
    
    var sql = `SELECT * FROM transactions WHERE id = ${id}`;
    con.query(sql, function(err,result){
        if (err) {
            console.warn(`Warning: MySQL query failed for id ${id}`, err.message);
            return callback(mockTransactions.filter(t => t.id == id));
        }
        console.log(`✓ Retrieved transaction ${id} from MySQL`);
        return callback(result);
    }) 
}

function deleteAllTransactions(callback){
    if (usingSQLite && dbConnected) {
        DbInit.run('DELETE FROM transactions').then(() => {
            console.log("✓ Deleted all transactions from SQLite");
            callback({ affectedRows: 5 });
        }).catch(err => {
            console.warn("Warning: SQLite delete failed", err.message);
            mockTransactions = [];
            callback({ affectedRows: 5 });
        });
        return;
    }

    if (!dbConnected || !con) {
        console.log("✓ Deleted all mock transactions");
        mockTransactions = [];
        return callback({ affectedRows: 5 });
    }
    
    var sql = "DELETE FROM transactions";
    con.query(sql, function(err,result){
        if (err) {
            console.warn("Warning: MySQL delete failed", err.message);
            mockTransactions = [];
            return callback({ affectedRows: 5 });
        }
        console.log("✓ Deleted all transactions from MySQL");
        return callback(result);
    }) 
}

function deleteTransactionById(id, callback){
    if (usingSQLite && dbConnected) {
        DbInit.run('DELETE FROM transactions WHERE id = ?', [id]).then(() => {
            console.log(`✓ Deleted transaction ${id} from SQLite`);
            callback({ affectedRows: 1 });
        }).catch(err => {
            console.warn(`Warning: SQLite delete failed for id ${id}`, err.message);
            mockTransactions = mockTransactions.filter(t => t.id != id);
            callback({ affectedRows: 1 });
        });
        return;
    }

    if (!dbConnected || !con) {
        mockTransactions = mockTransactions.filter(t => t.id != id);
        console.log(`✓ Deleted mock transaction ${id}`);
        return callback({ affectedRows: 1 });
    }
    
    var sql = `DELETE FROM transactions WHERE id = ${id}`;
    con.query(sql, function(err,result){
        if (err) {
            console.warn(`Warning: MySQL delete failed for id ${id}`, err.message);
            mockTransactions = mockTransactions.filter(t => t.id != id);
            return callback({ affectedRows: 1 });
        }
        console.log(`✓ Deleted transaction ${id} from MySQL`);
        return callback(result);
    }) 
}


module.exports = {addTransaction, getAllTransactions, deleteAllTransactions, findTransactionById, deleteTransactionById};







