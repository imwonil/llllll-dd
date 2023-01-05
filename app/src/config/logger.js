
const winston = require("winston");
const { createLogger, transports, format } = require("winston");
const {  combine, timestamp, printf, label,  simple, colorize } = format; 
const printfFormat =  printf(( {timestamp,level,label, message })  => {
  return `${timestamp} <${label}> ${level} : ${message}`;

})//가장 마지막에 던져주는 함수 여기선 json()
               //출력되는 포맷 

// 콘솔시 날짜 시간을 나타내게 해줌
//  const printLogFormat = combine(
//   label({
//       label: "백앤드 맛보기",
//   }),
  
      
//       timestamp({
//           format: "YYYY-MM-DD HH:MM:DD",
//       }),
         
//       printfFormat       
//  );

const printLogFormat = {
 file: combine(
    label({
        label: "백앤드 맛보기",
    }),
    
        
        timestamp({
            format: "YYYY-MM-DD HH:MM:DD",
        }),
           
        printfFormat   
 ),   
     console: combine(
      colorize(),
      simple()
     ),
      };


const opts = {
file:  new transports.File({
  filename : "./logs/access.log",
  dirname : "./logs",
  level:"info",
  format: printLogFormat.file,
 
}),
console:  new transports.Console({

  level:"info",
  format: printLogFormat.console,

 })
}

const logger = createLogger({
  transports: [opts.file],
});

 if (process.env.NODE_ENV !=="production") {
  logger.add(opts.console);
  }



  module.exports = logger;  