import { Task } from "./task";
import { projectList } from "./index";
export class DOM {
  constructor() {
    this.taskUnorderedList = document.querySelector("#task-list");
    this.createTaskButton = document.querySelector("#task-creator");
    this.taskDialog = document.querySelector("#task-dialog");
    this.taskForm = document.querySelector("#task-form");
    this.TaskButton = document.querySelector("#create-task");
    this.taskSubmit = document.querySelector("#task-submit");
    this.closeButton = document.querySelector("#task-dialog button");
  }

  // Display Project tasks
  showTasks() {
    this.activeProject.taskList.forEach((task) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      const description = document.createElement("span");
      const dueDate = document.createElement("span");
      const priority = document.createElement("span");
      const button = document.createElement("button");

      // Populate task details
      h4.textContent = task.title;
      description.textContent = task.description;
      dueDate.textContent = `Due Date: ${task.dueDate}`;
      priority.textContent = `Priority: ${task.priority}`;

      // Append task details to the div
      p.appendChild(description);
      p.appendChild(dueDate);
      p.appendChild(priority);
      div.appendChild(h4);
      div.appendChild(p);

      // Create and append the delete button
      button.textContent = "x";
      button.classList.add("delete-button");
      div.appendChild(button);

      // Append the div to the li and the li to the task list
      li.appendChild(div);
      this.taskUnorderedList.appendChild(li);
    });
  }

  createTask() {
    // Get form data to create a task
    const data = new FormData(this.taskForm);
    this.num += 1;

    // title, description, dueDate, priority, taskComplete
    const task = new Task(
      data.get("title"),
      data.get("description"),
      data.get("date"),
      data.get("priority")
    );
    this.activeProject.taskList.push(task);
  }

  deleteTask(task) {
    this.activeProject.taskList.splice(
      this.activeProject.taskList[this.activeProject.taskList.indexOf(task)],
      1
    );
  }

  deleteProject(project) {
    projectList.splice(projectList[projectList.indexOf(project)], 1);
  }

  showTaskDialog() {
    this.taskDialog.showModal();
  }

  closeTaskDialog() {
    this.taskDialog.close();
  }

  initializeEvents() {
    const UL = document.querySelector("#project-list");

    // Combined event listener for project list item clicks and delete button
    UL.addEventListener("click", (e) => {
      // If an LI is clicked, handle project selection
      if (e.target.tagName === "LI") {
        this.activeProjectName = e.target.textContent;
        const project = projectList.find(
          (obj) => obj.title === this.activeProjectName
        );

        if (project) {
          this.activeProjectIndex = projectList.indexOf(project);
          this.activeProject = project;

          // Reset and display tasks for the selected project
          this.taskUnorderedList.innerHTML = "";
          this.showTasks();
        }
      }
    });

    this.taskUnorderedList.addEventListener("click", (e) => {
      // If a delete button inside an LI is clicked, remove the project item
      if (e.target && e.target.classList.contains("delete-button")) {
        const listItem = e.target.closest("li"); // Locate the closest li to the button
        const listItemTitle = listItem.querySelector("h4");
        this.deleteTask(listItemTitle);
        listItem.remove(); // Remove the li from the DOM
      }
    });

    // Delete button event

    // Event listener for task submission
    this.taskSubmit.addEventListener("click", () => {
      if (this.activeProject) {
        this.createTask();
        this.closeTaskDialog();
        // Reset and display updated tasks for the active project
        this.taskUnorderedList.innerHTML = "";
        this.showTasks();
      }
    });

    this.TaskButton.addEventListener("click", () => {
      this.showTaskDialog();
    });

    this.closeButton.addEventListener("click", () => {
      this.closeTaskDialog();
    });
  }
}
