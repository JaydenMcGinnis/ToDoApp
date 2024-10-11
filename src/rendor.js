export class Rendor {
  constructor(obj, parent) {
    this.obj = obj;
    this.parent = parent;
    this.createElement();
    this.appendChildren();
    this.rendor();
  }

  // Append helper
  appendChildren(parent, children = []) {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  }

  // Element creation helper
  createElement(tag, classnames = [], textContent = "") {
    const element = document.createElement(tag);
    classnames.forEach((classname) => {
      element.classList.add(classname);
    });
    element.textContent = textContent;
    return element;
  }

  // Create dom elements for each property
  rendor() {
    const container = this.createElement("div", ["project-container"]),
      title = this.createElement("h3", [], this.obj.title),
      description = this.createElement("p", [], this.obj.description),
      tasks = this.createElement("ul", []),
      button = this.createElement("button", [], "Add");

    this.obj.taskList.forEach((task) => {
      // Create task li and append to ul
      const taskItem = document.createElement("li");
      tasks.appendChild(taskItem);
    });

    // TODO: Event listener that creates a new note and appends to parent

    // Append children to container and then to content
    this.appendChildren(container, [title, description, tasks, button]);
    this.appendChildren(this.parent, [container]);
  }
}
