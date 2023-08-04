// let tsk = {
//   title: "Bike service",
//   description: "Take the bike to the service center.",
//   date: Date.now(),
//   proirity: 10,
//   checkList: { start: true, getToMurree: false },
//   notes: "",
// };

import { getProjects } from "./projectManager";

function Task(title, description, proirity, checkLists, date, project) {
  this.title = title;
  this.description = description;
  this.proirity = proirity;
  this.checkLists = checkLists;
  this.percent = 0;
  this.date = date;
  this.changeSubs = [];
  // this.project = project;
}

Task.prototype.calcPercent = function () {
  let total = 0;
  let checked = 0;
  for (const list of this.checkLists) {
    for (const key in list) {
      total++;
      if (list[key]) checked++;
    }
  }
  if (total == 0) {
    this.percent = 0;
    return 0;
  }
  this.percent = checked / total;
  return this.percent;
};

Task.prototype.sub = function (func) {
  this.changeSubs.push(func);
};

const getProject = (task) => {
  const projects = getProjects();
  for (let project of projects) {
    if (project.tasks.includes(task)) return project;
  }
  console.error("Parent project not found for task:", task, project);
};

Task.prototype.fire = function () {
  this.changeSubs.forEach((func) => func());
  // this.project.fire();
  getProject(this).fire();
};

export default Task;
