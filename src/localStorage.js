const readLocalStorage = () => JSON.parse(localStorage.getItem("projects_ls"));

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("projects_ls", JSON.stringify(tasks));
};

export { readLocalStorage, saveToLocalStorage };
