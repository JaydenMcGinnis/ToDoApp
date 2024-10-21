// Class for creating Projects
export class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskComplete = false;
  }

  taskIsComplete() {
    this.taskComplete = true;
  }
}
