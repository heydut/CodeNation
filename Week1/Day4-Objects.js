//////////////
// Zoom activity:

let person = {
  name: "Mayranne",
  age: 28,
  sayHi() {
    return `Hello my name is ${this.name}`;
  },
};

console.log(person.sayHi());
console.log(person.name);

//////////////
// Zoom activity:

let day = "Sunday";
let message = "";

let alarm = {
  weekendAlarm: "No alarm needed.",
  weekdayAlarm: "Get up at 7am!",
};

if (day === "Saturday" || day === "Sunday") {
  message = alarm.weekendAlarm;
} else {
  message = alarm.weekdayAlarm;
}

console.log(message);

//////////////
// Zoom activity:

person.favMusics = ["Music1", "Music2", "Music3"];

console.log(person.favMusics[0]);

//////////////
// Activity 1:

// Answer is in the first "Zoom activity" of that file

//////////////
// Activity 2:

let pet = {
  name: "Sully",
  typeOfPet: "cat",
  age: 0.9,
  colour: "grey",
  eat() {
    return `${this.name} is eating`;
  },
  drink() {
    return `${this.name} is drinking`;
  },
};

console.log(pet.eat());
console.log(pet.drink());

//////////////
// Activity 3:

let orderTotal = 0;
let coffeeShop = {
  branch: "Fulwood",
  drinks: [
    { name: "Coke", price: 1 },
    { name: "Coffee", price: 2 },
    { name: "Water", price: 0.5 },
  ],
  food: [
    { name: "Cake", price: 2 },
    { name: "Sandwich", price: 2.5 },
    { name: "Pancake", price: 3 },
  ],
  drinksOrdered(drinkName) {
    for (let i = 0; i < this.drinks.length; i++) {
      if (drinkName === this.drinks[i].name) {
        orderTotal += this.drinks[i].price;
        return `${this.drinks[i].name} ordered for £${this.drinks[i].price}. Your current total is £${orderTotal}.`;
      } else {
        return `Sorry, we don't sell ${drinkName} here.`;
      }
    }
  },
  foodOrdered(foodName) {
    for (let i = 0; i < this.food.length; i++) {
      if (foodName === this.food[i].name) {
        orderTotal += this.food[i].price;
        return `${this.food[i].name} ordered for £${this.food[i].price}. Your current total is £${orderTotal}.`;
      } else {
        return `Sorry, we don't sell ${foodName} here.`;
      }
    }
  },
};

//console.log(coffeeShop.drinksOrdered("Coke"));
