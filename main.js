function createDivWithText(text) {
  let div = document.createElement("div");
  div.innerHTML = text;
  return div;
}

let htmlText = ["Hello!", "I am EXTREMELY cool.", "That is because I am a programmer."];
let container = document.getElementById("container");

for (let i = 0; i < htmlText.length; i++) {
  let newDiv = createDivWithText(htmlText[i]);
  container.append(newDiv);
}