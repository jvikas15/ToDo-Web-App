document.addEventListener("DOMContentLoaded",function(){
  let todoarray=JSON.parse(localStorage.getItem("newtodo"))||[]
let datearray=JSON.parse(localStorage.getItem("newdate"))||[]

let addbtn=document.querySelector(".addbtn")
let newtask=document.querySelector(".newtask")
let newdate=document.querySelector(".newdate")
let outputs=document.querySelector(".outputs")
let resetbtn=document.querySelector(".reset")
creator();
function add(){
   
  todoarray.push(newtask.value)
  datearray.push(newdate.value)
  newtask.value="";
  newdate.value="";
  storage();
  creator();
}

  

function storage(){
  //string bana k array ko save kar lia
  let todostr=localStorage.setItem("newtodo",JSON.stringify(todoarray))
  let datestr=localStorage.setItem("newdate",JSON.stringify(datearray))
//string ko storage se uttha k array bana dia
  let gtodo=JSON.parse(localStorage.getItem("newtodo"))
  let gdate=JSON.parse(localStorage.getItem("newdate"))
}
  

function creator(){
  outputs.innerHTML=""
  for(let i=0;i<=todoarray.length-1;i++)
    {
      let output=document.createElement("div");
      output.classList.add("output");
      output.innerHTML=`<span class="t">${todoarray[i]}</span><span class="d">${datearray[i]}</span><button class="delete" data-index=${i}>Delete</button>`
      outputs.appendChild(output)
    }
    deletebtn()
}

function deletebtn(){
  //selects all elements as a nodelist as the class is similar for more than one elementin such case we attach data-index attribute with the element to iterate over it
  let deletebuttonNo=document.querySelectorAll(".delete")
  for(let i=0;i<deletebuttonNo.length;i++){
    deletebuttonNo[i].addEventListener("click",function(){
      buttonnumber=this.getAttribute("data-index")
      todoarray.splice(buttonnumber,1)
      datearray.splice(buttonnumber,1)
      localStorage.setItem("newtodo",JSON.stringify(todoarray))
      localStorage.setItem("newdate",JSON.stringify(datearray))
      creator()
    })
  }
}
addbtn.addEventListener("click",add)

function reset(){
  localStorage.clear()
}

resetbtn.addEventListener("click",reset)

})