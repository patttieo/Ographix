
$(document).ready( function() {
  console.log('hello?');

  function openMenu() {
    $('.m-menu-default').hide();
    $('.m-menu-open-trigger').addClass("menu-open");
    $('.m-menu-open-trigger').show();
    $('.menu').addClass('menu--open');
  }
  function closeMenu() {
    console.log('cool?');
    $('.m-menu-default').show();
    $('.m-menu-open-trigger').removeClass("menu-open");
    $('.m-menu-open-trigger').hide();
    $('.menu').removeClass('menu--open');
  }
  $('.m-menu-open-trigger').on('click', function() {
    closeMenu();
  });  
  $('.m-menu-default').on('click', function() {
    openMenu();
  });

  $('.nav-link').on('click', function() {
    closeMenu();
    
  });
  $(".nav-link").click(function() {
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
            window.location.hash = target;
        } );
    });
  });
});


