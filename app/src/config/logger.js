
const winston = require("winston");
const { createLogger, transports, format } = require("winston");
const {  combine, timestamp, printf, label, json, simple, colorize } = format; 
const printfFormat =  printf(( {timestamp,level,label, message })  => {
  return `${timestamp} <${label}> ${level} : ${message}`;

})//가장 마지막에 던져주는 함수 여기선 json()
               //출력되는 포맷 
 const printLogFormat = combine(
  label({
      label: "백앤드 맛보기",
  }),
  
      format.colorize(),
      timestamp({
          format: "YYYY-MM-DD HH:MM:DD",
      }),
         
      printfFormat       
 );
const logger = createLogger({
  transports: [
      new transports.Console({
level:"info",
format: printLogFormat, 
       
  }),
],
});




  module.exports = logger;  