const STATUS = "TODO" | "DONE";
const todos = [
    {
        name: "clean my home",
        status: "TODO"
    },
];
console.log("init todo", todos);
//todo add 
function addOne(newTodo) {
    todos.push(newTodo);
}    

//status uurchluh 
function editStatus(index, status) {
    let item = todos[index];
    item.status = status;
}

//ner uurchluh: func
function editName() {}

//todo delete one item
function deleteOne() {}

addOne({name:"hool hiih", status:"TODO",});
addOne({name:"javascript sudlah", status:"TODO",});
console.log("Add----", todos);

//RUNNIG APPLICATION 
// addOne({name:"hool hiih", status:"TODO"});
// addOne({name:"JS sudlah", status:"TODO"});
// addOne({name:"hool hiih", status:"TODO"});
// editStatus(1, "DONE"); 

