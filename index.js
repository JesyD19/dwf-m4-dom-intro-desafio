const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const ulEl = document.querySelector(".lista");
  ulEl.replaceChildren();

  for (const cosas of cosasQueAprendimos) {
    const newLi = document.createElement("li");
    newLi.textContent = cosas.tema;
    newLi.className = cosas.class;
    ulEl.append(newLi);
  }
}

main();
