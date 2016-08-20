CREATE DATABASE CHAT;

USE CHAT;

CREATE TABLE ROOMS (

  ID INTEGER NOT NULL AUTO_INCREMENT,
  roomname TEXT,

  PRIMARY KEY (ID)
);

CREATE TABLE USERS (

  ID INTEGER NOT NULL AUTO_INCREMENT,
  username TEXT,

  PRIMARY KEY (ID)
);



CREATE TABLE MESSAGES (

  ID INTEGER NOT NULL AUTO_INCREMENT,
  body TEXT,
  TIMESENT TIMESTAMP,
  ROOMS_ID INTEGER,
  USER_ID INTEGER,

  PRIMARY KEY (ID),
  FOREIGN KEY (ROOMS_ID) REFERENCES ROOMS(ID),
  FOREIGN KEY (USER_ID) REFERENCES USERS(ID)

);

INSERT INTO ROOMS (roomname) VALUES ('lobby');
INSERT INTO USERS (username) VALUES ('calvin');
INSERT INTO USERS (username) VALUES ('hobbes');
INSERT INTO MESSAGES (body, ROOMS_ID, USER_ID) VALUES ('BAHAHA', 1, 1);
INSERT INTO MESSAGES (body, ROOMS_ID, USER_ID) VALUES ('HEHEHE', 1, 2);
INSERT INTO MESSAGES (body, ROOMS_ID, USER_ID) VALUES ('BLAH BALH BLAH', 1, 2);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

