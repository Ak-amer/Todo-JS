// store and access to the document elements that have id
var taskInput = document.getElementById("task-input");
var addButton = document.getElementById("add-task-but");
var todoTask = document.getElementById("todo-list");

//add event listener onto buttons
addButton.addEventListener("click", function(){
	addNewTask();
	consle.log ("button Clicked");
});



// initialice
var todo-tasks =[];
// generate new access value of inputs
function addNewTask(){
	var date = new Date();
	var task = taskInput.value;
	
	//create an object for the list entry
	var todo = {
		id:todo-tasks.length +1,
		task:task,
		date: Date.toUTCString(),
		done: false
		consle.log ("task");
	}
	
}
//
todo-tasks.push(todo.task);
 //update the document state with new list
 //
 taskInput.value = ";
 todo-tasks.forEach(function(item){
	 todotask.appendChild("<p>" + item + "</p>");
	 consle.log ("todo-tasks");
	 
 });