function addTodo() {
    const input = prompt("Enter todo name");
    addOne({name:input, status: "TODO"});
    render();
}