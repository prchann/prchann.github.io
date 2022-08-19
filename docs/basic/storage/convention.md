---
sidebar_position: 3
---

# 规范

## MySQL

遵循 [MySQL naming / coding conventions: tips on mySQL database](https://anandarajpandey.com/2015/05/10/mysql-naming-coding-conventions-tips-on-mysql-database/)。

## Date Type

* 后台和数据库中使用 `timestamp` 无时区时间
* 客户端根据场景自行转换为 Locale 本地时间
