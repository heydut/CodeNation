//////////////
// Activity 1:

let myName = "Dut";
let age = 28;
let favouriteColour = "black";

console.log(
  `Hey! My name is ${myName}, I'm ${age} years old and my favourite color is ${favouriteColour}!`
);

myName = "Dutdut";
age = age + 1;
favouriteColour = "white";

console.log(
  `My nickname is ${myName}, now i'm ${age} and my favourite colour today is ${favouriteColour}!`
);

//////////////
// Activity 2:

let dailyFood = ["eggs", "rice and chicken", "pizza"];
let breakfast = dailyFood[0];
let lunch = dailyFood[1];
let dinner = dailyFood[2];

console.log(
  `Today I'm going to eat ${breakfast} for breakfast, ${lunch} for lunch and for dinner it's ${dinner}.`
);

breakfast = "cornflakes";
lunch = "sandwich";
dinner = "sushi";

console.log(`And tomorrow I will eat ${breakfast}, ${lunch} and ${dinner}.`);

// alternative version:

let myDailyFood = ["eggs", "rice and chicken", "pizza"];

console.log(
  `Today I'm going to eat ${myDailyFood[0]} for breakfast, ${myDailyFood[1]} for lunch and for dinner it's ${myDailyFood[2]}.`
);

myDailyFood = ["cornflakes", "sandwich", "sushi"];

console.log(
  `And tomorrow I will eat ${myDailyFood[0]}, ${myDailyFood[1]} and ${myDailyFood[2]}.`
);

//////////////
// Activity 3:
//Create a program that calculates the number of days from today to your birth date

let today = new Date().getTime(); // time in milisecs
let nextBday = new Date("July 19 2023").getTime();

let difference = Math.floor((nextBday - today) / (24 * 60 * 60 * 1000)); // /hours per day, hours, minutes, seconds

console.log(`There are ${difference} days until myy birthday!`);

///////////////////////////////////////////////////////////////

// Calculates how many milliseconds in one day.
const oneDay = 24 * 60 * 60 * 1000;

// Creates variables for day, month, year
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // Month + 1 because January counts as 0
const year = date.getFullYear();

// Creates a variable with today's date inside (September 27 2022).
const todaysDate = new Date(year, month, day);
// Creates a variable with my birthday
const myBirthday = new Date(1991, 8, 7);

// Creates a variable that calculates todaysDate minus my Birthday then divides it by how many milliseconds in one day, then rounds the number down.
const differenceInDays = Math.ceil((todaysDate - myBirthday) / oneDay);

// Math.abs returns the absolute number. eg -150 becomes 150.
console.log(
  `There have been ${Math.abs(differenceInDays)} day's since you were born!`
);

//////////////
// Activity 4:

// Create 9 variables (let/const): space1, space2… space9.
// Assign either the value ‘x’,’o’,’ ‘, to each of these variables.

let [space1, space4, space5] = ["x", "x", "x"];
let [space2, space7] = ["o", "o"];
let [space3, space6, space8, space9] = [" ", " ", " ", " "];

// Insert the variables into your board using the ${varName} syntax and make it look like the displayed board let space1 = "x".

const array = [
  `     |     |     `,
  `  ${space1}  |  ${space2}  |  ${space3}  `,
  `     |     |     `,
  `-----------------`,
  `     |     |     `,
  `  ${space4}  |  ${space5}  |  ${space6}  `,
  `     |     |     `,
  `-----------------`,
  `     |     |     `,
  `  ${space7}  |  ${space8}  |  ${space9}  `,
  `     |     |     `,
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

///////
let favouritesDrinks = ["Coke", "Fanta", "Sprite"];
console.log(favouritesDrinks[0], favouritesDrinks[1], favouritesDrinks[2]);
