@echo off
title Krypton Package Manager (KPM) - Running
cd /d "%~dp0\app"
echo Iniciando Krypton Package Manager...
if not exist "node_modules\bytenode" (
  echo [Info] Instalando dependencias de runtime por primera vez...
  call npm install --omit=dev --silent
)
npx electron .
