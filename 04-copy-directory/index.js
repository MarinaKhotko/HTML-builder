const {mkdir} = require ('fs/promises');
const {copyFile, constants, readdir} = require ('fs');
const path = require('path');

const pathToFolderFrom = path.join(__dirname, 'files');
const pathToFolderTo = path.join(__dirname, 'files-copy');

function copyDir (pathToFolderFrom, pathToFolderTo){
        const filesCopy = mkdir(pathToFolderTo, { recursive: true }, (err) => {
            if (err) throw err;
          });

          readdir(pathToFolderFrom, (err, items) =>{
            if (err){
                console.log(err)
            }
            else{
                items.forEach(item =>{
                    const pathItemFrom =  path.join(__dirname, 'files', item);
                    const pathItemTo =  path.join(__dirname, 'files-copy', item);
                    copyFile(pathItemFrom, pathItemTo, (err, items) =>{
                        if (err){
                            console.log(err)
                        }});
            })
            console.log('Команда выполнена');
        }})
    }
copyDir (pathToFolderFrom, pathToFolderTo)

