var presentDay = (moment().format("MMMM Do YYYY"));
$("currentDay").text(presentDay);
console.log(presentDay)

//append the date and time to the top of the page
document.getElementById("currentDay").append(presentDay);


//add event listener to the save button
$(".saveBtn").click(function(){
    
    
    event.preventDefault();
    var value = ($(this).siblings(".desciption").val())
    var key = ($(this).parent().attr("id"))
    localStorage.setItem(key, value);
    
    
    console.log(key, value);
    })





   