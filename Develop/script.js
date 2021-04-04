var today = moment();
$("currentDay").text(today.format("dddd, MMMM Do"));
var tasks = {};
var taskDescriptionEl = document.querySelector("description")

// create task
var createTaskEl = function(taskDataObj) {
    var inputTaskEl = document.createElement("input");
    inputTaskEl.className = "created-task col-10";
    inputTaskEl.setAttribute("type", "text")
    taskDescriptionEl.appendChild(displayTaskEl);
}

 
// Allow for save button to save the text

// Get date to display on page

// Save to local server
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

var loadTasks = function () {
    localStorage.getItem("tasks", tasks);
    console.log(loadTasks);
}

createTaskEl();
displayDateTime();