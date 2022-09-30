
// finds the output for a given input
function evaluate(N) {
    let output = ``;
    output += `Enter a number: `;
    for (let i = 0; i < N; i++) {
        output += `${String.fromCharCode('A'.charCodeAt(0) + i)} `;
    }
    return output;
}

const testCases = [
    { input: `5`, output: evaluate(5) },
    { input: `10`, output: evaluate(10) },
    { input: `15`, output: evaluate(15) },
    { input: `20`, output: evaluate(20) },
    { input: `25`, output: evaluate(25) },
    { input: `0`, output: evaluate(0) },
];

module.exports = testCases;
