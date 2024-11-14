
const tasks = [
    {name: "shalaa ugaah", status: "TODO"}, 
    {name: "js sudlah", status: "TODO"},
    {name: "nom unshih", status: "TODO"},
];

function render() {
    const output = document.getElementById("tasks");
    output.innerHTML = "";
    for(let i = 0; i < tasks.length; i++) {
        output.innerHTML += "<div class = 'tasks'>" + tasks[i].name + "</div>";
    }
}

function addTask() {
    const name = prompt();
    tasks.push({name: name, status: "TODO"});
    render();
}
render();
