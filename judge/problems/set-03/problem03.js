
// finds the output for a given input
function evaluate(inp) {
    let output = ``;
    output += `Enter the loan amount: `;
    output += `Enter the unbilled amount: `;
    let [loanAmount, unbilledAmount] = inp;
    if (loanAmount > 5000000 && unbilledAmount < 50000)
        output += `You are eligible for loan`;
    else
        output += `You are not eligible for loan`;
    return output;
}

const testCases = [[6000000, 25000], [4000000, 15000], [67000000, 75000], [5000000, 0], [6000000, 50000]].map(inp => {
    return {
        input: `${inp.join('\n')}`,
        output: evaluate(inp)
    }
});

module.exports = testCases;
