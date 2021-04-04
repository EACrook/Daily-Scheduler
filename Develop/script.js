var today = moment();
var tasks = {};
var taskDescriptionEl = document.querySelector("description")

 
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

displayDateTime();