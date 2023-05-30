#Ma base de données : 

CREATE TABLE Gymnasium
(
  id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL
);

CREATE TABLE Member
(
  id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  unique_identifier VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(255) NOT NULL
);

CREATE TABLE Session
(
  id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  type_of_sport VARCHAR(255) NOT NULL,
  schedule VARCHAR(255) NOT NULL,
  maximum_capacity INT NOT NULL
);

CREATE TABLE Coach
(
  id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  last_name VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  specialty VARCHAR(255) NOT NULL
);

CREATE TABLE Member_Session
(
  member_id INT NOT NULL,
  session_id INT NOT NULL,
  PRIMARY KEY (member_id, session_id),
  FOREIGN KEY (member_id) REFERENCES Member (id),
  FOREIGN KEY (session_id) REFERENCES Session (id)
);

CREATE TABLE Coach_Session
(
  coach_id INT NOT NULL,
  session_id INT NOT NULL,
  PRIMARY KEY (coach_id, session_id),
  FOREIGN KEY (coach_id) REFERENCES Coach (id),
  FOREIGN KEY (session_id) REFERENCES Session (id)
);
