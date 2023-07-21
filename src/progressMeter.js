import "./pm.css";

function progressMeter(id) {
  const div = document.createElement("div");
  div.id = id;
  div.classList.add("progress");

  const addWrapper = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    div.appendChild(wrapper);

    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    wrapper.appendChild(spinner);
  };

  addWrapper();
  addWrapper();
  div.setPercent = (percent) => {
    console.log("Here Percent is being set to ", percent);
    div.percent = percent;
    let angle = 360 * percent;
    // if (angle < 0) return;
    div.style.setProperty(
      "--rotationB",
      `${-180 + Math.min(Math.max(0, angle), 180)}deg`
    );
    angle -= 180;
    // if (angle < 0) return;
    div.style.setProperty("--rotationA", `${-180 + Math.max(0, angle)}deg`);
  };

  return div;
}

export default progressMeter;
