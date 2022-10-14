
// finds the output for a given input
function evaluate(N) {
    let output = ``;
    output += `Enter a number: `;
    if (N > 10) output += `Greater than 10`;
    return output;
}

const testCases = [20, 9, 21, 5, 30, 10, -10, -5, 0].map(num => {
    return {
        input: `${num}`,
        output: evaluate(num)
    }
})

module.exports = testCases;
