@echo off
title IP Vexa - Installing Requirements & Dependencies...
color 0A
echo.
echo =======================================================
echo     ✦ IP VEXA ✦ - Installing Requirements & Dependencies
echo =======================================================
echo.

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not added to PATH!
    echo Please install Node.js (v18+) from https://nodejs.org/ and try again.
    pause
    exit /b 1
)

echo [1/2] Node.js environment detected successfully!
echo [2/2] Installing npm dependencies and Electron runtime in extracted_app...
echo.

cd /d "%~dp0extracted_app"
call npm install --force

echo.
echo =======================================================
echo     SUCCESS: All Requirements Installed!
echo     Launching IP Vexa Desktop Application...
echo =======================================================
echo.

call npm start
pause
