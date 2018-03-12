let id = 11;
module.exports = {
    login: (req, res, next) =>{
        console.log('hit login function');
        let {username} = req.body;
        const db = req.app.get('db');
        let users = db.getUsers().then(users=>{

            console.log(users);

            const user = users.find(user=> user.username === username);
            
            console.log(user.username);

            if (user) {
                console.log(req.session.user);
                req.session.user.username = user.username;
                res.status(200).send(req.session.user);
            }
            else {
                res.status(403).send('Please Register');
            }

        }).catch(e=>console.log(e))
    },

    register: (req, res, next) => {
        id++;
        let {username, password} = req.body;
        const db = req.app.get('db');
        console.log(id);
        db.newUser([id, username]).then(users => {
            console.log(users);
            res.status(200).send(users);
        }
        )

    }
}