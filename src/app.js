import header from "./header";
import sidebar from "./sidebar";
import mainContent from "./mainContent";
import taskView from "./taskView";
import newTask from "./newTask";
import Task from "./task";
import Project from "./project";
import projectView from "./projectView";
import { addProject } from "./projectManager";

const project = new Project("My first project", []);
addProject(project);
console.log(project);
const task = new Task(
  "title 1",
  "Some discription that means a lot. It isn't just non-sense.",
  9,
  [],
  new Date(2004, 5, 10),
  project
);
const task2 = new Task(
  "title 2",
  "Some discription that means a lot. It isn't just non-sense.",
  5,
  [{ "dummy item": false, "actual item": true }, { item: true }],
  new Date(2004, 5, 10),
  project
);
const task3 = new Task(
  "title 3",
  "Some discription that means a lot. It isn't just non-sense.",
  3,
  [],
  new Date(2004, 5, 10),
  project
);
project.tasks.push(task);
project.tasks.push(task2);
project.tasks.push(task3);

function app() {
  const div = document.createElement("div");
  div.id = "content";

  // div.appendChild(header());
  const content = mainContent();
  content.appendChild(projectView(project));
  // content.appendChild(
  //   taskView(
  //     new Task(
  //       "Goto Gym",
  //       "Goto to gym and hit a push workout.",
  //       9,
  //       [
  //         {
  //           flatDB: false,
  //           tricepsExtensions: false,
  //           inclineBarbellBench: false,
  //           skullCrushers: false,
  //         },
  //       ],
  //       new Date(2023, 6, 3)
  //     )
  //   )
  // );
  div.appendChild(sidebar());

  div.appendChild(content);
  // div.appendChild(newTask());
  return div;
}

export default app;
