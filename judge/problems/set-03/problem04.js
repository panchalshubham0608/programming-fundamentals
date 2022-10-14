
// finds the output for a given input
function evaluate(inp) {
    let output = ``;
    output += `Enter the bill: `;
    output += `Do you have membership(0/1)?: `;
    let [bill, membership] = inp;
    if (bill > 5000 || membership == 1)
        output += `You are eligible for free delivery`;
    else
        output += `You are not eligible for free delivery`;
    return output;
}

const testCases = [[4000, 1], [6000, 0], [2000, 0], [5000, 0], [5000, 1]].map(inp => {
    return {
        input: `${inp.join('\n')}`,
        output: evaluate(inp)
    }
});

module.exports = testCases;
