// let tsk = {
//   title: "Bike service",
//   description: "Take the bike to the service center.",
//   date: Date.now(),
//   proirity: 10,
//   checkList: { start: true, getToMurree: false },
//   notes: "",
// };

function Task(title, description, proirity, checkLists, date, project) {
  this.title = title;
  this.description = description;
  this.proirity = proirity;
  this.checkLists = checkLists;
  this.precent = 0;
  this.date = date;
  this.changeSubs = [];
  this.project = project;
}

Task.prototype.calcPercent = function () {
  console.log(this.checkLists);
  let total = 0;
  let checked = 0;
  for (const list of this.checkLists) {
    for (const key in list) {
      // console.log({ list: list[key], key });
      total++;
      if (list[key]) checked++;
    }
  }
  this.precent = checked / total;
  if (total == 0) {
    return 0;
  }
  console.log(this.precent);
  return this.precent;
};

Task.prototype.sub = function (func) {
  this.changeSubs.push(func);
};

Task.prototype.fire = function () {
  this.changeSubs.forEach((func) => func());
  this.project.fire();
};

export default Task;
