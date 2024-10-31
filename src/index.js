import "./styles.css";
import { ProjectCreator } from "./project.js";
import { DOM } from "./DOM.js";

// Create Project list
export const projectList = [];

// Initialize Project creator
const projectCreator = new ProjectCreator(projectList);
projectCreator.initEventListeners();

// initialize dom class
const dom = new DOM();
dom.initializeEvents();

// STORAGE

// Populate the storage with every project object
function populateStorage() {
  localStorage.setItem("projectList", projectList);
  projectList.forEach((project) => {
    localStorage.setItem(project.title, project);
  });
}

// Update the DOM with the projects inside local storage
function getProjectList() {
  projectList = localStorage.getItem(projectList);
}
