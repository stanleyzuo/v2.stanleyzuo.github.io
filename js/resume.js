(function($) {
  "use strict"; // Start of use strict

  // Rotate toggle icon on menu expand
  $("#navbarSupportedContent .nav-link, #bars").click(function(){
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

  // Toggle between moon and sun icons and dark stylesheet disabled attribute
  $("#dark").click(function(){
    $("#dark").toggleClass("fa-moon fa-sun");
    if ($("#dark-styles").attr("disabled")) {
      $("#dark-styles").removeAttr("disabled");
    } else {
      $("#dark-styles").attr("disabled", "disabled");
    }
  });
 
 // Progress bar function
 setTimeout(function() {
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

    /* Set the max scrollable area */
    max = docHeight - winHeight - 100;
    progressBar.attr('max', max);

    $(document).on('scroll', function(){
       value = $(window).scrollTop();
       progressBar.attr('value', value);
    });

    // Bind max and value to window resize
    $(window).on('resize', function() {
    winHeight = $(window).height(),
    docHeight = $(document).height();

    max = docHeight - winHeight - 100;
    progressBar.attr('max', max);

    value =  $(window).scrollTop();
    progressBar.attr('value', value);
  });
}, 100);

})(jQuery); // End of use strict


