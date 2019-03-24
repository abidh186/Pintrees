DROP DATABASE IF EXISTS pin_trees;
CREATE DATABASE pin_trees;

\c pin_trees;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  username VARCHAR,
  password_digest VARCHAR NOT NULL,
  profile_pic VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  age INT
);

CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR NOT NULL,
  description VARCHAR
);

CREATE TABLE pins (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  board_id INT REFERENCES boards(id) ON DELETE CASCADE,
  title VARCHAR NOT NULL,
  description VARCHAR,
  webpage_url VARCHAR,
  pinImg_url VARCHAR NOT NULL
);
