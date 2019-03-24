_BackEnd Tables with columns_

# users Table

| column name     | data type | details               |
| --------------- | --------- | --------------------- |
| id              | integer   | not null, primary key |
| username        | text      |                       |
| age             | integer   | not null              |
| password_digest | text      | not null              |
| email           | text      | not null, unique      |
| profile_pic     | text      |                       |
| first_name      | text      |                       |

# boards Table

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| title       | string    | not null              |
| description | string    | not null              |

# pins Table

| column name    | data type | details               |
| -------------- | --------- | --------------------- |
| id             | integer   | not null, primary key |
| title          | string    | not null              |
| pinContent_url | string    | not null              |
| pin_img        | string    | not null              |
| description    | string    |                       |
| user_id        | integer   | not null, foreign key |
| board_id       | integer   | not null, foreign key |
