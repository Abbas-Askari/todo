import logo from "./lines.svg";

function header() {
  const div = document.createElement("div");
  div.id = "header";

  const svg = new Image();
  svg.src = logo;
  console.log(svg);
  div.appendChild(svg);

  const h1 = document.createElement("h1");
  h1.textContent = "Todo List";

  div.appendChild(h1);

  return div;
}

export default header;
