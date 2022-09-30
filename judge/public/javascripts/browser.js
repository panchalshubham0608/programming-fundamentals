function makeUI(problem, depth) {
    if (problem.isFile) {
        let name = problem.name.replace(/\.js$/, '.md');
        let path = problem.path.replace(/\.js$/, '.md');
        if (name.endsWith(".md")) {
            return `<div class="accordian-item-file" style="margin-left: ${depth}px;">
                        <div class="accordian-item-file-name" data-path="${path}"
                            onclick="javascript:selectProblem(event)"
                            id="${path}"
                        >
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png">
                            ${name}
                        </div>
                    </div>`
        } else {
            return ``;
        }
    } else if (problem.children && problem.children.length > 0) {
        let html = 
        `<div class="accordian" style="margin-left: ${depth}px;">
            <div class="accordian-header">
                <i class="fas fa-chevron-right" data-state="closed"
                    onclick="javascript:toggle(event)"
                    id="${problem.path ? problem.path : 'problems'}"
                ></i>
                <span>${problem.name}</span>
            </div>
            <div class="accordian-content d-none">
        `
        for (let child of problem.children) {
            html += makeUI(child, depth + 10)
        }
        html += 
        `
            </div>
        </div>`
        return html
    } else {
        return ``;
    }
}

function toggle(event) {
    let item = event.target;
    let state = item.getAttribute("data-state");
    if (state == "closed") {
        item.setAttribute("data-state", "open");
        item.classList.remove("fa-chevron-right");
        item.classList.add("fa-chevron-down");
        item.parentElement.nextElementSibling.classList.remove("d-none");
    } else {
        item.setAttribute("data-state", "closed");
        item.classList.remove("fa-chevron-down");
        item.classList.add("fa-chevron-right");
        item.parentElement.nextElementSibling.classList.add("d-none");
    }
}

function selectProblem(event) {
    let target = event.target;
    let path = target.getAttribute("data-path");
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/problem");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        let problem = xhr.responseText;
        let viewer = document.getElementById("problem-viewer");
        let md = markdownit();
        let html = md.render(problem);
        // html = html.replace(/\$(.*)\$/g, "\\[ $1 \\]")
        // console.log(html.replace(/\$(.*)\$/g, "\\\[ $1 \\\]"))
        // console.log(katex.renderToString(html.replace(/\$(.*)\$/g, "\\\[ $1 \\\] ")));
        // html = katex.renderToString(html);
        viewer.innerHTML = `<p class="problem-header" data-id="${path}" id="problemId">${path}</p>` + html;
        document.getElementById(`runCodeBtn`).disabled = false;
        hideLoader();
    }
    xhr.onerror = function() {
        alert("Error while fetching problem");
        hideLoader();
    }
    showLoader();
    xhr.send(JSON.stringify({path: path}));
}

// selects the problem specified in the url
function preSelectProblem() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let problemsDropdown = document.getElementById("problems");
    if (!problemsDropdown)  return;
    problemsDropdown.click();
    let problem = params.problem;
    if (!problem) return;
    let parts = problem.split("/");
    let path = "";
    for (let part of parts) {
        path += part;
        let item = document.getElementById(path);
        if (!item)  break;
        item.click();
        path += "/";
    }
}


let browser = document.getElementById(`browser`);
let problems = JSON.parse(browser.getAttribute(`data-problems`));
// let problemSet = document.getElementById(`problemSet`);
browser.innerHTML = makeUI(problems, 0);

// select problem as specified in the URL
preSelectProblem();