class ProjectCreator {
  constructor(obj, parent) {
    this.obj = obj;
    this.parent = parent;
  }
  // Create dom elements for each property
  rendor() {
    const container = document.createElement("div"),
      title = document.createElement("h3"),
      description = document.createElement("p"),
      dueDate = document.createElement("p"),
      priority = document.createElement("p"),
      button = document.createElement("button");

    container.classList.add("project-container");
    title.textContent = obj.title;
    description.textContent = obj.description;
    dueDate.textContent = obj.dueDate;
    priority.textContent = obj.priority;
    button.textContent = "Add";

    // Append each section to its own div container
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(dueDate);
    container.appendChild(priority);
    container.appendChild(button);

    parent.appendChild(container);
  }

  // TODO: Add event listener to button for notes
}
