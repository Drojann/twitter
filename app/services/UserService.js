const User = require('./../models/user')

class UserService {
    static create (id,username,name){
        return new User(id,username,name, "Sin Bio")
    } 

    static getInfo (){
        return [1, "Drojann","Alejandro","Sin Bio"]
    }

    static updateUserUsername (user, newUser){
        return user.username = newUser
    }

    static getAllUsernames (usernames){
        return usernames = (["Drojann","Drojann0","Drojan"])
    }

}   

module.exports = UserService