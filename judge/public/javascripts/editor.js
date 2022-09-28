// configure the editor
let editor = ace.edit('editor');
editor.setTheme("ace/theme/eclipse");
editor.session.setMode("ace/mode/c_cpp");

// handle the language change
function changeLanguage(event) {
    let target = event.target;
    let language = target.value;
    editor.session.setMode(`ace/mode/${language}`);
    document.getElementById('language').setAttribute('d-ext', target.options[target.selectedIndex].getAttribute('d-ext'));
}

// sanitize the output string for better display
function sanitize(str) {
    str = str.replace(/\n/g, "<br>");
    str = str.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    return str;
}

// retirms a readable string for given response code
function readable(code) {
    switch(code) {
        case 'AC': return 'Accepted';
        case 'WA': return 'Wrong Answer';
        case 'TLE': return 'Time Limit Exceeded';
        case 'MLE': return 'Memory Limit Exceeded';
        case 'RE': return 'Runtime Error';
        case 'CE': return 'Compilation Error';
        case 'IE': return 'Internal Error';
        default: return 'Unknown';
    }
}

// displays the output
function displayOutput(result) {
    let output = document.getElementById('output');
    console.log(result);
    if (result.status === 'error') {
        output.innerHTML = 
        `
        <div class="text-error">
            ${sanitize(result.message)}
        </div>
        `;
    } else if (result.status === 'CE') {
        output.innerHTML = 
        `
        <div class="text-error">
            <p>Compilation Failed</p>
            <p>${sanitize(result.message)}</p>
        </div>
        `;
    } else if (result.status === 'OK') {
        let html = ``;
        for (let i = 0; i < result.testCases.length; i++) {
            let tc = result.testCases[i];
            html += 
            `
            <div class="test-case">
                <div class="test-case-header text-${tc.status === 'AC' ? 'success' : 'error'}">
                    <p>Test Case ${i + 1}: ${readable(tc.status)}</p>
                </div>
                <div class="test-case-body">
                    <div class="test-case-input">
                        <p>Input</p>
                        <p>${sanitize(tc.input)}</p>
                    </div>
                    <div class="test-case-output">
                        <p>Output</p>
                        <p>${sanitize(tc.output)}</p>
                    </div>
                    <div class="test-case-expected-output">
                        <p>Expected Output</p>
                        <p>${sanitize(tc.expectedOutput)}</p>
                    </div>
                </div>
            `
        }
        output.innerHTML = html;
    }
}

// handle the submit button
function execute() {
    let problemIdContainer = document.getElementById('problemId');
    if (!problemIdContainer) {
        displayOutput({
            status: 'error',
            message: 'No problem selected!'
        })
        return;
    }
    let problemId = problemIdContainer.getAttribute('data-id');
    let language = document.getElementById('language').getAttribute('d-ext');
    let sourceCode = editor.getValue();
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/execute");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        let result = JSON.parse(xhr.responseText);
        displayOutput(result);
        hideLoader();
    }

    xhr.onerror = function() {
        displayOutput({
            status: 'error',
            message: 'Something went wrong!'
        });
        hideLoader();
    }

    showLoader();
    xhr.send(JSON.stringify({problemId: problemId, language: language, sourceCode: sourceCode}));    
}
