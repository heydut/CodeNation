//////////////
// Zoom activity:

const dataChecker = (string, rank) => {
  if (string == "codenation" && rank === 1) {
    console.log("CORRECT!");
  } else if (string == "codenation" && rank != 1) {
    console.log("INCORRECT RANK");
  } else {
    console.log("INCORRECT PARAMETERS");
  }
};
