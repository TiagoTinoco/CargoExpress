$(function () {

  $(window).resize(function () {
    setHeader()
  })

  $(document).scroll(function () {
    setHeader()
  })

  initMenu()
  initCustomersSlider()

  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now))
      }
    })
  })

  function setHeader() {
    const SCROLLED_CLASS = 'scrolled'
    const fixedHeaderElement = $('.fixed-header')

    if ($(window).scrollTop() > 180) {
      fixedHeaderElement.addClass(SCROLLED_CLASS)
    }
    else {
      fixedHeaderElement.removeClass(SCROLLED_CLASS)
    }
  }

  function initCustomersSlider() {
    if ($('.classes_slider').length) {
      var classesSlider = $('.classes_slider')
      classesSlider.owlCarousel(
        {
          items: 3,
          loop: true,
          autoplay: true,
          nav: false,
          dots: true,
          smartSpeed: 800,
          margin: 40,
          responsive:
          {
            0:
            {
              items: 1
            },
            768:
            {
              items: 2
            },
            992:
            {
              items: 4
            }
          }
        })
    }
  }

  function initMenu() {
    if ($('.menu').length && $('.hamburger').length) {
      var menu = $('.menu')
      var hamburger = $('.hamburger')
      var close = $('.menu_close')
      var door = $('.menu_door')
      var menuContent = $('.menu_content')
      var items = $('.menu_nav ul li')

      hamburger.click(function () {
        // Open menu
        TweenMax.to(menu, 0,
          {
            visibility: 'visible',
            opacity: 1
          })
        TweenMax.to(door, 1,
          {
            width: '50%',
            ease: Power3.easeOut
          })
        TweenMax.to(menuContent, 0.4,
          {
            opacity: 1,
            delay: 0.4
          })
        TweenMax.staggerFromTo(items, 1,
          {
            y: 10,
            opacity: 0,
            ease: Power2.easeInOut
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.2
          }, 0.08)
      })

      close.click(closeMenu)

      items.click(closeMenu)

      function closeMenu() {
        TweenMax.to(menuContent, 0.4,
          {
            opacity: 0
          })
        TweenMax.to(door, 1,
          {
            width: 0,
            ease: Power3.easeOut,
            delay: 0.6
          })
        TweenMax.to(menu, 0,
          {
            visibility: 'hidden',
            opacity: 0,
            delay: 1.5
          })
      }
    }
  }

})