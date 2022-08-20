# Vim

教程

* `> vimtutor`
* [Basic vi Commands](https://www.cs.colostate.edu/helpdocs/vi.html)

```text
i: insert 在光标前插入
a: append 在光标后插入
A: 在本行后插入
ctl + f: forward 向前一页
ctl + b: backward 向后一页
ctl + d: down 向下半页
ctl + u: up 向上半页

dw: delete word
d$: 从光标删除至行尾

w - word 从当前光标当前位置直到下一个单词起始处，不包括它的第一个字符。
e - word end 从当前光标当前位置直到“单词末尾”，包括最后一个字符。
$ - 从当前光标当前位置直到当前行末。

使用操作符时输入数字可以使它重复那么多次
输入 2w 使光标向前移动两个单词。
输入 3e 使光标向前移动到第三个单词的末尾。
输入 0 (数字零) 移动光标到行首。

dd: 删除当前行
2dd:

u: undo
U: undo 整行
ctl + r: redo
operator [number] motion: d2w delete 2 words

dd
p: 将删除的行粘贴到光标的后一行

r: replace 替换一个字符

ce: change to word end；删除至单词尾部，同时进入编辑模式

ctl + g: 在状态栏显示当前文件名和光标所在行的信息
G: 跳转到文件最后一行
gg: 跳转到文件第一行
number + G: 跳转到第 number 行

/ + pattern: 搜索 pattern
n: 下一个
N: 上一个

%: 跳转到匹配的括号符 ([{ 等

`:s/old/new`: 替换一个
`:s/old/new/g`: 替换一行
`#,#s/old/new/g`: 替换从 # 到 # 行
`:%s/old/new/g`: 替换整个文件
`:%s/old/new/gc`: 替换整个文件，每个替换前给予确认
`:[start_line_no],[end_line_no]d`: 删除指定的行
CTRL-O 带您跳转回较旧的位置，CTRL-I 则带您到较新的位置

`:!ls`: 执行 shell 命令

v: 可视模式，移动光标来选择文本
`:w TEST`: 将选中的文本保存至 TEST 文件中
d: 删除选中的文本

`:r FILE`: read 读取 FILE 的内容，并将其置入到光标所在位置
`:r !ls`: 读取 ls 命令的输入，并将其置入到光标所在位置

o: 在下行开始插入
O: 在上行开始插入

R: 替换模式，每输入一个字符将替换一个字符

y: yank 复制
p: paste 粘贴
yw: 复制一个单词

`:set ic`: ignore case
`/pattern/c`: 单次忽略大小写
`:set hls is`: hightlight search, incsearch

CTRL-D 和 <TAB> 可以进行"命令行"补全

CTRL-W CTRL-W  可以使您在窗口之间跳转
```

```text
b: 向后移动光标一个单词
I: 在本行最前面开始输入
C: 删除本行光标后的内容，并开始插入
cc: 删除本行内容，并开始插入
D: 删除本行光标后的内容
dd: 删除本行
yy: 复制本行
```

## .vimrc

* vim-plug
* vim-javascript
* nerdtree
* syntastic: install eslint globally

