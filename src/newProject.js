import { mdiPlus } from "@mdi/js";
import { addProject } from "./projectManager";
import Project from "./project";

export const makeSvg = (p, color = "currentColor") => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svg.setAttribute("fill", color);
  svg.appendChild(path);
  path.setAttribute("d", p);
  return svg;
};

const makeButton = (name, func, logo) => {
  const div = document.createElement("div");
  div.id = "sidebutton-" + name.toLocaleLowerCase().replace(" ", "-");
  div.classList.add("sidebutton");
  div.appendChild(logo);

  const button = document.createElement("button");
  button.textContent = name;
  div.appendChild(button);

  return div;
};

const dialog = () => {
  const div = document.createElement("div");
  div.id = "black";

  const form = document.createElement("form");
  const input = document.createElement("input");
  input.name = "title";
  input.id = "input-control";
  const label = document.createElement("label");
  label.htmlFor = input.id;
  const buttons = document.createElement("div");
  buttons.id = "buttons";

  const cancel = document.createElement("button");
  cancel.textContent = "cancel";
  cancel.onclick = () => {
    document.querySelector("#black").remove();
  };

  const create = document.createElement("button");
  create.textContent = "create";

  div.appendChild(form);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(buttons);
  buttons.appendChild(create);
  buttons.appendChild(cancel);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.body.removeChild(div);
    addProject(new Project(input.value, []));
  });
  return div;
};

export default function newProject() {
  const div = document.createElement("div");
  div.id = "new-project";

  const text = document.createElement("div");
  text.textContent = "New Project";

  div.appendChild(makeSvg(mdiPlus));
  div.appendChild(text);

  div.addEventListener("click", () => {
    document.body.appendChild(dialog());
    // const sidebutton = makeButton()
  });

  return div;
}
