@REM This script is used to test the program
@echo off

@REM Delete everything in test/
rmdir /s /q test

@REM Create test/ directory
mkdir test

cd test
node ..
cd ..
