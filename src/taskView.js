import progressMeter from "./progressMeter";
import { makeSvg } from "./newProject";
import { mdiPlus } from "@mdi/js";

// let subscribtions = [];

const getUpdatedTaskCheckLists = () => {
  const checkLists = [];
  const lists = document.querySelectorAll(".checklist");
  Array.from(lists).forEach((list) => {
    const checkList = Array.from(list.querySelectorAll(".item")).reduce(
      (obj, item) => {
        obj[item.lastChild.value] = item.firstChild.checked;
        console.log(
          "item",
          item,
          item.lastChild.value,
          item.firstChild.checked
        );
        return obj;
      },
      {}
    );
    checkLists.push(checkList);
  }, {});
  console.log("Final checklists", checkLists);
  return checkLists;
};

const getCheckList = (checkList, task) => {
  const div = document.createElement("div");
  div.classList.add("checklist");
  let checked = 0;
  let total = 0;
  const header = document.createElement("div");
  header.classList.add("list-heading");
  div.appendChild(header);
  const h3 = document.createElement("h3");
  h3.textContent = "Check List";
  header.appendChild(h3);
  const deleteBtn = document.createElement("div");
  deleteBtn.textContent = "Delete";
  h3.appendChild(deleteBtn);

  const plus = document.createElement("div");
  plus.classList.add("plus");
  plus.textContent = "+";
  plus.addEventListener("click", () => {
    const label = document.createElement("input");
    label.addEventListener("click", () => {
      task.checkLists = getUpdatedTaskCheckLists();
      task.fire();
    });
    label.placeholder = "Name this check item!";
    label.setAttribute("name", "Click to Change!");
    label.addEventListener("input", (e) => {});
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "Click to Change!");
    checkBox.addEventListener("input", () => {
      task.checkLists = getUpdatedTaskCheckLists();
      task.fire();
    });
    const item = document.createElement("div");
    item.classList.add("item");
    item.appendChild(checkBox);
    item.appendChild(label);
    div.appendChild(item);
    total++;
    // update(checked / total, checked, total);
    label.focus();
  });
  header.appendChild(plus);

  for (const key in checkList) {
    if (checkList.hasOwnProperty(key)) {
      const label = document.createElement("input");
      label.addEventListener("input", () => {
        task.checkLists = getUpdatedTaskCheckLists();
        task.fire();
      });
      label.value = key;
      label.setAttribute("name", key);
      const checkBox = document.createElement("input");
      checkBox.checked = checkList[key];
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("name", key);
      checkBox.addEventListener("input", () => {
        task.checkLists = getUpdatedTaskCheckLists();
        task.fire();
      });
      total++;
      const item = document.createElement("div");
      item.classList.add("item");
      item.appendChild(checkBox);
      item.appendChild(label);
      div.appendChild(item);
    }
  }

  return div;
};

const getDescription = (description) => {
  const div = document.createElement("div");
  div.id = "description";
  const textArea = document.createElement("textArea");
  textArea.textContent = description;
  // const descriptionHeading = document.createElement("h3");
  // descriptionHeading.textContent = "Description";
  // div.appendChild(descriptionHeading);
  div.appendChild(textArea);
  return div;
};

const getNotes = (notes) => {
  const div = document.createElement("div");
  div.id = "notes";
  const textArea = document.createElement("textArea");
  textArea.textContent = notes;
  const notesHeading = document.createElement("h3");
  notesHeading.textContent = "notes";
  div.appendChild(notesHeading);
  div.appendChild(textArea);
  return div;
};

const getTwoDigitString = (x) => (x.toString().length < 2 ? "0" + x : "" + x);

const getComparision = (date) => {
  const millis = Math.abs(Date.now() - date.valueOf());
  const minute = millis / 60000;
  const hours = minute / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365;
  const time = { years, months, weeks, days, hours, minute, millis };
  console.log(time);
  const key = Object.keys(time).reduce((prev, current) => {
    console.log(time[current]);
    if (prev) return prev;
    else if (time[current] > 1) return current;
    else return null;
  }, null);
  return `In ${time[key].toFixed(1)} ${key}`;
};

