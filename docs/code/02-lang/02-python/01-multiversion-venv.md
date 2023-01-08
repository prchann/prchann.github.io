# 多版本和虚拟环境

## 多版本

不同工程可能对 Py 版本要求不同，此时需安装多个 Py 版本，根据工程所需动态切换。

Py 生态中存在多个多版本解决方案，笔者使用 [pyenv](https://github.com/pyenv/pyenv)。

> pyenv 安装和 .zshrc 配置，请参考官方文档。

```shell
# 列出全部可安装 Py 版本
pyenv install -l

# 安装 Py
pyenv install 3.11.1
pyenv install 2.7.18

# 列出已安装的 Py 版本
pyenv versions
# 查看当前使用中的 Py 版本
pyenv version

# 设置全局默认使用的 Py 版本
pyenv global 3.11.1

# 设置工程目录默认使用的 Py 版本
# 仅支持虚拟环境，详情参考下方的虚拟环境章节
pyenv local venv-3.11.1

# 设置当前 shell 的 Py 版本（一次性）
pyenv shell 3.11.1
```

## 虚拟环境

默认的，Py 的环境是全局的。若要工程级别的隔离，可用虚拟环境。

Py 生态中存在多个虚拟环境方案。若你用 pyenv 进行 Py 多版本管理， 它的 [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) 插件集成了 `virtualenv` 的虚拟环境管理能力。

> `.python-version`: virtualenv 使用该文件来记录工程的 Py 版本信息。

```shell
cd path/to/repo

# 创建虚拟环境 v3.11.1
pyenv virtualenv 3.11.1 v3.11.1

# 给工程设置虚拟环境
# 这会在工程目录中创建 .python-version 文件，并填入虚拟环境名称 v3.11.1
pyenv local v3.11.1

# 激活虚拟环境
pyenv avtivate
# 停用虚拟环境
pyenv deactivate
# 在 .zshrc 中加入以下指令，进入工程目录时自动激活虚拟环境，离开时自动停用
eval "$(pyenv virtualenv-init -)"
```

> `.python-version` 中只支持 virtualenv 创建的虚拟环境（`v3.11.1`），不支持真实环境（`3.11.1`）。
