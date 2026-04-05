import React, { useState } from 'react';
import './TransactionForm.css';

function TransactionForm({ onTransactionAdded }) {
  const [formData, setFormData] = useState({
    amount: '',
    desc: '',
    category: 'general'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const categories = [
    'general',
    'groceries',
    'utilities',
    'entertainment',
    'transportation',
    'healthcare',
    'food',
    'shopping',
    'other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.amount || isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      setMessageType('error');
      setMessage('❌ Please enter a valid amount greater than 0');
      return;
    }

    if (!formData.desc || formData.desc.trim().length === 0) {
      setMessageType('error');
      setMessage('❌ Please enter a description');
      return;
    }

    if (formData.desc.length > 100) {
      setMessageType('error');
      setMessage('❌ Description must be less than 100 characters');
      return;
    }

    try {
      setLoading(true);
      setMessage('');
      
      const response = await fetch('/api/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setMessageType('success');
        setMessage('✅ Transaction added successfully!');
        setFormData({
          amount: '',
          desc: '',
          category: 'general'
        });
        
        if (onTransactionAdded) {
          onTransactionAdded();
        }

        // Clear message after 3 seconds
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessageType('error');
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (err) {
      setMessageType('error');
      setMessage(`❌ Failed to add transaction: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transaction-form-container">
      <h2>➕ Add New Transaction</h2>
      
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label htmlFor="amount">Amount ($) *</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Description *</label>
          <input
            type="text"
            id="desc"
            name="desc"
            placeholder="Enter transaction description"
            value={formData.desc}
            onChange={handleChange}
            maxLength="100"
            required
          />
          <small className="char-count">
            {formData.desc.length}/100 characters
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {message && (
          <div className={`message-box message-${messageType}`}>
            {message}
          </div>
        )}

        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
        >
          {loading ? '⏳ Adding...' : '✓ Add Transaction'}
        </button>
      </form>

      <div className="form-tips">
        <p><strong>💡 Tips:</strong></p>
        <ul>
          <li>Amount must be a positive number</li>
          <li>Description helps you identify transactions later</li>
          <li>Categorize your transactions for better organization</li>
        </ul>
      </div>
    </div>
  );
}

export default TransactionForm;
