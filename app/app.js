"use strict";
//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
 
const morgan = require("morgan");
//const fs = require("fs"); 


const app =express();
dotenv.config();
//
const home =require("./src/routes/home");

//const logger =require("./src/config/logger");  파일 이동 wwww.js 로
//logger.error("wonil");
  

//앱 셋팅
app.set("views", "./src/views");  
app.set("view engine","ejs"); 

 
app.use(express.static(__dirname+"/src/public"));

app.use(bodyParser.json());

//URL을 통해 전달되는 대이터에 한글,공백 등과 같은 문자가
//포함될 경우제대로 인식되지 앟는 문제 해결

app.use(bodyParser.urlencoded({extended: true}));



app.use("/", home); 
module.exports = app;