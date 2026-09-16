const list = document.querySelector("#list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");

const addedChapters = new Set();

button.addEventListener("click", (e) => {
  // prevent the default form behavior which reloads the page
  e.preventDefault();

  // Read the input value
  const myItem = input.value;
  if (myItem.trim() === "") return;
  input.value = "";

  const normalizedItems = myItem.toLowerCase();

  if(addedChapters.has(normalizedItems)){
    input.value = "";
    input.focus();
    alert("That Chapter is already on your list")
      return;
    
  }

  addedChapters.add(normalizedItems);

  // create element nodes, these just hang in memory not yet on the ducument
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  // Populate Content to the nodes
  listText.textContent = myItem;
  listBtn.textContent = "Delete";

  // Assemble nodes
  listItem.appendChild(listText);
  listItem.appendChild(listBtn);
  list.appendChild(listItem);

  // Node deletion logic
  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
    addedChapters.delete(normalizedItems)
  });
  input.value = "";
  input.focus();
});
