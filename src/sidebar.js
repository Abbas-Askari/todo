import {
  mdiAlertBox,
  mdiCalendarMonthOutline,
  mdiClose,
  mdiPackageVariantClosed,
  mdiPlus,
  mdiStar,
} from "@mdi/js";
import newProject from "./newProject";
import {
  EVENT_PROJECTS_UPDATE,
  fire,
  getProjects,
  removeTaskSubs,
  subscribe,
} from "./projectManager";
import projectView from "./projectView";
import progressMeter from "./progressMeter";
import taskView from "./taskView";

const makeSvg = (p, color = "currentColor") => {
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

  div.addEventListener("click", func ? func : () => {});

  const button = document.createElement("button");
  button.textContent = name;
  div.appendChild(button);

  return div;
};

function addProjectButtons(div) {
  const projects = getProjects();
  console.log("Repopulating project buttons with: ", projects);
  // const buttonContents = projects.map((project, i) => ({
  //   text: project.title,
  //   func: () => {
  //     const mainContent = document.querySelector("#main-content");
  //     //   ).reduce(
  //     //   (previous, currnet) =>
  //     //     previous ? previous : currnet.id === "content" ? currnet : null,
  //     //   null
  //     // );
  //     mainContent.innerHTML = "";
  //     mainContent.appendChild(projectView(project));
  //   },
  //   logo: makeSvg(mdiPackageVariantClosed),
  // }));
  const buttonContents = [];

  projects.forEach((project) => {
    const projectButtonContent = {
      text: project.title,
      func: () => {
        const mainContent = document.querySelector("#main-content");
        mainContent.innerHTML = "";
        removeTaskSubs();

        mainContent.appendChild(projectView(project));
      },
      logo: makeSvg(mdiPackageVariantClosed),
    };
    buttonContents.push(projectButtonContent);
    project.tasks.forEach((task) => {
      const meter = progressMeter();
      meter.setPercent(task.percent);
      buttonContents.push({
        text: task.title,
        func: () => {
          const mainContent = document.querySelector("#main-content");
          mainContent.innerHTML = "";
          removeTaskSubs();
          mainContent.appendChild(taskView(task));
        },
        logo: meter,
        isTask: true,
      });
    });
  });

  buttonContents.forEach((btn) => {
    const button = makeButton(btn.text, btn.func, btn.logo);
    button.classList.add("project-button");

    const close = document.createElement("div");
    close.classList.add("delete");
    close.appendChild(makeSvg(mdiClose));
    close.firstChild.setAttribute("viewBox", "5 5 15 15");

    close.addEventListener("click", (e) => {
      if (btn.isTask) {
        projects.forEach((project) => {
          project.tasks.forEach((t) => {
            if (t.title === btn.text) {
              project.tasks.splice(project.tasks.indexOf(t), 1);
              project.fire();
            }
          });
        });
      } else {
        const project = projects.reduce(
          (acc, e) => (acc ? acc : e.title === btn.text ? e : null),
          null
        );
        console.log("Project to delete: ", project);
        getProjects().splice(projects.indexOf(project), 1);
      }
      fire(EVENT_PROJECTS_UPDATE);
      e.stopPropagation();
    });

    button.appendChild(close);
    div.appendChild(button);
  });
}

function removeProjectButtons(div) {
  const toRemove = Array.from(div.childNodes).filter((child) =>
    child.classList.contains("project-button")
  );
  toRemove.forEach((child) => div.removeChild(child));
}

function repopulateProjectButtons(div) {
  removeProjectButtons(div);
  addProjectButtons(div);
}

function getButtons() {
  const div = document.createElement("div");
  div.id = "sidebuttons";

  const buttonContent = [
    { text: "Today", func: null, logo: makeSvg(mdiStar, "#fdd314") },
    {
      text: "Upcomming",
      func: null,
      logo: makeSvg(mdiCalendarMonthOutline, "#3aa08b"),
    },
    { text: "Missed", func: null, logo: makeSvg(mdiAlertBox, "#f94876") },
    {
      text: "All Projects",
      func: null,
      logo: makeSvg(mdiPackageVariantClosed),
    },
  ];

  buttonContent.forEach((btn) => {
    const button = makeButton(btn.text, btn.func, btn.logo);
    div.appendChild(button);
  });

  subscribe(() => {
    repopulateProjectButtons(div);
  }, EVENT_PROJECTS_UPDATE);

  repopulateProjectButtons(div);
  return div;
  // div.appendChild();
}

function sidebar() {
  const div = document.createElement("div");
  div.id = "sidebar";

  div.appendChild(getButtons());
  div.appendChild(newProject());

  return div;
}

export default sidebar;
