var tasks = loadTasks();
saveTasks()

// ...start of color for time...
function colorTimeApt() {
    // ... sets the moment JS time to the var currentTime
    var currentTime = moment()
    // ...sets currentDay to text of day, month, date, hour & min and am or pm...
    $("#currentDay").text(currentTime.format("dddd, MMMM Do hh:mm a"));
    
    
    currentHour = currentTime.hour()

    $('.description').each(function () {
        //...of the html elements with description class, take their IDs and split on hyphen to grab the 2nd element and set it to hourString
        var hourString = $(this).attr("id").split('-')[1];
        // sets the hourString as an integer to assign it to hourInt
        var hourInt = parseInt(hourString);
        
        // if the number grabbed hourString/hourInt is less than the current time (currentHour) add the class past and remove the other two classes
        if (hourInt < currentHour) {
            $(this).removeClass("present")
            $(this).removeClass("future")
            $(this).addClass("past")
        }
        // if the int is equal to the current time, assign present class and remove other two classes 
        else if (hourInt === currentHour) {
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClass("present")
        }
        // if the int is anything else, assign the future class and remove other two classes
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
//..call/run function
colorTimeApt();
//.. sets above function to rerun ever 5 seconds
setInterval(colorTimeApt, 5 * 1000)

// Save to local server
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// save button clicked
$(".saveBtn").click(function () {
    // of the button get the previous textarea
    var valueOfWhatWasSaved = $(this).prev("textarea").val();
    // of the button get the previous textarea id
    var idOfTextArea = $(this).prev("textarea").attr("id")
    // from the textarea id, split by hyphen to retrieve 2nd value which will be the # 
    var time = idOfTextArea.split('-')[1]

    // update value of tasks at the time to be the value of the text area
    tasks[time] = valueOfWhatWasSaved

    // call the save function
    saveTasks()
})

function loadTasks() {
    //...if there is something in localStorage, get it and assign to the currentTasks var
    var currentTasks = localStorage.getItem("tasks");
    //..if nothing is saved to localStorage, return blank strings
    if (currentTasks === null) {
        return {
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: ""
        };
    }
    //..set the value in current task as an object
    currentTasks = JSON.parse(currentTasks);
    // in means object of means array
    for (var time in currentTasks) {
        createTask(time, currentTasks[time]);
    }

    return currentTasks;
}


function createTask(time, text) {
    $(`#time-${time}`).val(text)
}