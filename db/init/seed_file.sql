
CREATE TABLE sim2users (id serial PRIMARY KEY, 
username VARCHAR(100)); 

INSERT INTO sim2users (username)
VALUES ('bugby');
INSERT INTO sim2users (username)
VALUES ('cheetoLover');
INSERT INTO sim2users (username)
VALUES ('DeerGod');
INSERT INTO sim2users (username)
VALUES ('MikeMiller');
INSERT INTO sim2users (username)
VALUES ('Freddie');
INSERT INTO sim2users (username)
VALUES ('ThunderThighs8000')

create table houseListings (id serial PRIMARY KEY, name VARCHAR(180), description text, loan int, mortgage int, rent int, streetAdd text, city text, state varchar(2), zipcode int);

insert into houseListings (name, description, loan, mortgage, rent, streetAdd, city, state, zipcode)
values ('Howl''s Moving Castle', 'It moves, dawg', 5000000, 10000, 10000, 'ever moving', 'check Google maps', 'NA', 00000 );

insert into houseListings (name, description, loan, mortgage, rent, streetAdd, city, state, zipcode)
values ('My Gargage', 'Bring and blanket and space heater', 5000, 300, 300, '36 Route 66', 'My House', 'UT', 84503 );

-- intermediary table for many to many: sim2users and houseListings form the many to many relationship. 
-- sim3: 68D
-- sim2: 68E. With an intermediary table, the relationship between this table and sim2users or houseListings is a one to many relationship. 
create table usersHouses (userid int, houseid int)

insert into usersHouses (userid, houseid)
values (1,2);
insert into usersHouses (userid, houseid)
values (2,2);
insert into usersHouses (userid, houseid)
values (1,1);
insert into usersHouses (userid, houseid)
values (3,2);
insert into usersHouses (userid, houseid)
values (4,1);

-- alter table
alter table usersHouses
add column "id" serial primary KEY;

-- sim2: 67G, sim3: 107E
alter table usersHouses
add column "constraint" int unique;

-- addesses table:
--  sim3: 68C. One to one relationship with sim2users table. 
-- sim2: 67E
create table useraddresses (id serial primary key, userid int, street text, city text, state varchar(2), zipcode int, foreign key (userid) references sim2users(id))