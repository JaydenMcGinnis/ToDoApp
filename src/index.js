import "./styles.css";
import { Project } from "./rendorProject";
import { RendorProject } from "./domChanger";

// Components:
// - Project Creation
// - Note creation
// - Dom Manipulation

const content = document.querySelector(".content");
const project1 = new Project("title", "description", "dueDate", "Priority");
const project2 = new Project("title2", "description2", "dueDate2", "Priority2");

new RendorProject(project1, content);
