const fs = require ('fs');
const path = require('path');

const pathToFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFolder, (err, files) =>{
    if (err){
        console.log(err)
    }
    else{
        files.forEach(file =>{
            const pathToFile =  path.join(__dirname, 'secret-folder', file);
            fs.stat(pathToFile, (err, stats) => {
                if (err) {
                  console.log(`err`)
                } else if (stats.isFile()){
                  let name= path.parse(pathToFile).name;
                  let extname = path.extname(pathToFile);
                  let type = extname.slice(1,extname.length)
                  let size = stats.size;
                  console.log (name + '-' + type + '-' + size + 'b')
                }
            }) 
        })   
    }
})
