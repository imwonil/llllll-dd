"use strict";

const db = require("../config/db");

class UserStorage{     
//static getUsers(isAll, ...fields) {} 사용하고 싶은면 만들면 된다.
   
static getUserInfo(id){

   return new Promise((resolve, reject) => {
      const quary ="SELECT * FROM users WHERE id = ?" ;
    db.query(quary, [id], (err, data ) => {
  if (err) reject(`${err}`);
       resolve(data[0]);
   });
});
}
 
 
static async save(userInfo) {
    return new Promise((resolve, reject) => {
   const quary = " INSERT INTO users( id, name, psword) VALUES(?, ?, ?) ;" ;
 db.query(
   quary, 
   [userInfo.id, userInfo.name, userInfo.psword],
    (err) => {
if (err) reject(`${err}`);
    resolve({ success: true });
});
}); 
}
   
}
 
module.exports = UserStorage;

