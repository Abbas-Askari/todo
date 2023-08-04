import "./pm.css";
// function progressMeter(id) {
//   const div = document.createElement("div");
//   div.id = id;
//   div.classList.add("progress");

//   const addWrapper = () => {
//     const wrapper = document.createElement("div");
//     wrapper.classList.add("wrapper");
//     div.appendChild(wrapper);

//     const spinner = document.createElement("div");
//     spinner.classList.add("spinner");
//     wrapper.appendChild(spinner);
//   };

//   addWrapper();
//   addWrapper();
//   div.setPercent = (percent) => {
//     div.percent = percent;
//     let angle = 360 * percent;
//     // if (angle < 0) return;
//     div.style.setProperty("--angle", angle + "deg");
//     div.style.setProperty(
//       "--rotationB",
//       `${-180 + Math.min(Math.max(0, angle), 180)}deg`
//     );
//     angle -= 180;
//     // if (angle < 0) return;
//     div.style.setProperty("--rotationA", `${-180 + Math.max(0, angle)}deg`);
//   };

//   return div;
// }

function progressMeter(id) {
  const div = document.createElement("div");
  div.classList.add("progress");

  const text = document.createElement("div");
  text.textContent = "0";
  text.classList.add("text");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  svg.setAttribute("viewBox", "0 0 100 100");
  c1.setAttribute("cx", "50");
  c1.setAttribute("cy", "50");
  c1.setAttribute("r", "45");
  c2.setAttribute("cx", "50");
  c2.setAttribute("cy", "50");
  c2.setAttribute("r", "45");
  svg.appendChild(c1);
  svg.appendChild(c2);
  div.appendChild(svg);
  div.appendChild(text);

  div.setPercent = (percent) => {
    div.percent = percent;
    div.style.setProperty("--percent", percent);
    const starting = parseInt(text.textContent);
    let currnet = starting;
    const target = Math.floor(percent * 100);
    const diff = target - starting;
    const time = 16;
    const totalTime = 1000;
    const n = totalTime / time;
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        currnet += diff / n;
        text.textContent = Math.floor(currnet);
        if (i === n - 1) text.textContent = target;
      }, time * i);
    }
    // text.textContent = Math.floor(percent * 100);
  };

  return div;
}

export default progressMeter;
