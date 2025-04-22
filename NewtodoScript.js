let todoarray=JSON.parse(localStorage.getItem("newtodoarray"))||[];
let datearray=JSON.parse(localStorage.getItem("newdatearray"))||[];

let addbtn=document.querySelector(".addbtn")
let newinput=document.querySelector(".newtask")
let newdate=document.querySelector(".newdate")
let outputs=document.querySelector(".outputs")
let resetbtn=document.querySelector(".reset")
outputCreator()
function add(){
  //first will take the inputs push it to the arrays then saves them into the local storage and then parses the array and claer out all rows and recreate all row elements according to parsed array value;
  todoarray.push(newinput.value);
  datearray.push(newdate.value);
 
storage();
outputCreator();


  newinput.value="";
  newdate.value="";
}

function storage(){
   //convert to strings and save in ls using json
   localStorage.setItem("newtodoarray",JSON.stringify(todoarray));
   localStorage.setItem("newdatearray",JSON.stringify(datearray));
   //fetching the saved string from the local storage
  
   //parse string to object again to use it
   JSON.parse(localStorage.getItem("newtodoarray"))
   JSON.parse(localStorage.getItem("newdatearray"))
   
}
//this will create a div output which will have three elements t as task d as date and delete button with nodelist of elements
//this output will then be inserted into the main outputs div as a row card

function outputCreator(){

  outputs.innerHTML=""; //first will remove all cards then recreate the whole array again
  //create a div dynamically and add elements into it
  
  //creates a output div and adds three element<----this output will be just a row in outputs
  for(i=0;i<=todoarray.length-1;i++)
{
let output=document.createElement("div")//now its in output variable so no need to select
output.classList.add("output");

output.innerHTML=`
<span class="t">${todoarray[i]}</span><span class="d">${datearray[i]}</span><button class="delete" data-index=${i}>Delete</button>`
outputs.appendChild(output)
}
deletebtnfn()
  
}
function deletebtnfn(){

  let deletebtn=document.querySelectorAll(".delete"); //its a nodelist so have index 
  for(i=0;i<deletebtn.length;i++){
  deletebtn[i].addEventListener("click",function removeelement(){
    deletebtn=this.getAttribute("data-index");
    todoarray.splice(deletebtn,1);
    datearray.splice(deletebtn,1)
    storage()//storage update
    outputCreator()//recreate inputs inside outputs div
  })
  }


}


function reset(){
  localStorage.clear();
  outputCreator();
}

addbtn.addEventListener("click",add)

resetbtn.addEventListener("click",reset)
storage()