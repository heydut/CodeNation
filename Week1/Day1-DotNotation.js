//console.log("Hello World!");
//console.log("Hello World!".toUpperCase());

//console.log(Math.floor(Math.random()*10));

//console.log ("     |    |\n     |    |\n     |    |\n --------------")
//console.log ("     |    |\n     |    |\n     |    |\n --------------")
//console.log ("     |    |\n     |    |\n     |    |\n")

//or

//console.log("    |    |    ");
//console.log("    |    |    ");
//console.log("    |    |    ");
//console.log("--------------");
//console.log("    |    |    ");
//console.log("    |    |    ");
//console.log("    |    |    ");
//console.log("--------------");
//console.log("    |    |    ");
//console.log("    |    |    ");
//console.log("    |    |    ");

//

/* const array1 = [
  "    |    |    ",
  "    |    |    ",
  "    |    |    ",
  "--------------",
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < array1.length; j++) {
    console.log(array1[j]);
    if (i === 2) {
      array1.pop();
    }
  }
}

console.log(array1); */

//////////////
// Activity 1:

const array = [
  "    |    |    ",
  "    |    |    ",
  "    |    |    ",
  "--------------",
];

for (let i = 0; i < 3; i++) {
  if (i < 2) {
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);
  } else if ((i = 3)) {
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
  }
}

/* const arrayss = [
  "     |     |     ",
  "     |     |     ",
  "     |     |     ",
  "-----------------",
  "     |     |     ",
  "     |     |     ",
  "     |     |     ",
  "-----------------",
  "     |     |     ",
  "     |     |     ",
  "     |     |     ",
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

*/
