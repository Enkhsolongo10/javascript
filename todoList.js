const STATUS = "TODO" || "DONE";

const todos = [
    {
        name: "clean the home",
        status: "TODO",
    },

];
console.log("----initTodo",todos);

//todo add 
function addOne(newTodo) { //ene dr newTodo-g arguement-r n zugeer ugch orhiod door functionaa duudahdaa object zarljigaad ugchihnu
    todos.push(newTodo);
}



//todo change status
function editStatus() {
//index=1 dr bgaa "call to my mother" status="DONE" bolgoy
let item = todos[1];
console.log(item)
}



//todo delete one item
function deleteOne() {
    
}




//change name 
function editName() {

}


//RUNNING APPLICATION
addOne({name:"call to my mother",  status: "TODO",});
addOne({name:"eat a lunch",  status: "TODO",}); 

editStatus();

