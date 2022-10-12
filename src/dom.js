import crud from "./logic";
import Edit from "./asset/pencil-outline.svg";
import Delete from "./asset/trash-can-outline.svg";
import Dots from "./asset/dots-horizontal.svg";

function handleAddTask() {
  document.querySelector(".add-task-form").classList.add("show");
  document.querySelector(".popup-hidder").classList.add("show");
}

function handleAddProject() {
  document.querySelector(".add-project-form").classList.add("show");
  document.querySelector(".add-project-form form input").focus();
  document.querySelector(".popup-hidder").classList.add("show");
}

function handleCancel() {
  document.querySelector(".add-task-form").classList.remove("show");
  document.querySelector(".update-task-form").classList.remove("show");
  document.querySelector(".add-project-form").classList.remove("show");
  document.querySelector(".update-project-form").classList.remove("show");
  document.querySelector(".popup-hidder").classList.remove("show");
  document.querySelector(".projects li ul")?.classList.remove("show");
  document.querySelector(".dots")?.classList.remove("show");
}

function handleToggleMenu() {
  document.querySelector(".main").classList.toggle("hidde");
  document.querySelector(".menu").classList.toggle("hidde");
}

function updateProject(e, li) {
  e.preventDefault();
  const inputs = document.querySelector(".update-project-form form").elements;
  crud.updateProject(li.getAttribute("_id"), inputs.projectName.value);
  li.children[0].innerText = inputs.projectName.value;
  handleCancel();
}

function resetForm(e) {
  e.target.reset();
  handleCancel();
}

function updateTask(e, task, taskInfo) {
  e.preventDefault();
  const inputs = document.querySelector(".update-task-form form").elements;
  taskInfo.children[0].innerText = inputs.taskName.value;
  taskInfo.children[1].innerText = inputs.description.value;
  taskInfo.children[2].innerText = inputs.duedate.value;
  taskInfo.children[3].innerText = inputs.priority.value;
  crud.updateTask(task.projectId, task.id, {
    name: inputs.taskName.value,
    description: inputs.description.value,
    priority: inputs.priority.value,
    duedate: inputs.duedate.value,
  });
  resetForm(e);
}

function handleUpdateTask(task, taskInfo) {
  const updateTaskForm = document.querySelector(".update-task-form form");
  updateTaskForm.addEventListener("submit", (e) => updateTask(e, task, taskInfo));
  document.querySelector(".update-task-form").classList.add("show");
  document.querySelector(".popup-hidder").classList.add("show");
}

function handleEditTask(task, taskInfo) {
  const inputs = document.querySelector(".update-task-form form").elements;
  inputs.taskName.value = task.name;
  inputs.description.value = task.description;
  inputs.priority.value = task.priority;
  inputs.duedate.value = task.duedate;
  handleUpdateTask(task, taskInfo);
}

function handleDeleteTask(task, projectId) {
  crud.removeTask(projectId, task.getAttribute("._id"));
  document.querySelector(".task-container").removeChild(task);
}

function appendTask(task) {
  const taskCont = document.createElement("div");
  taskCont.classList.add("task");
  taskCont.setAttribute("_id", task.id);

  const check = document.createElement("div");
  check.classList.add("check");

  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");

  const taskName = document.createElement("p");
  taskName.classList.add("task-name");
  taskName.innerText = task.name;
  taskInfo.appendChild(taskName);

  const taskDesc = document.createElement("p");
  taskDesc.classList.add("task-description");
  taskDesc.innerText = task.description;
  taskInfo.appendChild(taskDesc);

  const taskDuedate = document.createElement("p");
  taskDuedate.classList.add("task-duedate");
  taskDuedate.innerText = task.duedate;
  taskInfo.appendChild(taskDuedate);

  const taskPriority = document.createElement("p");
  taskPriority.classList.add("task-priority");
  taskPriority.innerText = task.priority;
  taskInfo.appendChild(taskPriority);

  const update = document.createElement("div");
  update.classList.add("update");
  const edit = new Image();
  edit.src = Edit;
  edit.addEventListener("click", () => handleEditTask(task, taskInfo));
  update.appendChild(edit);

  const deleteT = new Image();
  deleteT.src = Delete;
  deleteT.addEventListener("click", () => handleDeleteTask(taskCont, task.projectId));
  update.appendChild(deleteT);

  taskCont.appendChild(check);
  taskCont.appendChild(taskInfo);
  taskCont.appendChild(update);

  taskCont.addEventListener("mouseover", () => update.classList.add("show"));
  taskCont.addEventListener("mouseout", () => update.classList.remove("show"));

  return taskCont;
}

function displayTasks(projectName, tasks) {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const h2 = document.createElement("h2");
  h2.innerText = projectName;

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  tasks.forEach((task) => taskContainer.appendChild(appendTask(task)));

  mainContainer.appendChild(h2);
  mainContainer.appendChild(taskContainer);

  const main = document.querySelector(".main");
  main.replaceChildren(mainContainer);
}

