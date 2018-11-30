DROP DATABASE IF EXISTS reviews_db;
CREATE DATABASE reviews_db;
USE reviews_db;

CREATE TABLE `reviews` (
  `id` INT( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `movieId` VARCHAR (50) NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY ( `id` ),
  
);

