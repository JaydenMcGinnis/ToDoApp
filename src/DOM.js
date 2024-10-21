export class DOM {
  constructor() {
    this.taskController();
    this.activeProject;
    this.taskUnorderedList = document.querySelector("#task-list");
    this.createTaskButton = document.querySelector("#task-creator");
    this.taskDialog = document.querySelector("#task-dialog");
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
        this.activeProject = e.target.textContent;
        console.log(this.activeProject);
        this.showTasks(e.target.taskList);
      }
    });
  }

  // title, description, dueDate, priority, taskComplete
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

    //this.taskSubmit.addEventListener("click", () => {
    //    this.addTask
    //})

    this.closeButton.addEventListener("click", () => {
      this.closeTaskDialog();
    });
  }
}
