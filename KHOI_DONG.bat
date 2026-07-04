@echo off
title TramOnThi
cd /d "%~dp0"
color 0A

echo.
echo  ================================================
echo   TRAMONTHI - HE THONG HOC TRUC TUYEN THPT
echo  ================================================
echo.

:: ── Su dung Node.js co san trong runtime\ ─────────
set "PATH=%~dp0runtime;%PATH%"

:: ── Kiem tra co so du lieu ─────────────────────────
if not exist "prisma\dev.db" (
    echo  [1/3] Khoi tao co so du lieu...
    call npx prisma db push --accept-data-loss >nul 2>&1
    call npx prisma db seed >nul 2>&1
    echo  [OK] Co so du lieu san sang.
)

:: ── Chon che do chay ───────────────────────────────
:: Neu co file PRODUCTION_BUILD (dat boi DONG_GOI.bat) thi chay production
:: Neu khong co → chay dev mode (khi dang lap trinh / sua code)
if exist "PRODUCTION_BUILD" (
    set "RUN_MODE=production"
    set "RUN_CMD=npm run start"
    set "WAIT=3"
) else (
    set "RUN_MODE=dev"
    set "RUN_CMD=npm run dev"
    set "WAIT=8"
)

echo  [2/3] Khoi dong server (%RUN_MODE%)...
for /f "usebackq" %%p in (`powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\find-port.ps1"`) do set PORT=%%p
if "%PORT%"=="" set PORT=3000

echo.
echo  Server: http://localhost:%PORT%
echo  Trinh duyet se tu dong mo sau %WAIT% giay...
echo  De DUNG server: dong cua so nay hoac nhan Ctrl+C
echo  ================================================
echo.

:: Mo trinh duyet chi khi chay truc tiep (khong chay qua .vbs)
if not defined CHAY_NGAM (
    start "" /b cmd /c "timeout /t %WAIT% /nobreak >nul && start http://localhost:%PORT%"
)
set PORT=%PORT%
call %RUN_CMD%
