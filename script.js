var todos=["Buy new Turtle"]; 
var input = prompt("What would you like todo?");
 
while(input !=="quit"){
	if(input === "list"){
		todos
		console.log(todos);
		 }
	else if(input ==="new"){
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	} else if(input ==="delete"){
		todos.pop();
	}
	 
	 input = prompt("What would you like to do?");
}
console.log("okay, You Quit The APP");