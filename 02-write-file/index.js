const fs = require ('fs');
const path = require('path');
const stream = require('stream');
const readline = require('readline');



const pathToFile = path.join(__dirname, './text.txt');

const newWriteStream = fs.createWriteStream(pathToFile)

const { stdin: input, stdout: output, stdout } = require('process');

const rl = readline.createInterface({ input, output });

  rl.on('SIGINT', ()=> {
    console.log('Запись завершена!');
    rl.pause();
 })
 
function writeFile(){
  console.log('Введите текст:');
  rl.on('line', (line) => {
    //   process.stdin.pipe(newWriteStream);
    if (line.toLocaleLowerCase() === 'exit'){
        console.log('Запись завершена!');
        rl.pause();
    }
      else{
        newWriteStream.write(line + '\n');
        console.log('Введите текст:');
      }
  });
}

writeFile()