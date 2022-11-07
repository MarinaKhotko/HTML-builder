const {mkdir} = require ('fs/promises');
const fs = require ('fs');
const {copyFile, constants, readdir, readFile, fstat} = require ('fs');
const path = require('path');



const pathToTemplate = path.join(__dirname, 'template.html');
const pathToAssets = path.join(__dirname, 'assets');
const pathToCompanents= path.join(__dirname, 'components');
const pathToStyles= path.join(__dirname, 'styles');

const pathToProdectDist= path.join(__dirname, 'project-dist');
const pathToProdectDistIndex= path.join(__dirname, 'project-dist', 'index.html');
const pathToProdectDistStyle= path.join(__dirname, 'project-dist', 'style.css');


function createDistFolder (pathToTemplate, pathToProdectDistIndex){
        mkdir(pathToProdectDist, { recursive: true }, (err) => {
            if (err) throw err;
          });

         copyFile(pathToTemplate, pathToProdectDistIndex, (err, items) =>{
            if (err){
            console.log(err)
        }});
}
createDistFolder(pathToTemplate, pathToProdectDistIndex);



function fillHTML (){
    
    readdir(pathToCompanents, (err, files)=>{
        if (!err){
            readFile(pathToProdectDistIndex, 'utf8', (err, fileContent) =>{
                if (!err){
                     files.forEach(file => {
                        if (path.extname(file)==='.html'){
                            const pathToCompanentsFile = path.join(__dirname, 'components', file);
                            readFile(pathToCompanentsFile, 'utf8', (errContent, eddedFileContent)=>{
                                const writeableHTML = fs.createWriteStream(pathToProdectDistIndex);
                                fileContent = fileContent.replace(`{{${path.parse(pathToCompanentsFile).name}}}`, eddedFileContent);
                                writeableHTML.write(fileContent);   
                            })
                         }
                    })
                }
            })
        }
    })
}
fillHTML();

function mergeStyles (){
    const pathToFolder = path.join(__dirname, 'styles');
    const pathToFoDest = path.join(__dirname, 'project-dist', 'style.css');
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
                }
            })  
        }
    });
}

mergeStyles () 


const pathToFolderFrom = path.join(__dirname, 'assets');
const pathToFolderTo = path.join(__dirname, 'project-dist', 'assets'); 

function copyFolderAssets (pathToFolderFrom, pathToFolderTo){
    const folderAssets = mkdir(pathToFolderTo, { recursive: true }, (err) => {
            if (err) throw err;
          });
    }
copyFolderAssets(pathToFolderFrom, pathToFolderTo)



const pathToFolderFontsFrom = path.join(__dirname, 'assets', 'fonts');
const pathToFolderFontsTo = path.join(__dirname, 'project-dist', 'assets', 'fonts'); 

function copyFonts (pathToFolderFontsFrom,pathToFolderFontsTo){
    const filesCopy = mkdir(pathToFolderFontsTo, { recursive: true }, (err) => {
            if (err) throw err;
          });

          readdir(pathToFolderFontsFrom, (err, items) =>{
            if (err){
                console.log(err)
            }
            else{
                items.forEach(item =>{
                    const pathItemFrom =  path.join(__dirname, 'assets', 'fonts', item);
                    const pathItemTo =  path.join(__dirname, 'project-dist', 'assets', 'fonts', item);
                    copyFile(pathItemFrom, pathItemTo, (err, items) =>{
                        if (err){
                            console.log(err)
                        }});
            })
            console.log('Команда выполнена');
        }})
    }
copyFonts (pathToFolderFontsFrom,pathToFolderFontsTo)


const pathToFolderImgFrom = path.join(__dirname, 'assets', 'img');
const pathToFolderImgTo = path.join(__dirname, 'project-dist', 'assets', 'img'); 

function copyImg (pathToFolderImgFrom,pathToFolderImgTo){
    const filesCopy = mkdir(pathToFolderImgTo, { recursive: true }, (err) => {
            if (err) throw err;
          });

          readdir(pathToFolderImgFrom, (err, items) =>{
            if (err){
                console.log(err)
            }
            else{
                items.forEach(item =>{
                    const pathItemFrom =  path.join(__dirname, 'assets', 'img', item);
                    const pathItemTo =  path.join(__dirname, 'project-dist', 'assets', 'img', item);
                    copyFile(pathItemFrom, pathItemTo, (err, items) =>{
                        if (err){
                            console.log(err)
                        }});
            })
            console.log('Команда выполнена');
        }})
    }
    copyImg (pathToFolderImgFrom,pathToFolderImgTo)


const pathToFolderSvgFrom = path.join(__dirname, 'assets', 'svg');
const pathToFolderSvgTo = path.join(__dirname, 'project-dist', 'assets', 'svg'); 

function copySvg (pathToFolderSvgFrom,pathToFolderSvgTo){
    const filesCopy = mkdir(pathToFolderSvgTo, { recursive: true }, (err) => {
            if (err) throw err;
          });

          readdir(pathToFolderSvgFrom, (err, items) =>{
            if (err){
                console.log(err)
            }
            else{
                items.forEach(item =>{
                    const pathItemFrom =  path.join(__dirname, 'assets', 'svg', item);
                    const pathItemTo =  path.join(__dirname, 'project-dist', 'assets', 'svg', item);
                    copyFile(pathItemFrom, pathItemTo, (err, items) =>{
                        if (err){
                            console.log(err)
                        }});
            })
            console.log('Команда выполнена');
        }})
    }
    copySvg (pathToFolderSvgFrom,pathToFolderSvgTo)


