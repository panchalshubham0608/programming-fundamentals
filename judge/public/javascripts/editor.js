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
            html += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading-${i}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${i}" aria-expanded="false" aria-controls="flush-collapse-${i}">
                    <p class="text-${tc.status === 'AC' ? 'success' : 'error'}">Test Case ${i + 1}: ${readable(tc.status)}</p>
                </button>
                </h2>
                <div id="flush-collapse-${i}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${i}" data-bs-parent="#testCases">
                <div class="accordion-body">
                    <div class="test-case-input">
                        <p><strong>Input</strong></p>
                        <p>${sanitize(tc.input)}</p>
                    </div>
                    <div class="test-case-output">
                        <p><strong>Output</strong></p>
                        <p>${sanitize(tc.output)}</p>
                    </div>
                    <div class="test-case-expected-output">
                        <p><strong>Expected Output</strong></p>
                        <p>${sanitize(tc.expectedOutput)}</p>
                    </div>                
                </div>
            </div>            
            `
        }
        output.innerHTML = `
            <div class="accordion accordion-flush" id="testCases">
                ${html}
            </div>
        `;
    }
}

// handle the submit button
function execute() {
    document.getElementById('output').innerHTML = '';
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
