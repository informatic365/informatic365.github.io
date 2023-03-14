@echo off
set /p num1=Inserisci il primo numero: 
set /p num2=Inserisci il secondo numero: 

echo.
echo Scegli un'operazione:
echo 1. Addizione
echo 2. Sottrazione
echo 3. Moltiplicazione
echo 4. Divisione
echo.

set /p op=Inserisci il numero dell'operazione desiderata: 

if %op% equ 1 (
    set /a result=%num1% + %num2%
) else if %op% equ 2 (
    set /a result=%num1% - %num2%
) else if %op% equ 3 (
    set /a result=%num1% * %num2%
) else if %op% equ 4 (
    set /a result=%num1% / %num2%
) else (
    echo Operazione non valida.
    goto end
)

echo.
echo Risultato: %result%

:end
pause >nul
