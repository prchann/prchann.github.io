# Go 基础

## 基础

### 包、变量和函数

#### 包

每个 Go 程序都是由包构成的。

程序从 main 包开始运行。

#### 导入

```go
import "fmt"
```

```go
import (
    "fmt"
    "math"
)
```

#### 导出名

首字母大写的名字自动导出，否则未导出。

#### 函数

当函数参数类型均一样时，除了最后一个参数外，其他参数的类型均可忽略。

```go
func add (x, y int) int {
    return x + y
}
```

#### 多值返回

函数可以返回任意数量的返回值。

```go
func swap(x, y string) (string, string) {
	return y, x
}
```

#### 变量

用 `var` 来定义变量。

```go
package main

import "fmt"

// 和函数参数一样，当类型一样时，除了最后一个，其他的类型可省略
var c, python, java bool

func main() {
    // 函数中也可以定义变量
	var i int
	fmt.Println(i, c, python, java)
}
```

#### 变量的初始化

```go
package main

import "fmt"

// 变量声明可以包含初始值，每个变量对应一个
var i, j int = 1, 2

func main() {
    // 如果初始化值已存在，则可以省略类型；变量会从初始值中获得类型
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)
}
```

#### 短变量声明

在函数中，简洁赋值语句 `:=` 可在类型明确的地方代替 `var` 声明。

函数外的每个语句都必须以关键字开始（`var`, `func` 等等），因此 `:=` 结构不能在函数外使用。

```go
package main

import "fmt"

func main() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}
```
#### 基本类型

```go
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // uint8 的别名

rune // int32 的别名
    // 表示一个 Unicode 码点

float32 float64

complex64 complex128
```

int, uint 和 uintptr 在 32 位系统上通常为 32 位宽，在 64 位系统上则为 64 位宽。 当你需要一个整数值时应使用 int 类型，除非你有特殊的理由使用固定大小或无符号的整数类型。

```go
package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Printf("Type: %T Value: %v\n", z, z)
}
```

#### 零值

没有明确初始值的变量声明会被赋予它们的 零值。

零值是：

* 数值类型为 0，
* 布尔类型为 false，
* 字符串为 ""（空字符串）。

#### 类型转换

表达式 T(v) 将值 v 转换为类型 T。

```go
i := 42
f := float64(i)
u := uint(f)
```

#### 类型推导

在声明一个变量而不指定其类型时，变量的类型由右值推导得出。

当右值声明了类型时，新变量的类型与其相同：

```go
var i int
j := i // j 也是一个 int
```

不过当右边包含未指明类型的数值常量时，新变量的类型就可能是 int, float64 或 complex128 了，这取决于常量的精度：

```go
i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```

#### 常量

常量的声明与变量类似，只不过是使用 const 关键字。

常量可以是字符、字符串、布尔值或数值。

常量不能用 := 语法声明。

#### 数值常量

数值常量是高精度的 值。

一个未指定类型的常量由上下文来决定其类型。

再尝试一下输出 needInt(Big) 吧。

（int 类型最大可以存储一个 64 位的整数，有时会更小。）

```go
package main

import "fmt"

const (
	// 将 1 左移 100 位来创建一个非常大的数字
	// 即这个数的二进制是 1 后面跟着 100 个 0
	Big = 1 << 100
	// 再往右移 99 位，即 Small = 1 << 1，或者说 Small = 2
	Small = Big >> 99
)

func needInt(x int) int { return x*10 + 1 }
func needFloat(x float64) float64 {
	return x * 0.1
}

func main() {
	fmt.Println(needInt(Small))
	fmt.Println(needFloat(Small))
	fmt.Println(needFloat(Big))
}
```

### 流程控制语句：for、if、else、switch 和 defer

#### for

```go
package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)
}
```

```go
package main

import "fmt"

func main() {
	sum := 1
    // 其中，初始化和后置语句是可选的
    // 此时，分号可去掉（这也就是 C 中的 while 了）
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)
}
```

若省略循环条件，for 就变成了无限循环。

```go
package main

func main() {
	for {
	}
}
```

#### if

```go
package main

import (
	"fmt"
	"math"
)

func sqrt(x float64) string {
	if x < 0 {
		return sqrt(-x) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}

func main() {
	fmt.Println(sqrt(2), sqrt(-4))
}
```

```go
package main

import (
	"fmt"
	"math"
)

func pow(x, n, lim float64) float64 {
	// 可在条件表达式前，执行一个简短的语句
    // 该语句声明的变量的作用域仅在 if 及其 else 之内
    if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	// 这里开始就不能使用 v 了
	return lim
}

func main() {
	fmt.Println(
		pow(3, 2, 10),
		pow(3, 3, 20),
	)
}
```

#### switch

```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Print("Go runs on ")
    // 运行第一个值等于条件表达式的 case 语句
	switch os := runtime.GOOS; os {
    // case 无需为常量，且取值不必为整数
	case "darwin":
		fmt.Println("OS X.")
        // 除非以 fallthrough 语句结束，否则分支会自动终止
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	t := time.Now()
    // 没有条件的 switch 同 switch true 一样
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}
}
```

#### defer

defer 语句会将函数推迟到外层函数返回之后执行。

推迟调用的函数其参数会立即求值，但直到外层函数返回前该函数都不会被调用。

```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}
```

defer 栈: FILO

### 更多类型：struct、slice 和映射

#### 指针



## 方法和接口

## 并发

## 错误处理

errer 是普通的类型，判断 `err != nil`

## 参考

* [Go by Example](https://gobyexample.com)
* [Go go-to guide](https://yourbasic.org/golang/)
* [Learn Web Programming in Go by Examples](https://gowebexamples.com)
* [Go语言圣经](https://books.studygolang.com/gopl-zh/)
* [Go语言高级编程(Advanced Go Programming)](https://chai2010.gitbooks.io/advanced-go-programming-book/content/)
* [Golang 高级编程](https://learnku.com/docs/bettercoding/1.0/the-difference-between-reflection-operation-common-variable-type-and-kind/7052)
* [go interface](https://jordanorelli.com/post/32665860244/how-to-use-interfaces-in-go)
* [算法的 Go 实现](https://github.com/TheAlgorithms/Go)
