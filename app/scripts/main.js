console.log('\'Allo \'Allo!');


$(document).ready(function() {
    // Toggle menu on menu icon click
    $('#menuIcon').click(function () {
      $('.header').toggleClass('menu__open');
      $('body').toggleClass('menu__open noscroll');
    });

    // Close menu and scroll to section on link click
    $('.menu-link').click(function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      $('.header').removeClass('menu__open');
      $('body').removeClass('menu__open noscroll');

      // Scroll to the section
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800); // 800 is the speed of the animation in milliseconds
    });
  });


  $(document).ready(function() {
    $('.has-submenu > a').on('click', function(e) {
        e.preventDefault(); // Prevent the default action of the anchor tag

        // Close other submenus
        $('.submenu').not($(this).siblings('.submenu')).removeClass('show-submenu');

        // Toggle the clicked submenu
        $(this).siblings('.submenu').toggleClass('show-submenu');
    });

    // Close all submenus when clicking outside the menu items
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.header__menu-item').length) {
            $('.submenu').removeClass('show-submenu');
        }
    });
});



$(document).ready(function(){
  $('.accordion-header').click(function() {
      // Slide up all the content sections
      $('.accordion-content').slideUp();

      // If the next content section is not already visible, slide it down
      if(!$(this).next().is(':visible')) {
          $(this).next().slideDown();
      }
  });
});
