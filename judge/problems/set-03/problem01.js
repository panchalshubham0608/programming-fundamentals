
// finds the output for a given input
function evaluate(N) {
    let output = ``;
    output += `Enter a number: `;
    output += (N % 2 === 0) ? `Even` : `Odd`;
    return output;
}

const testCases = [10, 21, 50, 31, 100, -10, -5, 0].map(num => {
    return {
        input: `${num}`,
        output: evaluate(num)
    }
})

module.exports = testCases;
