import { v4 as uuidv4 } from "uuid";
import { readLocalStorage, saveToLocalStorage } from "./localStorage";

const CRUD = () => {
  let projects = readLocalStorage();
  projects = !projects ? [] : projects;

  function createProject(projectName) {
    const id = uuidv4();
    const project = {
      id,
      name: projectName,
      tasks: [],
    };
    projects.push(project);
    saveToLocalStorage(projects);
    return id;
  }

  function findProject(projectId) {
    return projects.filter((proj) => proj.id === projectId);
  }

  function removeProject(projectId) {
    const projectIndex = projects.findIndex((proj) => proj.id === projectId);
    if (projectIndex !== -1) {
      const project = projects.splice(projectIndex, 1);
      saveToLocalStorage(projects);
      return project;
    }
    return null;
  }

  function findAllProjects() {
    return projects;
  }

  function deleteProject(projectId) {
    const index = projects.findIndex((project) => project.id === projectId);
    const project = projects.splice(index, 1);

    saveToLocalStorage(projects);

    return project;
  }

  function updateProject(projectId, name) {
    const project = findProject(projectId);
    project[0].name = name;

    saveToLocalStorage(projects);
  }

  function createTask(name, description, projectId, priority, duedate) {
    const project = findProject(projectId);
    const task = {
      id: uuidv4(),
      name,
      description,
      projectId,
      priority,
      duedate,
    };
    project[0].tasks.push(task);
    saveToLocalStorage(projects);
    return task;
  }

  function removeTask(projectId, taskId) {
    const project = findProject(projectId);
    const index = project[0].tasks.findIndex((task) => task.id === taskId);
    project[0].tasks.splice(index, 1);
    saveToLocalStorage(projects);
  }

  function updateTask(
    projectId,
    taskId,
    {
      name, description, priority, duedate,
    },
  ) {
    const project = findProject(projectId);
    const index = project[0].tasks.findIndex((task) => task.id === taskId);
    project[0].tasks[index].name = name;
    project[0].tasks[index].description = description;
    project[0].tasks[index].priority = priority;
    project[0].tasks[index].duedate = duedate;

    saveToLocalStorage(projects);
  }

  return {
    createProject,
    findProject,
    removeProject,
    findAllProjects,
    createTask,
    removeTask,
    updateTask,
    deleteProject,
    updateProject,
  };
};

const crud = CRUD();
export default crud;
