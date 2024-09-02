@REM This script is used to test the program
@REM NOTE: MUST BE RUN FROM THE ROOT DIRECTORY OF THE PROJECT
@echo off

@REM Delete everything in test/
rmdir /s /q test

@REM Create test/ directory
mkdir test

cd test
node ..
cd ..
