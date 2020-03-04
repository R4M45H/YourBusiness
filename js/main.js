$("button").click(function() {
  $(".hamburger").toggleClass("focus");
  $(".content").toggleClass("show");
});
$("#links li a").click(function() {
  $(".content").removeClass('show'); 
  $(".hamburger").removeClass("focus"); 
   });
