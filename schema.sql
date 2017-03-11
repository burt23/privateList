DROP DATABASE IF EXISTS privateList;

CREATE DATABASE privateList;

USE privateList;

CREATE TABLE users (
  id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR (50) NOT NULL,
  password VARCHAR (255) NOT NULL,
  salt VARCHAR (255) NULL
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY key,
  user_id INT NULL,
  message VARCHAR(2000) NOT NULL
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
