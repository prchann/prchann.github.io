# pkg

## fmt

* `fmt.Print()`
* `fmt.Println()`
* `fmt.Printf()`
* `fmt.Errorf("AddAlbum: %v", err)`
* `fmt.Sprintf()`

## log

* `log.Fatal(err)`

## os

* `os.Getenv("ENV_VAR_NAME")`

## `database/sql`

包 `sql` 对关系型 DB 的操作进行了上层的统一封装，DB 适配交给下层的 driver 去实现。应尽可能使用 `sql`，避免使用 driver，可让代码更抽象。

一般的，开发者无需自行管理 DB 的连接，因 `sql.DB` handle 底层已承担了该工作。

R/W 数据：

* R: `db.Rows()`, `db.Row()`, `db.Query()`, `db.QueryRow()`
* W: `db.Exec()`

取消操作

编程步骤：

1. `required` import driver
1. `required` 打开某个数据库的 handle: `sql.Open()`
1. `required` 确认连接成功 `db.Ping()`，`sql.Open()` 不会建立连接
1. `required` R/W 数据
1. `optional` 释放资源 `defer rows.Close()`: `db.Rows()` 可能将大量数据读入内存，建议手动释放

`context`

## `gorm`

## `error`

## `strconv`

* `strconv.Atoi()`
