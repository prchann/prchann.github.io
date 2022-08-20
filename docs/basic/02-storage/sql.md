---
sidebar_position: 0
---

# SQL

入门教程 [w3schools](https://www.w3schools.com/sql/default.asp)。

## Query

```sql
SELECT c1, c2 FROM t;
SELECT * FROM t;

-- alias column
SELECT c1 alias1, c2 alias2 FROM t;
-- alias table
SELECT a.c1, b.c2 FROM tA a, tB b
WHERE a.c1 = b.c2;

-- DISTINCT
SELECT DISTINCT c FROM t;
```

### Condition

```sql
-- =, >, <, <=, >=, <>
SELECT * FROM t1
WHERE c1 = 'str'
WHERE c1 > 1

-- BETWEEN AND
-- begin and end values are included
-- the values can be numbers, text, or dates
WHERE c2 BETWEEN 1 AND 2 -- number
WHERE c2 NOT BETWEEN 'a' AND 'c' -- text
WHERE c2 BETWEEN #01/01/2020# AND #03/18/2020# -- date
WHERE c2 BETWEEN '2020-01-01' AND '2020-03-18' -- date

-- LIKE
-- %: 0, 1, or multiple characters
-- _: single character
WHERE c3 LIKE '_b%' -- finds any values that have "b" in the second position

-- IN (), NOT IN ()
WHERE c4 IN ('red', 'green', 'blue')
WHERE c4 NOT IN ('black', 'orange')
WHERE c4 IN ( SELECT c4 FROM t2 );


-- NULL, NOT NULL
SELECT * FROM t
WHERE c1 IS NULL
WHERE c2 IS NOT NULL


-- AND, OR, NOT
SELECT * FROM t
WHERE NOT c1 = 'child' OR ( c2 >= 18 AND c2 <= 200 );


-- EXISTS
-- is used to test for the existence of any record in a subquery
-- returns true if the subquery returns one or more records.
SELECT `name` FROM suppliers
WHERE EXISTS (SELECT `name` FROM products WHERE products.supplierId = suppliers.id AND price < 20);


-- ANY, ALL
-- operator must be =, <>, !=, >, >=, <, or <=
SELECT `name` FROM products
WHERE `id` = ANY (SELECT productId FROM orders WHERE quantity = 10);
```

### Order

```sql
SELECT c1 FROM t
ORDER BY c1 ASC, c2 DESC;
```

### Limit

```sql
-- row_count
SELECT c1 FROM t
LIMIT 15;

-- offset, row_count
SELECT c1 FROM t
LIMIT 0, 15;
```

### Group

```sql
-- often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns
SELECT COUNT(c1) c1Count, c2 FROM t
GROUP BY c2
ORDER BY c1Count;

-- HAVING
-- used with aggregate functions
SELECT COUNT(id) customerCount, country FROM customers
GROUP BY country
HAVING customerCount > 5
```

### Join

![inner-join](https://www.w3schools.com/sql/img_innerjoin.gif) ![left-join](https://www.w3schools.com/sql/img_leftjoin.gif) ![right-join](https://www.w3schools.com/sql/img_rightjoin.gif) ![full-outer-join](https://www.w3schools.com/sql/img_fulljoin.gif)

```sql
-- INNER JOIN
-- selects records that have matching values in both tables
SELECT a.c1, b.c2
FROM a
INNER JOIN b ON a.id = b.aId;

-- join three tables
SELECT a.c1, b.c2, c.c3
FROM (( a
INNER JOIN b ON a.id = b.aId )
INNER JOIN c ON a.id = c.aId );

-- LEFT JOIN
-- returns all records from the left table (table1), and the matched records from the right table (table2)
-- the result is NULL from the right side, if there is no match
SELECT a.c1, b.c2
FROM a
LEFT JOIN b ON a.id = b.aId;

-- RIGHT JOIN
SELECT a.c1, b.c2
FROM a
RIGHT JOIN b ON a.id = b.aId;

-- FULL (OUTER) JOIN
-- returns all records when there is a match in left (table1) or right (table2) table records
SELECT a.c1, b.c2
FROM a
FULL OUTER JOIN b ON a.id = b.aId;


-- Self JOIN
-- is a regular join, but the table is joined with itself
SELECT a.name customer1, b.name customer2, a.city
FROM customers a, customers b
WHERE a.id <> b.id
AND a.city = b.city
ORDER BY a.city;


-- UNION
-- combine the result-set of two or more SELECT statements
-- select only *distinct* values by default
SELECT col FROM a
UNION
SELECT col FROM b

-- allow duplicate values
SELECT c1, c2 FROM a
UNION ALL
SELECT c1, c2 FROM b
```

## Insert, Update and Delete

```sql
-- INSERT INTO
INSERT INTO t
VALUES (v1, v2, v3); -- make sure the order of the values is in the same order as the columns in the table

INSERT INTO t
VALUES (NULL, '', v3); -- user NULL or '' to indicate using default value

INSERT INTO t (c1, c5, c3)
VALUES (v1, v5, v3); -- pay attention to the order of cols and values


-- UPDATE
UPDATE t
SET c1 = 'str', c3 = 1
WHERE c1 IS NULL;


-- DELETE FROM
DELETE FROM t
WHERE c1 = 1;
```

## Functions

Reference to [String Functions and Operators](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html).

```sql
-- MIN(), MAX(), COUNT(), AVG(), SUM()
SELECT AVG(price) FROM t;

-- CONCAT()
SELECT CONCAT(addressLine1, ', ', postalCode, ', ', city, ', ', country) AS addressDetail
FROM t;

-- CHAR_LENGTH()
SELECT c FROM t
WHERE CHAR_LENGTH(`name`) < 3

-- REPLACE()
UPDATE t
SET c1 = REPLACE(c1, 'from_str', 'to_str')
WHERE b = 1;
```

## Stored Procedures

```sql
-- create a procedure
CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM customers
GO;
-- execute procedure
EXEC SelectAllCustomers;

-- create a procedure with parameter
CREATE PROCEDURE SelectAllCustomers @city nvarchar(30)
AS
SELECT * FROM customers WHERE city = @city
GO;
-- execute procedure
EXEC SelectAllCustomers @city = "London";
```

## Advanced

```sql
-- SELECT INTO
-- copies data from one table into a new table
-- the new table will be created with the column-names and types as defined in the old table
-- you can create new column names using the AS clause
SELECT *
INTO b IN anotherDb
FROM a;

SELECT c1, c2
INTO b
FROM a;

-- INSERT INTO SELECT
-- copies data from one table and inserts it into another table
-- 1. requires that data types in source and target tables match
-- 2. the existing records in the target table are unaffected
INSERT INTO b
SELECT * FROM a;

INSERT INTO b (c1, c2)
SELECT c1, c2 FROM a;

-- REPLACE INTO SELECT
-- 用后者数据替换前者（即，用 6-2 替换 4.2）
REPLACE INTO doc_state_info (doc_id, state_id, sub_state_id, content, user_id)
SELECT doc_id, 4, 2, content, user_id FROM doc_state_info
WHERE doc_id = 'gl21232025nzhffh' AND state_id = 6 and sub_state_id = 2;


-- CASE
-- if - then - else
-- once a condition is true, it will stop reading and return the result
-- if no conditions are true, it returns the value in the ELSE clause
-- if there is no ELSE part and no conditions are true, it returns NULL
SELECT c1
CASE
  WHEN age > 17 THEN 'adult'
  WHEN age < 18 THEN 'minor'
  ELSE ''
END AS ageStage
FROM t;

-- Opearte columns
-- NULL
SELECT `name`, unitPrice * (unitsInStock + unitsOnOrder)
FROM products;
-- in the example above, if any of the "unitsOnOrder" values are NULL, the result will be NULL
SELECT `name`, unitPrice * (unitsInStock + IFNULL(unitsOnOrder, 0))
FROM products;
```

## Admin

```sql
-- DATABASE
SHOW DATABASES;

CREATE DATABASE d;

DROP DATABASE d;

-- TABLE
SHOW TABLES;

DESC t;
SHOW FULL COLUMNS FROM t;

CREATE TABLE t (
  c1 type1,
  c2 type2
);

DROP TABLE t;

-- Index
SHOW INDEX FROM t;

ALTER TABLE t ADD UNIQUE `uniqueName`(c1, c2, c3);

ALTER TABLE t DROP INDEX constraint_name;
ALTER TABLE t DROP INDEX column_name;
-- If it was defined unique using PRIMARY KEY clause, use:
ALTER TABLE t DROP PRIMARY KEY;
```

## Help

```sql
?
-- or
help
```

## Best Practice

* Uppercase KEYWORD for easy read;
* Avoid using `*` for performence;
* Use line break reasonably.
