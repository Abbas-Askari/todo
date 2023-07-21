import {
  mdiAlertBox,
  mdiCalendarMonthOutline,
  mdiPackageVariantClosed,
  mdiPlus,
  mdiStar,
} from "@mdi/js";
import newProject from "./newProject";
import {
  EVENT_PROJECTS_UPDATE,
  getProjects,
  subscribe,
} from "./projectManager";
import projectView from "./projectView";

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
  // const buttonContents = projects.map((project, i) => ({
  //   text: project.title,
  //   func: () => {
  //     const mainContent = document.querySelector("#main-content");
  //     //   ).reduce(
  //     //   (previous, currnet) =>
  //     //     previous ? previous : currnet.id === "content" ? currnet : null,
  //     //   null
  //     // );
  //     console.log(mainContent);
  //     mainContent.innerHTML = "";
  //     mainContent.appendChild(projectView(project));
  //     console.log("cleared");
  //   },
  //   logo: makeSvg(mdiPackageVariantClosed),
  // }));

  projects.forEach((project) => {
    const projectButtonContent = {
      text: project.title,
      func: () => {
        const mainContent = document.querySelector("#main-content");
        //   ).reduce(
        //   (previous, currnet) =>
        //     previous ? previous : currnet.id === "content" ? currnet : null,
        //   null
        // );
        console.log(mainContent);
        mainContent.innerHTML = "";
        mainContent.appendChild(projectView(project));
        console.log("cleared");
      },
      logo: makeSvg(mdiPackageVariantClosed),
    };
  });

  buttonContents.forEach((btn) => {
    const button = makeButton(btn.text, btn.func, btn.logo);
    button.classList.add("project-button");
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
