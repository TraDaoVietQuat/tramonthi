@echo off
title TramOnThi - Dev Server
cd /d "%~dp0"

set "PATH=%~dp0runtime;%PATH%"
timeout /t 8 /nobreak >nul

:: Build neu chua co
if not exist ".next\BUILD_ID" (
    call npm run build >nul 2>&1
)

for /f "usebackq" %%p in (`powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\find-port.ps1"`) do set PORT=%%p
if "%PORT%"=="" set PORT=3000

start "" /b cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:%PORT%"
set PORT=%PORT%
call npm run start
