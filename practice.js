//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//isTyler(name);
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
	if(name==='Tyler') {
		console.log("True");
		return true;
	}
	console.log("False");
	return false;
} 

//Next problem


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

getName();
  Code Here
function getName() {
	var name=prompt("Enter Name");
	console.log(name);
	return name;
} 

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() { 
	alert("Welcome, " + getName());
}
welcome();

//Next problem 




//What is the difference between arguments and parameters?

  /*Answer Here
Parameter: The variables that the function will use inside.
Argument: The variables that you send to the function when you call it. */
//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

  /*
false
0 (zero)
"" (empty string)
null
undefined
NaN (a special Number value meaning Not-a-Number!)*/


//Next Problem



//Create a function called myName that returns your name

  //Code Here
  var name="Jade";
function myName(Jade) {
	console.log(name);
	return name;
}
myName();
//Now save the function definition of myName into a new variable called newMyName

  Code Here
function newMyName(Jade) {
	console.log(name);
	return Jade; 
}
//Now alert the result of invoking newMyName

alert(newMyName("Jade"));

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

function outerFn(name) {
	return newMyName(name); 
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn("Jade")

//Now invoke innerFn.

alert(innerFn);






