$("button").click(function() {
  $(".hamburger").toggleClass("focus");
  $(".content").toggleClass("show");
});
$("#links li a").click(function() {
  $(".content").removeClass('show'); 
  $(".hamburger").removeClass("focus"); 
   });


   wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  }
  );
  wow.init();