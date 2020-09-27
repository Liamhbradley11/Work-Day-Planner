$(document).ready(function() {
var presentDay = (moment().format("MMMM Do YYYY"));
$("currentDay").text(presentDay);
// console.log(presentDay)

//append the date and time to the top of the page
document.getElementById("currentDay").append(presentDay);

$(".saveBtn").click(function(){
    var value = ($(this).siblings(".desciption").val())
    var key = ($(this).parent().attr("id"))
    localStorage.setItem(key, value);
    console.log(key, value);
    })


//loop through past preset and future times
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


    //save to local storage 
    $("#h-9").val(localStorage.getItem("9am"));
    $("#h-10").val(localStorage.getItem("10am"));
    $("#h-11").val(localStorage.getItem("11am"));
    $("#h-12").val(localStorage.getItem("12pm"));
    $("#h-13").val(localStorage.getItem("11pm"));
    $("#h-14").val(localStorage.getItem("2pm"));
    $("#h-15").val(localStorage.getItem("3pm"));
    $("#h-16").val(localStorage.getItem("4pm"));
    $("#h-17").val(localStorage.getItem("5pm"));

 

});
