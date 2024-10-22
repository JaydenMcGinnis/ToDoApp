import { Task } from "./task";
import { projectList } from "./index";
export class DOM {
  constructor() {
    this.activeProjectName;
    this.activeProject;
    this.taskUnorderedList = document.querySelector("#task-list");
    this.createTaskButton = document.querySelector("#task-creator");
    this.taskDialog = document.querySelector("#task-dialog");
    this.taskForm = document.querySelector("#task-form");
    this.TaskButton = document.querySelector("#create-task");
    this.taskSubmit = document.querySelector("#task-submit");
    this.closeButton = document.querySelector("#task-dialog button");
    this.num = 0;
  }

  // Get Project name
  taskController() {
    const UL = document.querySelector("#project-list");

    // Event listener for project list item click
    UL.addEventListener("click", (e) => {
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

    // Event listener for task submission
    this.taskSubmit.addEventListener("click", () => {
      if (this.activeProject) {
        this.createTask();
        // Reset and display updated tasks for the active project
        this.taskUnorderedList.innerHTML = "";
        this.showTasks();
      }
    });
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

      h4.textContent = task.title;
      description.textContent = task.description;
      dueDate.textContent = `Due Date: ${task.dueDate}`;
      priority.textContent = `Priority: ${task.priority}`;

      p.appendChild(description);
      p.appendChild(dueDate);
      p.appendChild(priority);

      div.appendChild(h4);
      div.appendChild(p);

      // Button
      button.textContent = "x";
      button.addEventListener("click", () => {
        console.log(this.activeProject.taskList.indexOf(task.title));
      });

      div.appendChild(button);
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
    console.log(this.activeProject.taskList);
  }

  showTaskDialog() {
    this.taskDialog.showModal();
  }

  closeTaskDialog() {
    this.taskDialog.close();
  }

  // Addtask

  initializeEvents() {
    this.taskController();
    this.TaskButton.addEventListener("click", () => {
      this.showTaskDialog();
    });

    this.closeButton.addEventListener("click", () => {
      this.closeTaskDialog();
    });
  }
}
