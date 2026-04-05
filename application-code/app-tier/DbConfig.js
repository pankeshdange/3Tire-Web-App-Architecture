// Database Configuration - Supports both MySQL and SQLite
const fs = require('fs');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const USE_SQLITE = process.env.USE_SQLITE || NODE_ENV === 'development';

const config = {
    // MySQL Configuration (for production AWS RDS)
    MYSQL: {
        DB_HOST: "my-project-db-instance-1.cccrkwa0kcneo.us-east-1.rds.amazonaws.com",
        DB_USER: "admin",
        DB_PWD: 'admin123',
        DB_DATABASE: "webappdb"
    },
    
    // SQLite Configuration (for local development)
    SQLITE: {
        DB_PATH: path.join(__dirname, 'transactions.db'),
        DB_TYPE: 'sqlite'
    },
    
    // Environment
    NODE_ENV: NODE_ENV,
    USE_SQLITE: USE_SQLITE
};

module.exports = Object.freeze(config);