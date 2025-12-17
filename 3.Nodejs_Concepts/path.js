const path = require('path')
const file = './3.Nodejs_Concepts/textFile/apple.txt'


console.log(path.extname(file))
// let dirname = path.dirname(file)
// let basename = path.basename(file)
console.log(path.dirname(file));
console.log(path.basename(file));
// console.log(path.isAbsolute(file));
// console.log(path.resolve(dirname, basename));


// Global Constants
console.log(__dirname);
console.log(__filename);



