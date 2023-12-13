"use strict"

const data_path = "./src/databases/users.json"
const fs = require("fs")

class UserStorage {

    static getUsers() {
        const data = fs.readFileSync(data_path)
        return JSON.parse(data);
    }
    
    static #getUsers(...fields) {
        const users = UserStorage.getUsers()
        
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers
        }, {})
        
        return newUsers
        
    }
    static getUserInfo(id) {
        const users = UserStorage.getUsers()

        const idx = users["id"].indexOf(id)
        const usersKeys = Object.keys(users)
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser
        }, {})
        
        return userInfo
        
    }
    static generateUser(user) {
        const users = UserStorage.getUsers()

        for ( let key in users) {
            if (users.hasOwnProperty(key)) {
                users[key].push(user[key])
            }
        }
        
        fs.writeFileSync(data_path, JSON.stringify(users), (err) => {
            console.log(err)
        })
    }
}

module.exports = UserStorage