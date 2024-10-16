import "./styles.css";
import { Project } from "./project.js";
import { Task } from "./task.js";
import { ProjectCreator } from "./projectCreator.js";

// Create Project list
const projectList = [];

// DOM content container
const content = document.querySelector(".content");

// Test tasks and Projects
const task1 = new Task(
  "This is a title",
  "This is a description",
  "This is a duedate",
  "High",
  false
);
const task2 = new Task(
  "This is a title",
  "This is a description",
  "This is a duedate",
  "High",
  false
);
const task3 = new Task(
  "This is a title",
  "This is a description",
  "This is a duedate",
  "High",
  false
);

const project1 = new Project("Todo Project", "Create a simple todo list");
const project2 = new Project(
  "Add task button",
  "Add a task button to each project object"
);

projectList.push(project1);
projectList.push(project2);

project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

// Initialize Project creator
const projectCreator = new ProjectCreator(projectList);
projectCreator.showProjects(projectList);
projectCreator.initEventListeners();
