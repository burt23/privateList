DROP DATABASE IF EXISTS privateList;

CREATE DATABASE privateList;

USE privateList;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR (50) NOT NULL,
  password VARCHAR (255) NOT NULL,
  salt VARCHAR (255) NULL
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  message VARCHAR(2000) NOT NULL,
  secret VARCHAR(255) NULL,
  time TIMESTAMP,
  list_id INT
);

CREATE TABLE devices (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  device_name VARCHAR(2000) NOT NULL,
  device_id VARCHAR(255) NULL,
  device_lat VARCHAR(100) NULL,
  device_long VARCHAR(100) NULL,
  time TIMESTAMP
);

CREATE TABLE lists (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  list_name VARCHAR(255) NOT NULL,
  user_id INT NOT NULL
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

