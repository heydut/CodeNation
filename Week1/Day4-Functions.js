//////////////
// Zoom activity:

let age = 18;

if (age < 18) {
  console.log(`Child (below 18): £8`);
} else if ((age) => 18) {
  console.log(`Adult (18+): £10.95`);
} else if ((age) => 60) {
  console.log(`Senior (60+): £7.50`);
}

//////////////
// Zoom activity:

let favColor = (color) => {
  return `My favourite color is: ${color}`;
};

favColor("Black");
favColor("white");

console.log(favColor("Black"));

//////////////
// Activity 1:

let factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));

//////////////
// Activity 2:

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
  console.log(`Pizza with ${topping1} and ${topping2}`);
  orderCount++;
};

takeOrder("ham", "cheese");

//////////////
// Activity 3:

let pinNumber = 123;
let balance = 2500;

let withdraw = (pinNumber, amount) => {
  if (pinNumber === 123 && balance >= amount) {
    return `Your balance is: ${balance}, you have withdrawn: ${amount} and you now have: ${
      balance - amount
    }`;
  } else {
    return `Sorry, your pin is incorrect.`;
  }
};

console.log(withdraw(123, 500));
