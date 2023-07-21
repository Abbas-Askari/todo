import taskView from "./taskView";
import Task from "./task";

function nameControl() {
  const div = document.createElement("div");
  div.classList.add("form-item");

  const label = document.createElement("label");
  const input = document.createElement("input");
  input.required = true;
  input.placeholder = "Add a title";
  input.name = "title";
  label.textContent = "Title";
  input.id = "title";
  label.htmlFor = input.id;

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function dateControl() {
  const div = document.createElement("div");
  div.classList.add("form-item");

  const label = document.createElement("label");
  label.textContent = "Due Date";
  const input = document.createElement("input");
  input.required = true;
  input.name = "date";
  input.type = "text";
  input.pattern = "[0-9]{2,2}/[0-9]{2,2}/[0-9]{4,4}";
  input.placeholder = "dd/mm/yyyy";
  input.setCustomValidity("");
  input.addEventListener("input", () => {
    const date = input.value.split("/").map((e) => parseInt(e));
    console.log(new Date(date[2], date[1], date[0]));
  });
  input.id = "date-input";
  label.htmlFor = input.id;

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function priorityControl() {
  const div = document.createElement("div");
  div.classList.add("form-item");

  const label = document.createElement("label");
  const value = document.createElement("span");
  const input = document.createElement("input");
  label.textContent = "Priority";
  input.name = "priority";
  input.type = "range";
  input.min = 1;
  input.step = 0.1;
  input.max = 10;
  input.placeholder = "dd/mm/yyyy";
  input.addEventListener("input", () => {
    input.style.setProperty(
      "--thumb-color",
      `rgb(${255 * (1 - parseInt(input.value) / parseInt(input.max))}, ${
        (255 * parseInt(input.value)) / parseInt(input.max)
      }, 0)`
    );
    value.style.setProperty(
      "--left",
      `${
        ((input.clientWidth - 4 - 20) * (input.value - input.min)) /
          (input.max - input.min) +
        2
      }px`
    );
    value.textContent = input.value;
  });
  input.id = "priority-input";
  label.htmlFor = input.id;
  div.appendChild(label);
  div.appendChild(input);
  div.appendChild(value);

  return div;
}

function descriptionControl() {
  const div = document.createElement("div");
  div.classList.add("form-item");
  const label = document.createElement("label");
  const input = document.createElement("textarea");
  label.textContent = "Description";
  input.name = "description";
  input.placeholder = "Give description to Task.";
  input.id = "description-input";
  label.htmlFor = input.id;
  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function buttons() {
  const div = document.createElement("div");
  div.classList.add("form-item");
  div.classList.add("buttons");

  const create = document.createElement("button");
  const cancel = document.createElement("button");
  cancel.onclick = () => {
    document.querySelector("#black").remove();
  };
  create.id = "create";
  create.textContent = "create";
  cancel.id = "cancel";
  cancel.textContent = "cancel";

  div.appendChild(create);
  div.appendChild(cancel);

  return div;
}

export default function newTask(project) {
  const div = document.createElement("div");
  div.id = "black";

  const form = document.createElement("form");
  form.appendChild(nameControl());
  form.appendChild(dateControl());
  form.appendChild(descriptionControl());
  form.appendChild(priorityControl());
  form.appendChild(buttons());
  // form.val?
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(form.elements);
    const title = form.elements["title"].value;
    const priority = form.elements["priority"].value;
    const description = form.elements["description"].value;
    const splits = form.elements["date"].value.split("/");
    const dateObj = new Date(splits[2], splits[1] - 1, splits[0]);
    const task = new Task(title, description, priority, [], dateObj);
    const taskV = taskView(task);
    project.tasks.push(task);
    project.fire();
    // const mainContent = document.querySelector("#main-content");
    // mainContent.innerHTML = "";
    // mainContent.appendChild(taskV);

    // project.tasks.push({
    //   title:
    // })
    console.log(form.querySelectorAll("input"));
    console.log(task);
    div.remove();
  });
  div.appendChild(form);

  return div;
}
