"use strict";
const PORT = process.env.PORT || 3000;

const app= require("../app");
app.listen(PORT, function (){
    console.log("서버가동.");
}); 