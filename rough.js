
  let todoarray = JSON.parse(localStorage.getItem("newtodoarray")) || [];
  let datearray = JSON.parse(localStorage.getItem("newdatearray")) || [];

  const addbtn = document.querySelector(".addbtn");
  const outputs = document.querySelector(".outputs");
  const resetbtn = document.querySelector(".reset");

  function add() {
    const newtask = document.querySelector(".newtask").value;
    const newdate = document.querySelector(".newdate").value;

    todoarray.push(newtask);
    datearray.push(newdate);
    

    
    localStorage.setItem("newtodoarray", JSON.stringify(todoarray));
    localStorage.setItem("newdatearray", JSON.stringify(datearray));
    newtask.value="";

    creator();
  }

  function creator() {
    outputs.innerHTML = ""; // Clear existing tasks first

    todoarray.forEach((task, i) => {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("output");
      taskDiv.innerHTML = 
      `
        <span class="t">${task}</span>
        <span class="d">${datearray[i]}</span>
        <button class="delete" data-index="${i}">Delete</button>
      `;
      outputs.appendChild(taskDiv);
    });
    document.querySelectorAll(".delete").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        todoarray.splice(index,1);
        datearray.splice(index,1);
        localStorage.setItem("newtodoarray",JSON.stringify(todoarray));
        localStorage.setItem("newdatearray",JSON.stringify(datearray));
        creator();
      });
    });
  }
  resetbtn.addEventListener("click", () => {
    if (confirm("Clear all tasks?")){
      todoarray = [];
      datearray = [];
      localStorage.clear();
      creator();
    }
  });
  addbtn.addEventListener("click", add);
  creator(); // Initial load