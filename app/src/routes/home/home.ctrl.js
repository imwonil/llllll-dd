"use strict";
//const UserStorage = require("../../models/UserStorage");
const logger = require("../../config/logger");
const User =require("../../models/User");

 const output ={
    home: (req, res) => {
      logger.info('GET / 200 "좌석 배치 이동"');
        res.render("home/index"); 
    },
    login: (req, res) => {
      logger.info(`GET / login 200 "로그인 화면으로 이동"`);
        res.render("home/login");

    },
    register: (req, res) => {
      logger.info(`GET / register 200 "화면가입 화면으로 이동"`);
        res.render("home/register");
    
    },
      fee: (req, res) => {
        logger.info(`GET / fee 200 "요금제로 이동"`);
        res.render("home/fee");
     },
    };     
   
const process = { 
   
 login: async (req, res) => {   
  const user = new User(req.body);
  const response = await user.login();
  if(response.err)
  logger.error(`POST /login 200 Response: "success: ${response.success},: err ${response.err}"`
  );
  else
  logger.info(
    `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
  );
   return res.json(response);
 },
 register: async (req, res) => {
    const user = new User(req.body);
  const response = await user.register();
  if(response.err)
  logger.error(
    `POST /login 200 Response: "success: ${response.success},: err ${response.err}"`
  );
  else
  logger.info(
    `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
  );  
   return res.json(response);
  
 },
 fee: async (req, res) => {
    const user = new User(req.body);
  const response = await user.fee();
  if(response.err)
  logger.info(
    `POST /fee 200 Response: "success: ${response.success},msg: ${response.msg}"`
  );
  else
  logger.info(
    `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
  );  
   return res.json(response);
   
  
 },
};    

module.exports = { 
process, 
output,
}; 

  