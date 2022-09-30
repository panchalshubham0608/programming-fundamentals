
// finds the output for a given input
function evaluate(N) {
    let output = ``;
    output += `Enter a number: `;
    for (let i = 1; i <= N; i+=2) {
        output += `${i} ${i+1}\n`;
    }
    return output;
}

const testCases = [
    { input: `5`, output: evaluate(5) },
    { input: `10`, output: evaluate(10) },
    { input: `15`, output: evaluate(15) },
    { input: `20`, output: evaluate(20) },
    { input: `25`, output: evaluate(25) },
    { input: `50`, output: evaluate(50) },
    { input: `100`, output: evaluate(100) },

];

module.exports = testCases;
