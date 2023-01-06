"use strict";

const db = require("../config/db");

class UserStorage{     
//static getUsers(isAll, ...fields) {} 사용하고 싶은면 만들면 된다.
   
static getUserInfo(id){

   return new Promise((resolve, reject) => {
      const quary ="SELECT * FROM  users WHERE id = ?" ;
    db.query(quary, [id], (err, data ) => {
  if (err) reject(`${err}`);
      else resolve(data[0]);
   });
});
} 
 
 
static async save(userInfo) {
    return new Promise((resolve, reject) => {
   const quary = " INSERT INTO  users( id, name, psword, tell) VALUES(?, ?, ?, ?) ;" ;
 db.query(
   quary, 
   [userInfo.id, userInfo.name, userInfo.psword, userInfo.tell],
    (err) => {
if (err) reject(`${"이미 존재한 아이디 입니다."}`);
   else resolve({ success: true });
    
});
}); 

}
   
}
 
module.exports = UserStorage;

 