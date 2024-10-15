import { Project } from "./project";
import { projectList } from "./index.js";
// Rendor
// Create Project object on click and dynamically create a project cell
const projectDialog = document.querySelector("#project-dialog");
const closeButton = document.querySelector("#project-dialog button");
const projectSubmit = document.querySelector("#project-submit");
const projectButton = document.querySelector("#create-project");
const projectForm = document.querySelector("form");

// "Open" dialog in template
projectButton.addEventListener("click", () => {
  projectDialog.showModal();

  // Create Project obj
  projectSubmit.addEventListener("click", () => {
    const data = new FormData(projectForm);

    const project = new Project(data.get("title"), data.get("description"));
    projectList.push(project);
    console.log(projectList);
  });
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  projectDialog.close();
});
