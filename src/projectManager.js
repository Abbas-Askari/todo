import Task from "./task";
import Project from "./project";
export const GET_PROJECT = 0;
export const EVENT_PROJECTS_UPDATE = 1;
const projectUpdateSubscribtions = [];

let projects = [];
// let projects = [new Project("Untitled Project 1", [])];
if (localStorage.getItem("projects")) {
  // console.log(JSON.parse(localStorage.getItem("projects")));
  let newProjects = JSON.parse(localStorage.getItem("projects"));
  projects = newProjects.map((p) => {
    const tasks = p.tasks.map((task) => Object.assign(new Task(), task));
    p.tasks = tasks;
    console.log(p.tasks.includes(tasks[0]), "this is the log");
    return Object.assign(new Project(), p);
  });
}

console.log(projects);

export const addProject = (project) => {
  projects.push(project);
  fire(EVENT_PROJECTS_UPDATE);
};

export let getProjects = () => projects;

export const publish = (func, type) => {
  if (type === GET_PROJECT) {
    getProjects = func;
  }
};

export const subscribe = (func, event) => {
  if (event === EVENT_PROJECTS_UPDATE) {
    projectUpdateSubscribtions.push(func);
  }
};

// localStorage.setItem("projects", {});
export const fire = (event) => {
  if (event === EVENT_PROJECTS_UPDATE) {
    console.log("Firing EVENT_PROJECTS_UPDATE");
    projectUpdateSubscribtions.forEach((func) => func());
  }
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const removeTaskSubs = () => {
  projects.forEach((project) =>
    project.tasks.forEach((task) => (task.changeSubs.length = 0))
  );
};
