function addWorkout() {
    var workoutInput = document.getElementById("workout");
    var workout = workoutInput.value;
    
    if (workout !== "") {
      var workoutList = document.getElementById("workoutList");
      var listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(workout));
      workoutList.appendChild(listItem);
      workoutInput.value = "";
    }
  }var days = [];
  var userName = "";
  
  function addWorkout() {
    var workoutInput = document.getElementById("workout");
    var workout = workoutInput.value;
    var selectedDay = document.getElementById("days").value;
  
    if (workout !== "" && selectedDay !== "") {
      var workoutList = document.getElementById("workoutList");
      var listItem = document.createElement("li");
      var removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.onclick = function() {
        removeWorkout(selectedDay, workout);
      };
      listItem.innerHTML = workout + " (" + selectedDay + ")";
      listItem.appendChild(removeButton);
      workoutList.appendChild(listItem);
      workoutInput.value = "";
    }
  }
  
  function addDay() {
    var daySelect = document.getElementById("days");
    var newDay = prompt("Enter a new day:");
  
    if (newDay !== "") {
      days.push(newDay);
      var option = document.createElement("option");
      option.value = newDay;
      option.innerHTML = newDay;
      daySelect.appendChild(option);
    }
  }
  
  function removeWorkout(day, workout) {
    var workoutList = document.getElementById("workoutList");
    var items = workoutList.getElementsByTagName("li");
  
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.innerHTML.includes(day) && item.innerHTML.includes(workout)) {
        workoutList.removeChild(item);
        break;
      }
    }
  }
  
  function askUserName() {
    userName = prompt("Please enter your name:");
  
    if (userName !== "") {
      var today = new Date().toLocaleDateString("en-US", { weekday: "long" });
      var reminder = document.getElementById("reminder");
      reminder.innerHTML = "Hello, " + userName + "! Don't forget to track your workouts for " + today +  "And remeber to be consistent and be focus ." ;
    }
  }
  
  askUserName();