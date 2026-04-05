# 🚀 QUICK START GUIDE - Three-Tier Web Architecture v2.0

## 📋 Prerequisites
- Node.js (v12 or higher)
- npm (comes with Node.js)
- Git (optional)
- A modern web browser

## ⚡ Quick Start - 2 Steps

### Option 1: Windows Users
```bash
# Just double-click this file
startup.bat
```

### Option 2: Mac/Linux Users
```bash
# Run the startup script
bash startup.sh
```

### Option 3: Manual Setup

#### Step 1: Install & Run Backend
```bash
cd application-code/app-tier
npm install
npm start
# Backend runs on: http://localhost:4000
```

#### Step 2: Install & Run Frontend (New Terminal)
```bash
cd application-code/web-tier
npm install
npm start
# Frontend runs on: http://localhost:3000
```

## 🌐 Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000/api
- **Health Check**: http://localhost:4000/health

## 📺 Features & Routes

### Home Page
- `http://localhost:3000#/` - Main home page

### 📊 Analytics Dashboard (NEW!)
- `http://localhost:3000#/analytics`
- **Features**:
  - Real-time transaction statistics
  - Total, average, highest, lowest transactions
  - Recent transactions list
  - Visual summary cards

### ➕ Add Transaction (NEW!)
- `http://localhost:3000#/add-transaction`
- **Features**:
  - Form validation
  - Category selection (7+ categories)
  - Amount and description input
  - Real-time character counter
  - Success/error notifications

### 📋 Database Demo
- `http://localhost:3000#/db` - View all transactions from database

## 🔌 API Endpoints

### Health & Status
```
GET /health                    - Server health check
GET /api/status               - API status information
```

### Transactions
```
GET    /api/transaction        - Get all transactions (with filters)
POST   /api/transaction        - Create new transaction
GET    /api/transaction/:id    - Get specific transaction
PUT    /api/transaction/:id    - Update transaction
DELETE /api/transaction/:id    - Delete specific transaction
DELETE /api/transaction        - Delete all transactions
```

### Analytics
```
GET    /api/transaction/stats  - Get transaction statistics
GET    /api/dashboard         - Get dashboard summary
```

### Query Parameters
```
GET /api/transaction?category=groceries&sortBy=amount_desc&limit=10
```

## 🛠️ Configuration

### Backend (.env)
```
PORT=4000
NODE_ENV=development
DB_HOST=your-database-host
DB_USER=your-db-user
DB_PWD=your-db-password
DB_DATABASE=your-database-name
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_ENV=development
```

## 📊 New Features v2.0

### Backend Enhancements
✅ Advanced transaction filtering by category
✅ Statistics calculation (total, average, min, max)
✅ Input validation & error handling
✅ Comprehensive API responses with success status
✅ Better logging and debugging
✅ Dashboard/analytics endpoints
✅ RESTful API design

### Frontend Enhancements
✅ React Dashboard component with real-time stats
✅ Improved Transaction Form with validation
✅ Category selection for transactions
✅ Enhanced navigation menu
✅ Visual improvements with gradients & animations
✅ Responsive design for mobile devices
✅ Success/error notifications
✅ Real-time character counter

### Database Features
✅ Multi-category support
✅ Enhanced transaction tracking
✅ Statistics calculation

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows: Find process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux: Find process on port 3000
lsof -i :3000
kill -9 <PID>
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database Connection Error
- Check DB_HOST, DB_USER, DB_PWD, DB_DATABASE in backend .env
- Ensure database server is running
- Check network connectivity to database

### CORS Errors
- Ensure backend is running on http://localhost:4000
- Frontend should be on http://localhost:3000
- CORS is enabled in the backend

## 📚 Project Structure

```
AWS_Project1-main/
├── application-code/
│   ├── app-tier/              # Node.js Backend
│   │   ├── index.js           # Legacy server
│   │   ├── server.js          # Enhanced server v2.0
│   │   ├── DbConfig.js        # Database config
│   │   ├── TransactionService.js
│   │   ├── package.json
│   │   └── .env.example
│   │
│   └── web-tier/              # React Frontend
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Dashboard/
│       │   │   ├── TransactionForm/
│       │   │   ├── DatabaseDemo/
│       │   │   ├── Menu/
│       │   │   └── Burger/
│       │   ├── App.js         # Enhanced with new routes
│       │   └── index.js
│       └── package.json
│
├── ENHANCEMENT_PLAN.md        # What's new
├── QUICK_START.md             # This file
├── startup.bat                # Windows launcher
└── startup.sh                 # Linux/Mac launcher
```

## 🚀 Next Steps

1. **Customize**: Modify colors, categories, and features
2. **Deploy**: Use AWS EC2, S3, RDS as per README.md
3. **Extend**: Add more features like user auth, export data, etc.

## 💡 Tips

- Use browser DevTools (F12) to debug frontend issues
- Check backend console for server logs
- Use Postman to test API endpoints directly
- Enable Redux DevTools for better state management

## 📞 Support

Refer to the original README.md for AWS architecture details and deployment instructions.

## 📝 Version History

- **v2.0**: Added Dashboard, Analytics, Enhanced Forms, Better API
- **v1.0**: Initial three-tier architecture setup
