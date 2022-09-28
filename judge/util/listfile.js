// imports
const path = require('path');
const fs = require('fs');

// reads a directory and returns a list of files and directories
const readAll = (dir) => {
    // check if dir is a file
    if (!fs.statSync(dir).isDirectory()) {
        return {
            name: path.basename(dir),
            path: dir,
            isFile: true,            
        };
    }
    // read all files in dir
    let result = {
        name: path.basename(dir),
        path: dir,
        isFile: false,
        children: [],
    };
    let files = fs.readdirSync(dir);
    for (let file of files) {
        let sub = readAll(path.join(dir, file));
        result.children.push(sub);
    }
    return result;
}

// print the directory
const listAll = (result, depth) => {
    if (result.isFile) {
        console.log(`${' '.repeat(depth)}${result.name}`);
    } else {
        console.log(`${' '.repeat(depth)}${result.name}/`);
        for (let child of result.children) {
            listAll(child, depth + 2);
        }
    }
}

// read all the problems
const listAllProblems = () => readAll(path.join(__dirname, '../../problems/'));

// read a problem
const readProblem = (path) => fs.readFileSync(path, 'utf-8');

// export the functions
module.exports = {
    readAll,
    listAll,
    listAllProblems,
    readProblem
}
