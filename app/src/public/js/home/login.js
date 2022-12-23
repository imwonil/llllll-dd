    "use strict";  
   
const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("#button");



loginBtn.addEventListener("click", login);

function login() {
const req = {
id: id.value,
psword: psword.value,
};

fetch("/login", {
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },  
  body: JSON.stringify(req),  
}) 
.then((res) => res.json())
.then((res) => {          
if(res.success){
location.href = "/"; //https://www.youtube.com/watch?v=EBhtT9TGtqY
                     //지정한 경로로 이동한다.
} else {
alert(res.msg);

}
 
});

}  