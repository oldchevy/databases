CREATE DATABASE CHAT;

USE CHAT;

CREATE TABLE ROOMS (

  ID INTEGER NOT NULL AUTO_INCREMENT,
  NAME TEXT,

  PRIMARY KEY (ID)
);

CREATE TABLE USERS (

  ID INTEGER NOT NULL AUTO_INCREMENT,
  NAME TEXT,

  PRIMARY KEY (ID)
);



CREATE TABLE MESSAGES (

  ID INTEGER NOT NULL AUTO_INCREMENT,
  BODY TEXT,
  TIMESENT TIMESTAMP,
  ROOMS_ID INTEGER,
  USER_ID INTEGER,

  PRIMARY KEY (ID),
  FOREIGN KEY (ROOMS_ID) REFERENCES ROOMS(ID),
  FOREIGN KEY (USER_ID) REFERENCES USERS(ID)

);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

