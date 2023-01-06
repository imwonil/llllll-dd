"use strict";
const { json } = require("body-parser");
//const UserStorage = require("../../models/UserStorage");
const logger = require("../../config/logger");
const User =require("../../models/User");

 const output ={
    home: (req, res) => {
      logger.info('GET / 304 "좌석 배치 이동"');
        res.render("home/index"); 
    },
    login: (req, res) => {
      logger.info(`GET / login 304 "로그인 화면으로 이동"`);
        res.render("home/login");

    },
    register: (req, res) => {
      logger.info(`GET / register 304 "화면가입 화면으로 이동"`);
        res.render("home/register");
    
    },
      fee: (req, res) => {
        logger.info(`GET / fee 304 "요금제로 이동"`);
        res.render("home/fee");
     },
    };     
   
const process = { 
   
 login: async (req, res) => {   
  const user = new User(req.body);
  const response = await user.login();
  
  const url ={ 
        
    method : "POST",
    path:  "/login",
    status: response.err ? 400 : 200,
};
    log(response, url);
    return res.status(url.status).json(response);
   
},
   register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    const url ={ 
        
      method : "POST",
      path:  "/registre",
      status:  response.err ? 500 : 201 ,
  };
      log(response, url);
      return res.status(url.status).json(response);
  
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
   
  log(response);
  return res.json(response);
   
  
 }, 
};    


module.exports = { 
process, 
output,
}; 

  const log =( response, url) => {
if(response.err){
  logger.error  (
    `${url.method} ${url.path}  ${url.status} Response: ${response.success}: ${response.err}`
    
  );
  } else { 
  logger.info(
    `${url.method} ${url.path}  ${url.status} Response: ${response.success}: ${response.mes || " "} `
   
  );
  } 
};