// imports
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { execSync } = require('child_process');

// creates a directory with given name
// and returns the path to the directory
const createDirectory = () => {
    const dirName = uuidv4();
    const dirPath = path.join("/tmp", dirName);
    fs.mkdirSync(dirPath);
    console.log(`Created directory ${dirPath}`);
    return dirPath;
}

// deletes the directory with given path
const deleteDirectory = (dirPath) => {
    console.log(`Deleting directory ${dirPath}`);
    fs.rmSync(dirPath, { recursive: true });
}

// generates the command to compile the source code
const getExecuteCommands = (language) => {
    switch (language) {
        case 'c':
            return {
                filename: 'main',
                ext: '.c',
                compile: 'gcc',
                run: './a.out'               
            }
        case 'cpp':
            return {
                filename: 'main',
                ext: '.cpp',
                compile: 'g++',
                run: './a.out'
            }
        default:
            throw new Error('Invalid language');
    }
}

// writes the source code to a file
// based on the language
const writeSourceCodeToFile = (sourceCode, language, dirPath) => {
    let props = getExecuteCommands(language);
    let fileName = props.filename + props.ext;
    let filePath = path.join(dirPath, fileName);
    fs.writeFileSync(filePath, sourceCode);
    return {
        fileName,
        compileCommand: `${props.compile} ${fileName}`,
        runCommand: props.run
    }
};

// get the test cases for given problemId
const getTestCases = (problemId) => {
    // remove the trailing file extension
    problemId = problemId.replace(/\.[^/.]+$/, "");
    let module = path.join(__dirname, '..', 'solution', problemId);
    if (!fs.existsSync(module)) throw new Error('Invalid problemId');
    return require(module);
};


// Execute user's source code for given language
// and validate the output against given problemId
const executeSourceCode = ({sourceCode, language, problemId, timeout = 1000}) => {
    // get the test cases for given problemId
    let testCases = null;
    try {
        getTestCases(problemId);
    } catch (err) {
        console.log(err);
        return {
            status: 'error',
            message: 'Invalid problemId'
        };
    }


    // create a directory to store the source code
    const dirPath = createDirectory();
    try {
        // write the source code to a file
        const { fileName, compileCommand, runCommand } = writeSourceCodeToFile(sourceCode, language, dirPath);
        // compile the source code
        if (compileCommand) {
            console.log(`Compiling source code ${fileName}`);
            console.log(`Compile command: ${compileCommand}`);
            try {
                const compileOutput = execSync(compileCommand, { cwd: dirPath });
                console.log(compileOutput.toString());
            } catch (err) {
                // compilation failed
                console.log(`Compilation error: ${err}`);
                return {
                    status: 'CE',
                    message: err.message
                }
            }
        }


        // run the source code against each test case
        let result = [];
        for (let testCase of testCases) {
            console.log(`Running source code ${fileName} against test case ${testCase.input}`);
            console.log(`Run command: ${runCommand}`);
            try {
                const runOutput = execSync(runCommand, { 
                    cwd: dirPath, 
                    input: testCase.input,
                    timeout: timeout
                });
                console.log(runOutput.toString());
                if (runOutput.toString().trim() !== testCase.output) {
                    // output is incorrect
                    result.push({
                        status: 'WA',
                        input: testCase.input,
                        output: runOutput.toString().trim(),
                        expectedOutput: testCase.output
                    });
                } else {
                    // output is correct
                    result.push({
                        status: 'AC',
                        input: testCase.input,
                        output: runOutput.toString().trim(),
                        expectedOutput: testCase.output
                    });
                }
            } catch (err) {
                // execution failed
                console.log(`Execution error:\n${err}`);
                if (err.signal === 'SIGTERM') {
                    // execution timed out
                    result.push({
                        status: 'TLE',
                        input: testCase.input,
                        output: '',
                        expectedOutput: testCase.output
                    });
                } else {
                    result.push({
                        status: 'RE',
                        input: testCase.input,
                        output: err.message
                    });    
                }
            }
        }

        // return the result
        return {
            status: 'OK',
            result
        };
    } finally {
        // delete the directory
        deleteDirectory(dirPath);
    }
};

// exports
module.exports = executeSourceCode;
