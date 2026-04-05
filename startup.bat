@echo off
REM Three-Tier Web Architecture - Windows Startup Script
REM This script helps you run both the frontend and backend

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  THREE-TIER WEB ARCHITECTURE LAUNCHER                      ║
echo ║  Version 2.0 - Enhanced with Analytics ^& Features          ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✓ Node.js found: 
node --version

echo ✓ npm found: 
npm --version
echo.

REM Backend Setup
echo 📦 Setting up BACKEND (App Tier)...
cd application-code\app-tier

if not exist "node_modules" (
    echo   Installing dependencies...
    call npm install
) else (
    echo   Dependencies already installed
)

echo   Starting backend server on port 4000...
start "Backend Server" cmd /k npm start
echo.

timeout /t 3 /nobreak

REM Frontend Setup
cd..\web-tier
echo 📦 Setting up FRONTEND (Web Tier)...

if not exist "node_modules" (
    echo   Installing dependencies...
    call npm install
) else (
    echo   Dependencies already installed
)

echo   Starting React development server on port 3000...
start "Frontend Server" cmd /k npm start
echo.

echo ╔════════════════════════════════════════════════════════════╗
echo ║  ✓ SERVICES STARTED SUCCESSFULLY                           ║
echo ╠════════════════════════════════════════════════════════════╣
echo ║  🔗 Frontend URL:  http://localhost:3000                    ║
echo ║  🔗 Backend URL:   http://localhost:4000                    ║
echo ║  🔗 API Base:      http://localhost:4000/api                ║
echo ║                                                             ║
echo ║  📊 Dashboard:     http://localhost:3000 (then Analytics)   ║
echo ║  ➕ Add Transaction: http://localhost:3000 (Add Trans.)      ║
echo ║  📋 DB Demo:       http://localhost:3000 (DB Demo)          ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Opening frontend in browser...
timeout /t 3 /nobreak
start http://localhost:3000

pause
