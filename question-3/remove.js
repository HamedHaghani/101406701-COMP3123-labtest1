const fs = require('fs');
const path = require('path');




const logsDir = path.join(__dirname, 'Logs');

function removeLogFiles() {
  if (fs.existsSync(logsDir)) {
    
    fs.readdir(logsDir, (err, files) => {
      if (err) throw err;
      files.forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`Deleting file :  ${file}`);
        
        fs.unlink(filePath, (err) => {
          if (err) throw err;
        });
      });

      fs.rmdir(logsDir, (err) => {
        if (err) throw err;
        console.log('Logs directory deleted.');
      });
    });
  } else {
    console.log('Logs directory does not exist.');
  }
}

removeLogFiles();


