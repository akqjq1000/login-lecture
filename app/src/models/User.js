"use strict"

const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body
        const {id, pw} = UserStorage.getUserInfo(body.id)

        if (id) {
            if (id === body.id && pw === body.pw) {
                return { success: true}
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."}
        }
        
       return {success: false, msg: "존재하지 않는 ID 입니다."}
    }

    register() {
        const body = this.body
        const {id, _ } = UserStorage.getUserInfo(body.id)

        if (id) { return { successs: false, msg: "중복된 ID 입니다." } }
        else {
            UserStorage.generateUser(body)
        }
    }
}

module.exports = User