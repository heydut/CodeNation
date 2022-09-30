//////////////
// Activity 1:
// Create a variable called age.
// Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.
// Take your if statement and add a variable called country in.

let age = 16;
let country = "UK";

if (age > 17 && country == "UK") {
  console.log("Yes I can serve you");
} else if (country != "UK") {
  console.log("Sorry, you are not from the UK");
} else {
  console.log("You are not old enough");
}

//////////////
// Activity 2:

let pizzaTopping = "cheese";

switch (pizzaTopping) {
  case "cheese":
  case "chicken":
    console.log(`I think ${pizzaTopping} are very important for my pizza!`);
    break;
  case "pepper":
  case "onion":
    console.log(`I don't mind having ${pizzaTopping} on my pizza...`);
    break;
  case "mushroom":
  case "spicy meat":
    console.log(`${pizzaTopping} should not be on a pizza.`);
    break;
}

//////////////
// Activity 3:

let password = "Secret";

if (password.length < 8) {
  console.log("Sorry, your password is too short! :(");
} else {
  console.log("Welcome!");
}

////// Stretch:

let num = 14;

if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5");
} else {
  console.log("This number is not divisible by 3 or 5");
}

//////////////
// Activity 4:

let otherNum = 4;

if (otherNum % 3 === 0 && otherNum % 5 === 0) {
  console.log("Fizz Buzz");
} else if (otherNum % 3 === 0) {
  console.log("Fizz");
} else if (otherNum % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(otherNum);
}

//////////////
// Activity 5:

let anotherNum = 1001;

if (anotherNum.toString().split("").reverse().join("") == anotherNum) {
  console.log("This is a palindrome!");
} else {
  console.log("This is not a palindrome.");
}

//////////////
// Activity 6:

let time = 9;
let placeOfWork = "Supermarket";
let townOfHome = "Uberlândia";

if (time <= 7 || time >= 19) {
  console.log("I'm at home!");
} else if (time <= 8 || time >= 18) {
  console.log("I'm commuting...");
} else {
  console.log("I'm at work!");
}

//////////////
// Activity 7:

let string =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let stringA = string.lastIndexOf("a");
let stringE = string.lastIndexOf("e");
let stringI = string.lastIndexOf("i");
let stringO = string.lastIndexOf("o");
let stringU = string.lastIndexOf("u");

console.log(stringI);

//////////////
// Activity 7:
