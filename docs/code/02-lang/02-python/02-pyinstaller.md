# PyInstaller

它可将 Py 应用编译成二进制程序。

```shell
pyinstaller --distpath=. --onefile app.py
# --distpath: 输出的路径
# --onefile: 打包成*一个*程序
```

> **注意**：不支持跨平台，即运行二进制的 OS 要求和编译时的 OS 一致，比如都是 CentOS 7 或者都是 Windows。