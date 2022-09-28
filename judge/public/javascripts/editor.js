// configure the editor
let editor = ace.edit('editor');
editor.setTheme("ace/theme/eclipse");
editor.session.setMode("ace/mode/c_cpp");

// handle the language change
function changeLanguage(event) {
    let language = event.target.value;
    editor.session.setMode(`ace/mode/${language}`);
}