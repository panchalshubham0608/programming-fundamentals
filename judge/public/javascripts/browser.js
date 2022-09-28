function makeUI(problem, depth) {
    if (problem.isFile) {
        if (problem.name.endsWith(".md")) {
            return `<div class="accordian-item-file" style="margin-left: ${depth}px;">
                        <div class="accordian-item-file-name" data-path="${problem.path}"
                            onclick="javascript:selectProblem(event)">
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png">
                            ${problem.name}
                        </div>
                    </div>`
        } else {
            return ``;
        }
    } else {
        let html = 
        `<div class="accordian" style="margin-left: ${depth}px;">
            <div class="accordian-header">
                <i class="fas fa-chevron-right" data-state="closed"
                    onclick="javascript:toggle(event)"></i>
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
        let relative = path.split('/problems/')[1];
        viewer.innerHTML = `<p class="problem-header" id="problemId">${relative}</p>` + html;
        document.getElementById(`runCodeBtn`).disabled = false;
    }
    xhr.send(JSON.stringify({path: path}));
}




let browser = document.getElementById(`browser`);
let problems = JSON.parse(browser.getAttribute(`data-problems`));
// let problemSet = document.getElementById(`problemSet`);
browser.innerHTML = makeUI(problems, 0);
