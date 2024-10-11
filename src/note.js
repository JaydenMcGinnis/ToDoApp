// Class for creating Projects
export class Note {
  constructor(title, description, dueDate, priority, taskComplete) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskComplete = taskComplete;
  }

  taskIsComplete() {
    this.taskComplete = true;
  }
}
