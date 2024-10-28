import "./styles.css";
import { ProjectCreator } from "./project.js";
import { DOM } from "./DOM.js";

// Create Project list
export const projectList = [];

// Initialize Project creator
const projectCreator = new ProjectCreator(projectList);
projectCreator.showProjects(projectList);
projectCreator.initEventListeners();

// initialize dom class
const dom = new DOM();
dom.initializeEvents();

// STORAGE
function populateStorage() {
  projectList.forEach((project) => {
    localStorage.setItem(project.title, project);
  });
}
