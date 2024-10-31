class Project {
  constructor(title) {
    this.title = title;
    this.taskList = [];
  }
}

class ProjectCreator {
  // Dom elements
  constructor(projectList = []) {
    // DOM elements
    this.projectDialog = document.querySelector("#project-dialog");
    this.closeButton = document.querySelector("#project-dialog button");
    this.projectSubmit = document.querySelector("#project-submit");
    this.createProjectButton = document.querySelector("#create-project");
    this.projectForm = document.querySelector("#project-form");

    // List of projects
    this.projectList = projectList;
  }

  // Create Project from form inputs
  createProject() {
    const data = new FormData(this.projectForm);
    const title = data.get("title");
    const projectTitles = [];
    this.projectList.forEach((project) => {
      projectTitles.push(project.title);
    });

    // Check if project name is already in project list
    if (projectTitles.includes(title || title.toUpperCase())) {
      return alert(`${title} already exists in project list.`);
    }
    const project = new Project(title);
    this.closeProjectDialog();
    this.projectList.push(project);
    localStorage.setItem(`${project.title}`, project);
  }

  // Open dialogs form
  showProjectDialog() {
    this.projectDialog.showModal();
  }

  // Close dialogs form
  closeProjectDialog() {
    this.projectDialog.close();
  }

  showProjects(projectList = []) {
    const projectUnorderedList = document.querySelector("ul");
    projectUnorderedList.innerHTML = "";

    projectList.forEach((project) => {
      // Create li element
      const element = document.createElement("li");
      const div = document.createElement("div");
      const button = document.createElement("button");
      element.textContent = `${project.title}`;
      button.classList.add("delete-button");
      button.textContent = "x";
      div.appendChild(element);
      div.appendChild(button);
      projectUnorderedList.appendChild(div);
    });
  }

  initEventListeners() {
    // "Open" dialog in template
    this.createProjectButton.addEventListener("click", () => {
      this.showProjectDialog();
    });
    // Create Project obj
    this.projectSubmit.addEventListener("click", () => {
      this.createProject();
      this.showProjects(this.projectList);
    });

    // "Close" button closes the dialog
    this.closeButton.addEventListener("click", () => {
      this.closeProjectDialog();
    });
  }
}

const showProjects = new ProjectCreator().showProjects;
const projectTitles = new ProjectCreator().projectTitles;
export { Project, ProjectCreator, showProjects, projectTitles };
