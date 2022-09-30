
// finds the output for a given input
function evaluate(N) {
    let output = ``;
    output += `Enter a number: `;
    output += `The first ${N} exponents of 2 are: `;
    let fact = 1;
    for (let i = 1; i <= N; i++) {
        output += `${fact} `;
        fact *= 2;
    }
    return output;
}

const testCases = [
    { input: `5`, output: evaluate(5) },
    { input: `10`, output: evaluate(10) },
    { input: `15`, output: evaluate(15) },
    { input: `20`, output: evaluate(20) },
    { input: `25`, output: evaluate(25) },
];

module.exports = testCases;
