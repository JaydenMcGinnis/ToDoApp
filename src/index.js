import "./styles.css";
import { Project } from "./project.js";
import { Task } from "./task.js";
import { Rendor } from "./rendor.js";

const projectList = [];

const content = document.querySelector(".content");
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

const project1 = new Project("Test Project", "Test Description");
const project2 = new Project("Test Project", "Test Description");

projectList.push(project1);
projectList.push(project2);

project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

// console.log(project1);