const getDate = (date) => {
  const div = document.createElement("div");
  div.id = "date";
  const label = document.createElement("label");
  label.textContent = "Due on:";
  div.appendChild(label);
  const dateElement = document.createElement("input");
  dateElement.setAttribute("type", "date");
  dateElement.value = `${date.getYear() + 1900}-${getTwoDigitString(
    date.getMonth()
  )}-${getTwoDigitString(date.getDate())}`;
  label.htmlFor = dateElement;

  const comparision = document.createElement("p");
  comparision.textContent = getComparision(new Date(dateElement.value));
  dateElement.addEventListener(
    "input",
    () =>
      (comparision.textContent = getComparision(new Date(dateElement.value)))
  );

  // dateElement.setAttribute(
  //   "value",
  //   `${date.getYear() + 1900}-${date.getMonth()}-${date.getDate()}`
  // );
  div.appendChild(dateElement);
  div.appendChild(comparision);
  return div;
};

const getProirityText = (x) =>
  ["Low", "Considerable", "Medial", "High", "Extreme"][Math.floor(x / 2)];

const getProirity = (proirity) => {
  const div = document.createElement("div");
  div.id = "proirity";

  const slider = document.createElement("input");
  slider.min = 0;
  slider.max = 9;
  slider.step = 0.1;
  slider.type = "range";
  slider.addEventListener("input", () => {
    p.textContent = getProirityText(slider.value);
    div.style.setProperty(
      "--left",
      (slider.value / 9) * (slider.clientWidth - 36) + "px"
    );
    div.style.setProperty("--content", slider.value);
    console.log(div.style.getPropertyValue("--left"));
  });

  const p = document.createElement("p");
  p.textContent = getProirityText(slider.value);

  div.appendChild(p);
  div.appendChild(slider);

  return div;
};

const getProgress = () => {
  const div = document.createElement("div");
  div.id = "progress";

  // console.log(progressMeter("progress"));

  const meter = progressMeter("p");
  meter.setPercent(0.15);
  // subscribtions.push(meter.setPercent);

  div.appendChild(meter);

  const p = document.createElement("p");
  // p.textContent = `${
  //   percent * 100
  // }% Completed. ${checked} out of ${total} tasks are done.`;
  // subscribtions.push((percent, checked, total) => {
  //   p.textContent = `${
  //     percent * 100
  //   }% Completed. ${checked} out of ${total} tasks are done.`;
  // });
  div.appendChild(p);

  return [div, meter.setPercent];
};

import "./taskview.css";
import { fire } from "./projectManager";

const getCheckListAdder = (task) => {
  const div = document.createElement("div");
  div.id = "checklist-adder";

  const text = document.createElement("div");
  text.textContent = "New Check List";

  const plus = document.createElement("div");
  plus.textContent = "+";
  if (!task.checkLists) {
    task.checkLists = [];
  }

  div.appendChild(plus); // -2 -2 28 28
  // div.appendChild(makeSvg(mdiPlus)); // -2 -2 28 28
  div.appendChild(text);

  div.addEventListener("click", () => {
    const newList = {};
    task.checkLists.push(newList);
    const checkList = getCheckList(newList, task);
    const lists = div.parentNode.querySelector("#lists");
    checkList.setAttribute(
      "data-index",
      div.parentNode.querySelector("#lists").childElementCount
    );
    lists.appendChild(checkList);
  });

  return div;
};

const getTitle = (title) => {
  const div = document.createElement("div");
  div.id = "title";

  const meter = progressMeter("main-meter");
  // meter.setPercent(0.1);
  div.appendChild(meter);

  const h1 = document.createElement("h1");
  h1.textContent = title;
  div.appendChild(h1);

  return [div, meter.setPercent];
};

function taskView(task) {
  const div = document.createElement("div");
  div.id = "task-view";

  const [title, setPercent] = getTitle(task.title);

  div.appendChild(title);

  // const [progress, setPercent] = getProgress();
  const updatePercent = () => {
    const percent = task.calcPercent();
    console.log("Setting percent to: ", percent);
    setPercent(percent);
    // console.log("Setting Percent");
  };
  task.sub(updatePercent);
  updatePercent();
  console.log("task view is getting called");
  // console.log({ progress, setPercent });
  const lists = document.createElement("div");
  lists.id = "lists";

  div.appendChild(getDescription(task.description));
  // div.appendChild(getProirity(task.proirity));
  // div.appendChild(getDate(task.date));
  div.appendChild(lists);
  task.checkLists.forEach((checkList, i) => {
    const list = getCheckList(checkList, task);
    list.setAttribute("data-index", i);
    console.log(list);
    lists.appendChild(list);
  });

  div.appendChild(getCheckListAdder(task, div));
  return div;
}

export default taskView;
