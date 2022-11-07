const fs = require ('fs');
const path = require('path');

function mergeStyles (){
    const pathToFolder = path.join(__dirname, 'styles');
    const pathToFoDest = path.join(__dirname, 'project-dist', 'bundle.css');
    const writeable = fs.createWriteStream(pathToFoDest)

    fs.readdir(pathToFolder, (err, items) => {
        if (err){
          console.log(err);  
        }
        else{
            items.forEach(item =>{
                if(path.extname(item) === '.css'){
                
                 const pathItemFrom =  path.join(__dirname, 'styles', item);
                 let readable = fs.createReadStream(pathItemFrom);
                
                 readable.on('readable', ()=>{
                    let chunk;
                    while (null !== (chunk = readable.read())) {
                        writeable.write(chunk);
                    }
                 })
                 readable.on('end', () => {
                    console.log('Done...');
                  });
            }})  
        }
      });
}

    mergeStyles () 