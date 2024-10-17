class Project {
  constructor(title, description) {
    this.title = title;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }
}

class ProjectCreator {
  // Dom elements
  constructor(projectList = []) {
    // DOM elements
    this.projectDialog = document.querySelector("#project-dialog");
    this.closeButton = document.querySelector("#project-dialog button");
    this.projectSubmit = document.querySelector("#project-submit");
    this.projectButton = document.querySelector("#create-project");
    this.projectForm = document.querySelector("form");

    // List of projects
    this.projectList = projectList;
  }

  // Create Project from form inputs
  createProject() {
    const data = new FormData(this.projectForm);
    const project = new Project(data.get("title"));
    this.projectList.push(project);
  }

  // Open dialogs form
  showDialog() {
    this.projectDialog.showModal();
  }

  // Close dialogs form
  closeDialog() {
    this.projectDialog.close();
  }

  showProjects() {
    const projectUnorderedList = document.querySelector("ul");
    projectUnorderedList.innerHTML = "";

    this.projectList.forEach((project) => {
      // Create li element
      const element = document.createElement("li");
      element.textContent = `${project.title}`;
      projectUnorderedList.appendChild(element);
    });
  }

  initEventListeners() {
    // "Open" dialog in template
    this.projectButton.addEventListener("click", () => {
      this.showDialog();
    });
    // Create Project obj
    this.projectSubmit.addEventListener("click", () => {
      this.createProject();
      this.showProjects(this.projectList);
    });

    // "Close" button closes the dialog
    this.closeButton.addEventListener("click", () => {
      this.closeDialog();
    });
  }
}

export { Project, ProjectCreator };
