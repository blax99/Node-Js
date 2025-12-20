import { usersList } from "../Model/userData.js"


export function userController(req, res){
    let usersData = usersList();
    res.render('userList',{users:usersData})
}