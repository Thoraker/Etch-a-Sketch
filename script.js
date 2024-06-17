const divContainer = document.querySelector(".container");

for (let i = 0; i < 272; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  divContainer.appendChild(div);
}
