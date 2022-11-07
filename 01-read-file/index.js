const path = require('path');
const fs = require('fs');
const stream = require('stream');

const pathToFile = path.join(__dirname, 'text.txt');
const newStream = fs.createReadStream(pathToFile);

newStream.pipe(process.stdout);