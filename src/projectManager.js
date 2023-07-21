import Project from "./project";
export const GET_PROJECT = 0;
export const EVENT_PROJECTS_UPDATE = 1;
const projectUpdateSubscribtions = [];

let projects = [new Project("Untitled Project 1", [])];

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

export const fire = (event) => {
  if (event === EVENT_PROJECTS_UPDATE) {
    console.log("Firing EVENT_PROJECTS_UPDATE");
    projectUpdateSubscribtions.forEach((func) => func());
  }
};
