DROP DATABASE IF EXISTS records;

CREATE DATABASE records;

USE records;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  location varchar(40),
  numFriends int,
  numPhotos int,
  numReviews int,
  PRIMARY KEY(id)
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  message text,
  stars int NOT NULL,
  posted varchar(100),
  userID int,
  PRIMARY KEY(id),
  FOREIGN KEY(userID) REFERENCES Users (id)
);

