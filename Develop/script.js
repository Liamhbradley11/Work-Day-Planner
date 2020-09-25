var presentDay = (moment().format("MMMM Do YYYY"));
$("currentDay").text(presentDay);
console.log(presentDay)

//append the date and time to the top of the page
document.getElementById("currentDay").append(presentDay);




// moment().format("MMMM Do YYYY")
// moment().format("LL");

// console.log("hello");

//add event listener to the save button
$(".saveBtn").click(function(){
    var value = ($(this).siblings(".desciption").val())
    var key = ($(this).parent().attr("id"))
    console.log(key, value);
    })

    //