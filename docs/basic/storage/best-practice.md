# 最佳实践

## MySQL

* id binary(16) UUID_TO_BIN(UUID())
  * WHERE id = UUID_TO_BIN(?)
* Escaping 将参数当作一个值进行转义
* 减少请求 MySQL Server 的次数
* 考虑数据量很大的情况
* 善用索引和缓存

## Docker

```bash
docker run -d \
--name mysql \
-e LANG=C.UTF-8 \
-e MYSQL_ALLOW_EMPTY_PASSWORD=yes \
-v mysql:/var/lib/mysql \
-p 3306:3306 \
--restart always \
mysql:5.7 \
--character-set-server=utf8mb4 \
--collation-server=utf8mb4_unicode_ci
```

Use env `LANG` to support typing Chineses. It comes from base image [debian](https://hub.docker.com/_/debian#locales).

## Guides

* 在 MySQL 中使用 UUID: [Mysql 8.0: UUID support](https://mysqlserverteam.com/mysql-8-0-uuid-support/)。

## 数据类型

### Datetime

建议使用 `datetime`(而非 `timestamp`)，并固定为 UTC 时间。[参考](https://stackoverflow.com/questions/409286/should-i-use-the-datetime-or-timestamp-data-type-in-mysql?noredirect=1&lq=1)。

* 不随时区变化，存储中是一个固定值（字符串）
* 阅读友好
* 容易转换为 Unix 时间戳 `SELECT UNIX_TIMESTAMP(my_datetime)`
