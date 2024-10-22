import { Task } from "./task";
import { projectList } from "./index";
export class DOM {
  constructor() {
    this.taskController();
    this.activeProjectName;
    this.activeProject;
    this.taskUnorderedList = document.querySelector("#task-list");
    this.createTaskButton = document.querySelector("#task-creator");
    this.taskDialog = document.querySelector("#task-dialog");
    this.taskForm = document.querySelector("#task-form");
    this.TaskButton = document.querySelector("#create-task");
    this.taskSubmit = document.querySelector("#task-submit");
    this.closeButton = document.querySelector("#task-dialog button");
  }

  // Get Project name
  taskController() {
    const UL = document.querySelector("#project-list");
    UL.addEventListener("click", (e) => {
      // check if e is list item
      if (e.target.tagName === "LI") {
        this.activeProjectName = e.target.textContent;
        projectList.forEach((obj) => {
          if (obj.title === this.activeProjectName)
            this.activeProjectIndex = projectList.indexOf(obj);
        });

        this.activeProject = projectList[this.activeProjectIndex];

        this.taskSubmit.addEventListener("click", () => {
          if (this.activeProjectName) {
            this.createTask();
          }
        });
        //this.showTasks(this.activeProject.taskList);
      }
    });
  }

  // Display Project tasks
  showTasks(projectTaskList = []) {
    projectTaskList.forEach((task) => {
      const li = document.createElemenet("li");
      const div = document.createElement("div");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      const description = document.createElement("span");
      const dueDate = document.createElement("span");
      const priority = document.createElement("span");

      h4.textContent = task.title;
      description.textContent = task.description;
      dueDate.textContent = task.dueDate;
      priority.textContent = task.priority;

      p.appendChild(description);
      p.appendChild(dueDate);
      p.appendChild(priority);

      div.appendChild(h4);
      div.appendChild(p);

      li.appendChild(div);
    });
  }

  createTask() {
    // Get form data to create a task
    const data = new FormData(this.taskForm);

    // title, description, dueDate, priority, taskComplete
    const task = new Task(
      data.get("title"),
      data.get("description"),
      data.get("date"),
      data.get("priority")
    );
    this.activeProject.taskList.push(task);
  }

  showTaskDialog() {
    this.taskDialog.showModal();
  }

  closeTaskDialog() {
    this.taskDialog.close();
  }

  // Addtask

  initializeEvents() {
    this.TaskButton.addEventListener("click", () => {
      this.showTaskDialog();
    });

    this.closeButton.addEventListener("click", () => {
      this.closeTaskDialog();
    });
  }
}
