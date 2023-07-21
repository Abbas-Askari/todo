import { EVENT_PROJECTS_UPDATE, fire } from "./projectManager";

function Project(title, tasks) {
  this.title = title;
  this.tasks = tasks;
  this.changeSubs = [];
}

Project.prototype.sub = function (func) {
  this.changeSubs.push(func);
};

Project.prototype.fire = function () {
  this.changeSubs.forEach((func) => func());
  fire(EVENT_PROJECTS_UPDATE);
};

export default Project;
