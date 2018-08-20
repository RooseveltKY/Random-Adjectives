//Create an array of adjectives

var adjectives= [
"dull",
"pretty",
"pale",
"beautiful"
];

//Ask the user for his or her name

var name= prompt("What is your name?");

//Create a random number

var choose= (Math.floor(Math.random()*adjectives.length));

//Tell the user that he or she "is" followed by the adjective

window.alert(name+ " is "+adjectives[choose]);