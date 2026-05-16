@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    https://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM Begin all REM://2 lines.  @REM://2 is used as a comment syntax for Windows
@REM://2 batch files.

@REM Set local scope for the variables with windows NT shell
@if "%OS%"=="Windows_NT" @setlocal
@set WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain

@set MAVEN_PROJECTBASEDIR=%~dp0
@IF NOT "%MAVEN_PROJECTBASEDIR:~-1%"=="\" set MAVEN_PROJECTBASEDIR=%MAVEN_PROJECTBASEDIR%\

@REM Find java.exe
@set JAVA_EXE=java.exe

@if defined JAVA_HOME goto findJavaFromJavaHome

%JAVA_EXE% -version >NUL 2>&1
@if "%ERRORLEVEL%" == "0" goto execute

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.
goto error

:findJavaFromJavaHome
@set JAVA_EXE=%JAVA_HOME%\bin\java.exe

@if exist "%JAVA_EXE%" goto execute

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.
goto error

:execute
@set WRAPPER_JAR="%MAVEN_PROJECTBASEDIR%.mvn\wrapper\maven-wrapper.jar"

@IF NOT EXIST %WRAPPER_JAR% (
  echo Downloading Maven Wrapper...
  powershell -Command "&{ (New-Object Net.WebClient).DownloadFile('https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper-3.2.0.jar', '%MAVEN_PROJECTBASEDIR%.mvn\wrapper\maven-wrapper.jar') }"
)

"%JAVA_EXE%" ^
  %MAVEN_OPTS% ^
  -cp %WRAPPER_JAR% ^
  %WRAPPER_LAUNCHER% %*

:error
@if "%OS%"=="Windows_NT" @endlocal
