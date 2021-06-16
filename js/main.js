$(document).ready(function () {
  $('.open-popup').click(function(){
    $('.popup-bg').toggleClass('active');

  });

  $('.close').click(function(){
    $('.popup-bg').removeClass('active');

  });

  $(document).keydown(function(e){
    if ($(".popup-bg").is(":visible") && (e.which == 27 || e.keyCode == 27)){
            $('.active').removeClass('active');
    }
});


$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".popup").length == 0) {
      $(".popup-bg").removeClass("active");
  }
});



$('.dropbtn').click(function(){
  $('.dropdown-content').toggleClass('show')


  $(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".menu").length == 0) {
        $(".dropdown-content").removeClass("show");
    }

    });

});


});
