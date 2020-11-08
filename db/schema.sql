DROP DATABASE IF EXISTS kidj62fyhgng60qj;
CREATE DATABASE kidj62fyhgng60qj;
USE kidj62fyhgng60qj;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burgerName varchar(30) NOT NULL,
  devoured BOOLEAN default false,
  PRIMARY KEY(id)
);

