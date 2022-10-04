// Replacing/removing/adding elements on HTML code

const activateCss = document.querySelector("button");
activateCss.addEventListener("click", () => {
  document.head.innerHTML -=
    '<link id="css-link" rel="stylesheet" href="style.css">';
  document.head.innerHTML +=
    '<link id="css-link" rel="stylesheet" href="new-style.css">';
  document.getElementsByClassName("without-css").remove();
});

// const desactivateCss = document.querySelector("button");
// desactivateCss.addEventListener("click", () => {
//   document.head.innerHTML -=
//     '<link id="css-link" rel="stylesheet" href="new-style.css">';
//   document.head.innerHTML +=
//     '<link id="css-link" rel="stylesheet" href="style.css">';
// });

//
