"use strict";  

const id = document.querySelector("#id");
const name = document.querySelector("#name")
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword ");
const registerBtn = document.querySelector("#button");
const tell = document.querySelector("#tell");

 

registerBtn.addEventListener("click", register );

function register () {
 if(!id.value) return alert("아이디를 입력하세요");
 
 if (psword.value !== confirmPsword.value) { return alert("비밀번호가 일치하지 않습니다."); 
 
 

 }
 if (!psword.value ) return alert ("비밀 번호를 입력 하세요");
 const req = {
id: id.value,
name: name.value,
psword: psword.value,
tell: tell.value,

};
 
  
fetch("/register", {
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(req),  
})
.then((res) => res.json())
.then((res) => {          
if  (res.success) {
location.href ="/login"; 
} else {
  alert(res.msg);

}
 
});

}  