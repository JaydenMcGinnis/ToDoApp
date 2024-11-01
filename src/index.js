import "./styles.css";
import { ProjectCreator } from "./project.js";
import { DOM } from "./DOM.js";

// Create Project list
export const projectList = [];
populateProjectList();

// Populate project list
function populateProjectList() {
  const storageItems = localStorage.length;
  if (storageItems) {
    for (let i = 0; i < storageItems; i++) {
      projectList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
}

// Initialize Project creator
const projectCreator = new ProjectCreator(projectList);
projectCreator.initEventListeners();
if (localStorage.length > 0) {
  projectCreator.showProjects(projectList);
}

// initialize dom class
const dom = new DOM();
dom.initializeEvents();
dom.showTasks();
