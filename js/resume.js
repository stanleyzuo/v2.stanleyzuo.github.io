(function($) {
  "use strict"; // Start of use strict

  // Rotate toggle icon on menu expand
  $(".nav-link, #bars").click(function(){
    if ($(".navbar-toggler").attr("aria-expanded") == "false") {
      $("#bars").addClass("fa-rotate-90 text-secondary");
    } else {
      $("#bars").removeClass("fa-rotate-90 text-secondary");
    }
  });

  //Remove icon rotate on navbar brand click
  $(".navbar-brand").click(function() {
    if ($(".navbar-toggler").attr("aria-expanded") == "true") {
      $("#bars").removeClass("fa-rotate-90 text-secondary");
    }
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
