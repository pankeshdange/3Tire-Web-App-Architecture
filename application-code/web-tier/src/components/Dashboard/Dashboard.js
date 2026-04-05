import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const dashResponse = await fetch('/api/dashboard');
      const statsResponse = await fetch('/api/transaction/stats');
      
      const dashData = await dashResponse.json();
      const statsData = await statsResponse.json();

      if (dashData.success) {
        setDashboardData(dashData.data);
      }
      if (statsData.success) {
        setStats(statsData.stats);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="dashboard-loading">Loading Dashboard...</div>;
  }

  if (error) {
    return <div className="dashboard-error">Error: {error}</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>📊 Analytics Dashboard</h1>

      {dashboardData && (
        <div className="dashboard-grid">
          {/* Summary Cards */}
          <div className="dashboard-card summary-card">
            <h3>Total Transactions</h3>
            <p className="big-number">{dashboardData.totalTransactions}</p>
          </div>

          <div className="dashboard-card summary-card">
            <h3>Total Amount</h3>
            <p className="big-number">${dashboardData.totalAmount.toFixed(2)}</p>
          </div>

          <div className="dashboard-card summary-card">
            <h3>Average Amount</h3>
            <p className="big-number">${dashboardData.averageAmount.toFixed(2)}</p>
          </div>

          <div className="dashboard-card summary-card">
            <h3>Highest Transaction</h3>
            <p className="big-number">${dashboardData.highestTransaction.toFixed(2)}</p>
          </div>

          <div className="dashboard-card summary-card">
            <h3>Lowest Transaction</h3>
            <p className="big-number">${dashboardData.lowestTransaction.toFixed(2)}</p>
          </div>

          {stats && (
            <div className="dashboard-card summary-card">
              <h3>Record Count</h3>
              <p className="big-number">{stats.count}</p>
            </div>
          )}
        </div>
      )}

      {/* Recent Transactions */}
      {dashboardData && dashboardData.recentTransactions && (
        <div className="dashboard-card">
          <h3>📝 Recent Transactions</h3>
          <div className="recent-transactions">
            {dashboardData.recentTransactions.length > 0 ? (
              <ul>
                {dashboardData.recentTransactions.map(transaction => (
                  <li key={transaction.id} className="transaction-item">
                    <span className="transaction-desc">{transaction.description}</span>
                    <span className="transaction-amount">${transaction.amount.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No transactions yet</p>
            )}
          </div>
        </div>
      )}

      {/* Stats Summary */}
      {stats && (
        <div className="dashboard-card">
          <h3>📈 Statistics Summary</h3>
          <div className="stats-info">
            <p><strong>Total Records:</strong> {stats.count}</p>
            <p><strong>Total Amount:</strong> ${stats.total.toFixed(2)}</p>
            <p><strong>Average Amount:</strong> ${stats.average.toFixed(2)}</p>
            <p><strong>Range:</strong> ${stats.min.toFixed(2)} - ${stats.max.toFixed(2)}</p>
          </div>
        </div>
      )}

      <button className="refresh-btn" onClick={fetchDashboardData}>
        🔄 Refresh Dashboard
      </button>
    </div>
  );
}

export default Dashboard;
