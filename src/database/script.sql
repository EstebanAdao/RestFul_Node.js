
-- Database --

CREATE DATABASE `restful_ws_test` 

CREATE TABLE categories (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name varchar(150) NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE users (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     email varchar(255) NOT NULL,
     password varchar(40) not null,
     PRIMARY KEY (id)
);

-- Database para testes --

CREATE DATABASE `restful_ws_test` 

CREATE TABLE categories (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name varchar(150) NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE users (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     email varchar(255) NOT NULL,
     password varchar(40) not null,
     PRIMARY KEY (id)
);