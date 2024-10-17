import "./styles.css";
import { Project, ProjectCreator } from "./project.js";
import { Task } from "./task.js";

// Create Project list
const projectList = [];

// Initialize Project creator
const projectCreator = new ProjectCreator(projectList);
projectCreator.showProjects(projectList);
projectCreator.initEventListeners();
