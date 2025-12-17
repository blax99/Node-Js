
const fs = require('fs')

// fs.readFile('./2.Creating_Server/Krrish.txt','utf-8',(err, data)=>{
//     if(err){
//         console.log("error occured!!");
//         return false
//     }
//     console.log(data)
// })
// console.log("task finished!");


let data = fs.readFileSync('./2.Creating_Server/Krrish.txt', 'utf-8')
console.log(data);
console.log('task completed!');


