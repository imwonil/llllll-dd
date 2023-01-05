
"use strict";
const express =require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); 


router.get("/",  ctrl.output.home); 
router.get("/fee",  ctrl.output.fee); 
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/", ctrl.process.fee);
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;  