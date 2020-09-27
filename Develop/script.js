


var presentDay = (moment().format("MMMM Do YYYY"));
$("currentDay").text(presentDay);
document.getElementById("currentDay").append(presentDay);

//llop through past preset and future times
$(document).ready(function() {
for (var i = 9; i < 18; i++){
   if (i === moment().hour()){
        $("#h-" + i).removeClass("past, present, future").addClass("present");
   } else if (i < moment().hour()) {
        $("#h-" + i).removeClass("past, present, future").addClass("past");
    } else {
        $("#h-" + i).removeClass("past, present, future").addClass("future");
        }
     }

    }, 1000);
// console.log(presentDay)

//append the date and time to the top of the page

//time-block

//add event listener to the save button
$(".saveBtn").click(function(){
    
    
    event.preventDefault();
    var value = ($(this).siblings(".desciption").val())
    var key = ($(this).parent().attr("id"))
    localStorage.setItem(key, value);
    
    
    console.log(key, value);
    })





