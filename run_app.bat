@echo off
title VEXA AI Desktop Launcher
cd /d "%~dp0extracted_app"
start "" npx electron .
exit
