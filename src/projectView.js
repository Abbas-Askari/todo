import newTask from "./newTask";
import progressMeter from "./progressMeter";
import "./projectView.css";
import taskView from "./taskView";

function header(title) {
  const div = document.createElement("div");
  div.classList.add("header");
  const h1 = document.createElement("h1");
  h1.textContent = title;
  div.appendChild(h1);
  return div;
}

function plus(body, project) {
  const div = document.createElement("div");
  div.id = "add-task";
  div.textContent = "+";
  // div.addEventListener()
  div.addEventListener("click", () => {
    document.body.appendChild(newTask(project));
    console.log("Added");
  });
  //   const plus = document.createElement("div");
  //   plus.textContent = "+";

  return div;
}

function taskButton(task) {
  const div = document.createElement("div");
  div.classList.add("task-button");

  const title = document.createElement("div");
  title.classList.add("title");

  const meter = progressMeter();
  meter.setPercent(task.calcPercent());
  title.appendChild(meter);

  const heading = document.createElement("div");
  heading.classList.add("heading");
  const h3 = document.createElement("h3");
  h3.textContent = task.title;
  heading.appendChild(h3);
  const date = document.createElement("div");
  date.classList.add("date");

  date.textContent = `Due on ${task.date.toDateString()}`;
  heading.appendChild(date);
  title.appendChild(heading);
  // div.appendChild(date);

  div.appendChild(title);

  const disc = document.createElement("div");
  disc.textContent = task.description;
  div.appendChild(disc);

  div.addEventListener("click", () => {
    const mainContent = document.querySelector("#main-content");
    mainContent.innerHTML = "";
    mainContent.appendChild(taskView(task));
  });

  return div;
}

function body(project) {
  const div = document.createElement("div");
  div.id = "body";
  if (project.tasks.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.id = "empty-message";
    emptyMessage.textContent = "No Tasks :)";

    div.appendChild(emptyMessage);
  } else {
    project.tasks.forEach((task) => {
      const tb = taskButton(task);
      div.appendChild(tb);
    });
  }
  div.appendChild(plus(div, project));
  return div;
}

export default function projectView(project) {
  const div = document.createElement("div");
  div.id = "project-view";
  console.log(project);
  div.appendChild(header(project.title));
  const projectBody = body(project);
  div.appendChild(projectBody);
  project.sub(() => {
    div.innerHTML = "";
    div.appendChild(header(project.title));
    const projectBody = body(project);
    div.appendChild(projectBody);
  });

  return div;
}
