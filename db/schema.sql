DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burgerName varchar(30) NOT NULL,
  devoured BOOLEAN default false,
  PRIMARY KEY(id)
);

