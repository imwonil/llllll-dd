 "use strict";
class UserStorage {
     static #users={
        id: ["wonil", "emc2wonil", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name : ["원일이","원일이이","원일일이"],
          }; 
static getUsers(...fields)  {
const users = this.#users;
const newUsers = fields.reduce((newUsers, field) => {
  if (users.hasOwnProperty(field)){
     newUsers[field] = users[field];
  }
  return newUsers;
   
}, {}); 
   return newUsers;
}   
static getUserInfo(id){ 
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // [id, psword, name]의 배열 형성
     const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      
      return newUser;
    }, {});
    return userInfo;
}
static save(userInfo){
const users =this.#users;
users.id.push(userInfo.id);
users.name.push(userInfo.id);
users.psword.push(userInfo.id);
return { success: true};
}
}
module.exports = UserStorage;


