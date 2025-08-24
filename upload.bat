@echo off
chcp 65001 >nul
echo.
echo 🚀 开始自动 Git 提交流程...
echo.

:: 获取当前时间作为默认提交信息
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "datetime=%dt:~0,4%-%dt:~4,2%-%dt:~6,2% %dt:~8,2%:%dt:~10,2%"

:: 询问用户输入提交信息
set /p "commit_msg=请输入提交说明 (直接回车将使用默认信息): "
if "%commit_msg%"=="" set "commit_msg=自动提交于 %datetime%"

:: 执行 Git 操作
echo.
echo 📦 正在添加更改的文件...
git add .

echo.
echo 💾 正在提交更改...
git commit -m "%commit_msg%"

echo.
echo 📤 正在推送到远程仓库...
git push origin main

echo.
echo ✅ 完成！所有更改已提交并推送至 GitHub。
echo.
pause