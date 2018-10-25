DROP DATABASE IF EXISTS soundcloud;
CREATE DATABASE soundcloud;
USE soundcloud;

DROP TABLE IF EXISTS users;
		
CREATE TABLE users (
  id int not null auto_increment,
  pro INT,
  isFollowing INT,
  followers INT,
  trackCount INT,
  userName TEXT,
  profilePhoto TEXT,
  location TEXT,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS songs;
		
CREATE TABLE songs (
  id int not null auto_increment,
  userId INT,
  description TEXT,
  PRIMARY KEY (id)
);