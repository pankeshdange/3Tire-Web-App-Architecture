// Database Initialization Module
const sqlite3 = require('sqlite3').verbose();
const DbConfig = require('./DbConfig');
const path = require('path');

let db = null;

/**
 * Initialize the SQLite database
 */
function initializeDatabase() {
    return new Promise((resolve, reject) => {
        try {
            const dbPath = DbConfig.SQLITE.DB_PATH;
            
            // Check if database file exists
            const dbExists = require('fs').existsSync(dbPath);
            
            db = new sqlite3.Database(dbPath, (err) => {
                if (err) {
                    console.error('❌ SQLite connection error:', err.message);
                    reject(err);
                    return;
                }
                
                console.log('✓ SQLite database connected:', dbPath);
                
                // Create table if it doesn't exist
                db.run(`
                    CREATE TABLE IF NOT EXISTS transactions (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        amount REAL NOT NULL,
                        description TEXT NOT NULL,
                        category TEXT DEFAULT 'general',
                        date DATETIME DEFAULT CURRENT_TIMESTAMP,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    )
                `, (err) => {
                    if (err) {
                        console.error('❌ Error creating table:', err.message);
                        reject(err);
                        return;
                    }
                    
                    console.log('✓ Database table ready');
                    
                    // Insert sample data if this is a new database
                    if (!dbExists) {
                        insertSampleData();
                    }
                    
                    resolve(db);
                });
            });
            
            // Enable foreign keys
            db.run('PRAGMA foreign_keys = ON');
            
        } catch (err) {
            console.error('❌ Database initialization error:', err);
            reject(err);
        }
    });
}

/**
 * Insert sample data into the database
 */
function insertSampleData() {
    const sampleData = [
        { amount: 50.00, description: 'Groceries', category: 'groceries' },
        { amount: 120.00, description: 'Gas', category: 'transportation' },
        { amount: 25.50, description: 'Movie', category: 'entertainment' },
        { amount: 200.00, description: 'Electricity Bill', category: 'utilities' },
        { amount: 45.00, description: 'Restaurant', category: 'food' }
    ];
    
    const stmt = db.prepare('INSERT INTO transactions (amount, description, category) VALUES (?, ?, ?)');
    
    sampleData.forEach(data => {
        stmt.run(data.amount, data.description, data.category, (err) => {
            if (err) {
                console.error('Error inserting sample data:', err.message);
            }
        });
    });
    
    stmt.finalize();
    console.log('✓ Sample data inserted');
}

/**
 * Get database connection
 */
function getDatabase() {
    return db;
}

/**
 * Run a SQL query
 */
function query(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

/**
 * Run a SQL query that returns a single row
 */
function queryOne(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

/**
 * Run a SQL insert/update/delete query
 */
function run(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ lastID: this.lastID, changes: this.changes });
            }
        });
    });
}

/**
 * Close the database connection
 */
function closeDatabase() {
    return new Promise((resolve, reject) => {
        if (db) {
            db.close((err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('✓ Database connection closed');
                    resolve();
                }
            });
        } else {
            resolve();
        }
    });
}

module.exports = {
    initializeDatabase,
    getDatabase,
    query,
    queryOne,
    run,
    closeDatabase
};
