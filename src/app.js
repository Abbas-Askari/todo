import header from "./header";
import sidebar from "./sidebar";
import mainContent from "./mainContent";

function app() {
  const div = document.createElement("div");
  div.id = "content";

  div.appendChild(header());
  div.appendChild(sidebar());
  div.appendChild(mainContent());

  return div;
}

export default app;
