module.exports = {
    getHouses: (req,res)=>{
       let db = req.app.get('db');
       let userid = 1;
       db.getHouse([userid]).then(houses=>{
           res.send(houses);
       })
    },
    addHouse: (req,res)=>{
        //pull stuff off body and then do DB query to add house. Don't need to do this for competency. 
    }
}