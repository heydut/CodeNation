//////////////
// Activity 1:

let myFavouriteSongs = ["A", "B", "C"];
myFavouriteSongs.push("D", "E");
myFavouriteSongs.pop();
console.log(myFavouriteSongs);

//////////////
// Activity 2:

let myLetters = ["C", "D", "E"];
myLetters.unshift("?", "A", "B");
myLetters.shift();
console.log(myLetters);

//////////////
// Activity 1:

let myFavouriteFilms = ["FilmA", "FilmB", "FilmC", "FilmD", "FilmE"];
myFavouriteFilms.push("FilmF", "FilmG");
console.log(myFavouriteFilms);

for (let i = 0; i < myFavouriteFilms.length; i++) {
  console.log(myFavouriteFilms[i]);
}

//////////////
// Activity 2:

let randomNumber = Math.floor(Math.random() * 50 + 1); // +1 because starts at 0
console.log(randomNumber);

//////////////
// Activity 3:

for (let i = 9; i > -1; i--) {
  console.log(i);
}

//////////////
// Activity 4:

let otherFilms = ["Film1", "Film2", "Ghostbusters", "Film4"];

for (let i = 0; i < otherFilms.length; i++) {
  console.log(otherFilms[i]);
}

if (otherFilms[2] == "Ghostbusters") {
  console.log("Yay, it's Ghostbusters");
} else {
  console.log("Boo! We want Ghostbusters!");
}

//////////////
// Activity 5:

let randomSixNumbers = [];
let divisible = [];

for (let i = 0; i < 6; i++) {
  randomSixNumbers.push(Math.floor(Math.random() * 30 + 1));
  if (randomSixNumbers[i] % 7 == 0) {
    divisible.push(randomSixNumbers[i]);
  }
}

console.log(`The six random numbers are: ${randomSixNumbers}`);
console.log(`The numbers that are divisble by 7 are: ${divisible}`);

//////////////
// Activity 6:

let bobsFollowers = ["Du", "Dudu", "Edu", "Eduardo"];
let hannahsFollowers = ["Ed", "Edd", "Eddy", "Dudu"];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < hannahsFollowers.length; j++) {
    if (bobsFollowers[i] === hannahsFollowers[j]) {
      console.log(`${bobsFollowers[i]} follows both people.`);
    }
  }
}

//////////////
// Activity 7:

let counter = 0;

do {
  counter++;
  console.log(counter);
} while (counter < 100);

// A for loop runs for a pre-determined number of times
// A while loop runs until a pre-determined condition is met
// for example: "while the space bar is pressed" do this...

for (let i = 1; i <= 100; i++) {
  console.log(i);
}
