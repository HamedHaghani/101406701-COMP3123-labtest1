const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');

if (!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir);
    console.log('Loga directory created.');

}
process.chdir(logsDir);

for(let i = 0 ; i < 10 ; i++){
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `Log file number ${i}`);
    console.log(` Created File : ${fileName } `);
}