console.log("hello");

$(".saveBtn").click(function(){
    var value = ($(this).siblings(".desciption").val())
    var key = ($(this).parent().attr("id"))
    console.log(key, value);
    })
