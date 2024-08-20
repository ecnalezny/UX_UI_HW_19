//Alert-- going to new page
$(document).ready(function(){
    $("#b1").click(function(){
        alert("You are leaving this page!");
    });
});

//PRE LOADER
function fade(){
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 2000);


