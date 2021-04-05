var today = moment();
$("currentDay").text(today.format("dddd, MMMM Do"));
var tasks = {};
var taskDescriptionEl = document.querySelector("description")

// create task


 
// Allow for save button to save the text

// Get date to display on page

// Save to local server
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// Changing textarea to a p element
$(".task-description").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("task-control").val(text);
    
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".task-description").on("blur", "textarea", function() {
    var text = $(this).val().trim();

    var status = $(this).closets(".task-description").attr("id");

    tasks[status].text = text
    saveTasks();

    var taskP = $("<p>").class("description").text(text)

    $(this).replaceWith(taskP);
});

// save button clicked
$(".saveBtn").click(function() {
    var 
})

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: []
        };
    }

    $.each(task, function(list, arr) {
        arr.forEach(function(task) {
            createTask(task.text, task.time);
        });
    })
}

saveTasks();
