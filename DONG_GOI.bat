@echo off
title TramOnThi - Dong goi chia se
cd /d "%~dp0"

echo.
echo  ================================================
echo   TAO FILE ZIP DE CHIA SE
echo  ================================================
echo.

set "PATH=%~dp0runtime;%PATH%"

:: Build truoc khi dong goi
echo  Dang build project truoc khi dong goi...
call npm run build
if errorlevel 1 ( echo  [LOI] Build that bai! & pause & exit /b 1 )
echo  [OK] Build xong.
echo.

:: Tao file marker de KHOI_DONG.bat biet day la ban production
echo Production build > PRODUCTION_BUILD

echo  Dang nen project (co the mat 3-7 phut)...
echo.

set "OUTPUT=%~dp0TramOnThi-FullPackage.zip"
set "ZIP_SRC=%~dp0"
set "ZIP_OUT=%~dp0TramOnThi-FullPackage.zip"

if exist "%OUTPUT%" del "%OUTPUT%"

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\make-zip.ps1"

if exist "%OUTPUT%" (
    for %%f in ("%OUTPUT%") do set /a SIZE_MB=%%~zf / 1048576
    echo  [OK] Da tao: TramOnThi-FullPackage.zip
    echo  Kich thuoc: khoang %SIZE_MB% MB
    echo.
    echo  Cach su dung tren may khac:
    echo   1. Giai nen TramOnThi-FullPackage.zip
    echo   2. Mo thu muc vua giai nen
    echo   3. Double-click KHOI_DONG.bat
    echo   4. Doi 3 giay la xong! (khong can build lai)
    echo.
    start "" explorer /select,"%OUTPUT%"
) else (
    echo  [LOI] Tao zip that bai!
)

pause
