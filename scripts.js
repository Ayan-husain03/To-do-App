const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    if (inputBox.value === "") {
        alert("You must Write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
})

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

let saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML)
}

(function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}());
    

