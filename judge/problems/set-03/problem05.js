
// finds the output for a given input
function evaluate(inp) {
    let output = ``;
    output += `Enter your bill amount: `;
    output += `Do you have membership(0/1)? `;
    let [amount, membership] = inp;
    if (membership === 1) {
        if (amount > 5000) {
            output += `You are eligible for 30% discount.\n`;
            output += `Please pay \$${amount - (amount * 0.3)} at counter!`;
        } else {
            output += `You are eligible for 20% discount.\n`;
            output += `Please pay \$${amount - (amount * 0.2)} at counter!`;
        }
    } else {
        if (amount > 5000) {
            output += `You are eligible for 10% discount.\n`;
            output += `Please pay \$${amount - (amount * 0.1)} at counter!`;
        } else {
            output += `You are not eligible for any discount.\n`;
            output += `Please pay \$${amount} at counter!`;
        }
    }
    return output;
}

const testCases = [[10000, 1], [2000, 1], [10000, 0], [2000, 0]].map(inp => {
    return {
        input: `${inp.join('\n')}`,
        output: evaluate(inp)
    }
});

module.exports = testCases;
