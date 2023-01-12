# git

## 常用命令

```shell
# 放弃当前目录下有改动的文件
git restore .
# 放弃一文件的改动
git checkout -- <file>

# 删除远程分支
git push origin :<branch>

# 回滚到最近一次提交
git reset --soft HEAD~1

# 输出 HEAD 指向的 commit 的短哈希
# https://stackoverflow.com/questions/15798862/what-does-git-rev-parse-do
# 该输出可用作 `go get <repo>:<branch>` 中的 `branch`
git rev-parse --short HEAD # > 9ec13fe

```

## 参考

1. [GitHub Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/)
