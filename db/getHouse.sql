
select * from sim2users
join usershouses on sim2users.id = usershouses.userid 
join houseListings on houseListings.id = usershouses.houseid
where sim2users.id = $1;