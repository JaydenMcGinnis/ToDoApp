export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }
}
