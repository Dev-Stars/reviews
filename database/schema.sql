DROP DATABASE IF EXISTS records;

CREATE DATABASE records;

USE records;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  userLoc varchar(40),
  numFriends int,
  numPhotos int,
  numReviews int,
  photoLoc varchar(200),
  PRIMARY KEY(id)
);

CREATE TABLE locations (
  id int NOT NULL AUTO_INCREMENT,
  locname varchar(100),
  PRIMARY KEY(ID)
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  message text,
  stars int NOT NULL,
  posted date,
  userID int,
  locID int,
  PRIMARY KEY(id),
  FOREIGN KEY(locID) REFERENCES locations (id),
  FOREIGN KEY(userID) REFERENCES users (id)
);
