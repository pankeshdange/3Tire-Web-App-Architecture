#!/bin/bash

# Three-Tier Web Architecture - Startup Script
# This script helps you run both the frontend and backend

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  THREE-TIER WEB ARCHITECTURE LAUNCHER                      ║"
echo "║  Version 2.0 - Enhanced with Analytics & Features          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✓ Node.js found: $(node --version)"
echo "✓ npm found: $(npm --version)"
echo ""

# Backend Setup
echo "📦 Setting up BACKEND (App Tier)..."
cd ./application-code/app-tier
if [ ! -d "node_modules" ]; then
    echo "  Installing dependencies..."
    npm install
else
    echo "  Dependencies already installed"
fi

# Store backend PID
echo "  Starting backend server on port 4000..."
npm start &
BACKEND_PID=$!
echo "  Backend PID: $BACKEND_PID"
echo ""

sleep 2

# Frontend Setup
echo "📦 Setting up FRONTEND (Web Tier)..."
cd ../web-tier
if [ ! -d "node_modules" ]; then
    echo "  Installing dependencies..."
    npm install
else
    echo "  Dependencies already installed"
fi

echo "  Starting React development server on port 3000..."
npm start &
FRONTEND_PID=$!
echo "  Frontend PID: $FRONTEND_PID"
echo ""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  ✓ SERVICES STARTED SUCCESSFULLY                           ║"
echo "╠════════════════════════════════════════════════════════════╣"
echo "║  🔗 Frontend URL:  http://localhost:3000                    ║"
echo "║  🔗 Backend URL:   http://localhost:4000                    ║"
echo "║  🔗 API Base:      http://localhost:4000/api                ║"
echo "║                                                             ║"
echo "║  📊 Dashboard:     http://localhost:3000#/analytics         ║"
echo "║  ➕ Add Transaction: http://localhost:3000#/add-transaction  ║"
echo "║  📋 DB Demo:       http://localhost:3000#/db                ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Keep the script running
wait $BACKEND_PID $FRONTEND_PID
