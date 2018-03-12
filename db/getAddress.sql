-- sim3: 68C
select * from sim2users
join useraddresses on useraddresses.userid = sim2users.id
where sim2users.id = $1;