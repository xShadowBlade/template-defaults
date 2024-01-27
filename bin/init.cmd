@REM Accept argument for project filepath / root directory
@REM If no argument is passed, use current directory
@REM If argument is passed, use it as the root directory

@REM Set root directory
IF "%1"=="" (
    SET ROOT_DIR=%CD%
) ELSE (
    SET ROOT_DIR=%1
)

@REM Set project name
SET /P PROJECT_NAME="Enter project name: "

@REM Set project git repository
SET /P PROJECT_GIT="Enter project git repository: "

@REM Copy everything from ../template/** to root directory
xcopy /E /Y /I ..\template\* %ROOT_DIR%

@REM Replace placeholder with project name and git repository
