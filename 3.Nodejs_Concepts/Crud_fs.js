const fs = require('fs')
let operation = process.argv[2]
let path = './3.Nodejs_Concepts/textFile/' + process.argv[3] + '.txt'
if (operation == 'write') {
    let content = process.argv[4]
    fs.writeFileSync(path, content)
}
else if (operation == 'read') {
    let data = fs.readFileSync(path, 'utf-8')
    console.log(data);
}
else if (operation == 'update') {
    let content = process.argv[4]
    fs.appendFileSync(path, content)
}
else if (operation == 'delete') { 
    fs.unlinkSync(path)
}
else {
    console.log('Operation not found!');
}

