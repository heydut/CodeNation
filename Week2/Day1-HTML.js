////////////// Reverse string
// Zoom activity:

let myString = "Aaron";
function reverseString(str) {
  let split = str.split("");
  let reverse = split.reverse();
  let join = reverse.join("");
  return join;
}

console.log(reverseString(myString));
