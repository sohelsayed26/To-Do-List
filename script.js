function newElement() {
    const  inputValue = document.getElementById("myInput").value; 
    var listContainer = document.getElementById("myUL");
    let li = document.createElement("li")
    
    if(inputValue === ''){
        alert("You must write something")
    }
    else{
    
        li.innerHTML = inputValue; 
       listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    document.getElementById("myInput").value = "";
    saveData();
  
}

function clearAllTasks() {
    var listContainer = document.getElementById("myUL");
    listContainer.innerHTML = "";
    saveData();
  }

    var listContainer = document.getElementById("myUL");
    listContainer.addEventListener("click", function(e){
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer,innerHTML)
}