function handleProjectTasks(projectId) {
  const project = crud.findProject(projectId)[0];
  if (project) displayTasks(project.name, project.tasks);
}

function handleSubmitTask(e) {
  e.preventDefault();
  const inputs = document.querySelector(".add-task-form form").elements;
  const task = crud.createTask(
    inputs.taskName.value,
    inputs.description.value,
    inputs.project.value,
    inputs.priority.value,
    inputs.duedate.value,
  );
  document.querySelector(".task-container").appendChild(appendTask(task));
  resetForm(e);
}

function handleInbox() {
  displayTasks("Inbox", []);
}

function handleToday() {
  displayTasks("Today", []);
}

function handleUpcomming() {
  displayTasks("Upcomming", []);
}

function handleDeleteProject(e, li) {
  crud.deleteProject(li.getAttribute("._id"));
  handleToday();
  document.querySelector(".projects ul").removeChild(li);
  handleCancel();
  e.stopPropagation();
}

function handleEditProjectForm(li) {
  const updateProjectForm = document.querySelector(".update-project-form form");
  updateProjectForm.addEventListener("submit", (e) => updateProject(e, li));
  document.querySelector(".update-project-form").classList.add("show");
  document.querySelector(".update-project-form form input").focus();
  document.querySelector(".popup-hidder").classList.add("show");
}

function handleEditProject(e, li) {
  const inputs = document.querySelector(".update-project-form form").elements;
  inputs.projectName.value = li.children[0].innerText;
  handleEditProjectForm(li);
  e.stopPropagation();
}

function handleUpdate(e, li) {
  const edit = document.createElement("li");
  const editIcon = new Image();
  editIcon.src = Edit;
  const editText = document.createElement("li");
  editText.innerText = "Edit";
  edit.appendChild(editIcon);
  edit.appendChild(editText);
  edit.addEventListener("click", () => handleEditProject(e, li));

  const deleteP = document.createElement("li");
  const deleteIcon = new Image();
  deleteIcon.src = Delete;
  const deleteText = document.createElement("li");
  deleteText.innerText = "Delete";
  deleteP.appendChild(deleteIcon);
  deleteP.appendChild(deleteText);
  deleteP.addEventListener("click", () => handleDeleteProject(e, li));

  const ul = document.createElement("ul");
  ul.appendChild(edit);
  ul.appendChild(deleteP);

  li.appendChild(ul);
  document.querySelector(".projects li ul").classList.add("show");
  document.querySelector(".popup-hidder").classList.add("show");

  e.stopPropagation();
}

function addProject(projectId, projectName) {
  const li = document.createElement("li");
  li.setAttribute("_id", projectId);

  const span = document.createElement("span");
  span.innerText = projectName;
  span.classList.add("project-name");
  span.addEventListener("click", () => handleProjectTasks(projectId));
  li.appendChild(span);
  const dots = new Image();
  dots.classList.add("dots");
  dots.src = Dots;
  li.appendChild(dots);
  dots.addEventListener("click", (e) => handleUpdate(e, li));

  document.querySelector(".projects ul").appendChild(li);

  li.addEventListener("mouseover", () => dots.classList.add("show"));
  li.addEventListener("mouseout", () => dots.classList.remove("show"));

  const select = document.querySelector(".add-task-form .project-info select");
  const option = document.createElement("option");
  option.setAttribute("value", projectId);
  option.innerText = projectName;
  select.appendChild(option);
}

function handleSubmitProject(e) {
  e.preventDefault();
  const inputs = document.querySelector(".add-project-form form").elements;
  const projectId = crud.createProject(inputs.projectName.value);

  addProject(projectId, inputs.projectName.value);
  resetForm(e);
}

function displayProjects(projects) {
  projects.forEach((proj) => addProject(proj.id, proj.name));
}

(function dom() {
  handleToday();

  const home = document.querySelector(".home");
  home.addEventListener("click", handleToday);

  const addTask = document.querySelector(".add-task");
  addTask.addEventListener("click", handleAddTask);

  const cancel = document.querySelectorAll(".cancel");
  cancel.forEach((c) => c.addEventListener("click", handleCancel));

  const toggleMenu = document.querySelector(".toggle-menu");
  toggleMenu.addEventListener("click", handleToggleMenu);

  const add = document.querySelector(".add");
  add.addEventListener("click", handleAddProject);

  const inbox = document.querySelector(".inbox");
  inbox.addEventListener("click", handleInbox);

  const today = document.querySelector(".today");
  today.addEventListener("click", handleToday);

  const upcomming = document.querySelector(".upcomming");
  upcomming.addEventListener("click", handleUpcomming);

  const addTaskForm = document.querySelector(".add-task-form form");
  addTaskForm.addEventListener("submit", handleSubmitTask);

  const addProjectForm = document.querySelector(".add-project-form form");
  addProjectForm.addEventListener("submit", handleSubmitProject);

  const hiddePopup = document.querySelector(".popup-hidder");
  hiddePopup.addEventListener("click", handleCancel);
}());

export default { displayProjects };
