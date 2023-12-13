"use strict"

const id = document.querySelector("#id"), 
pw = document.querySelector("#pw"),
name = document.querySelector("#name"),
pwCheck = document.querySelector("#pwCheck"),
registerBtn = document.querySelector("#register_btn")

registerBtn.addEventListener("click" , register)

function register() {
    const req = {
        id : id.value,
        name : name.value,
        pw : pw.value,
        pwCheck : pwCheck.value
    }
    // console.log(req)
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        if (res.success) {
            location.href="/login"
        } else {
            alert(res.msg)
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"))
    })
}