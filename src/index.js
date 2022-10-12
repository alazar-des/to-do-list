import crud from "./logic";
import displayProjects from "./dom";
import "./styles.css";

const projects = crud.findAllProjects();
displayProjects(projects);
