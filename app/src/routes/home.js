"use strict"

const express = require("express")
const ctrl = require('./home.ctrl')
const router = express.Router()


// GET
router.get("/", ctrl.output.home)
router.get("/login", ctrl.output.login)
router.get("/register", ctrl.output.register)

// POST
router.post("/login", ctrl.process.login)


module.exports = router