const fs = require('fs');
const Folderer = require('./src/folderer');

const myArgs = process.argv.slice(2);
const path = myArgs[0];

if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    const folderer = new Folderer(path);
    folderer.run();
} else {
    console.error("Error: not a directory", path);
}