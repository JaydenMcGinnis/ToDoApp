import "./styles.css";
import { Project } from "./project.js";
import { Note } from "./note.js";
import { Rendor } from "./rendor.js";

// TODO:
// - Project Creation
// - Note creation
// - Dom Manipulation

const content = document.querySelector(".content");
const note1 = new Note("title", "description", "dueDate", "Priority", false);
const project1 = new Project("Test Project", "Test Description");

project1.taskList.push(note1);

new Rendor(project1, content);
