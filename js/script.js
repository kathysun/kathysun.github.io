$(document).ready(function() {

  // scroll to top
  // button appearance
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $('#backToTop').fadeIn('slow');
    } else {
      $('#backToTop').fadeOut('slow');
    }
  });
  // scroll to top on button click
  $('#backToTop').click(function () {
    $('html, body').animate(
      { scrollTop: 0},
      'slow'
    );
  });

});
