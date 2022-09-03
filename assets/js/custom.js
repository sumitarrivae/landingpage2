


jQuery(document).ready(function(){

  var $this = $('.faq-section-listing');
  if ($this.find(".accordion-set").length > 2) {
      $('.faq-section-listing').append('<button class="showMore"></button>');
  }
  
  // If more than 2 Education items, hide the remaining
  $('.faq-section-listing .accordion-set').slice(0,6).addClass('shown');
  $('.faq-section-listing .accordion-set').not('.shown').hide();
  $('.faq-section-listing .showMore').on('click',function(){
    $('.faq-section-listing .accordion-set').not('.shown').toggle(300);
    $(this).toggleClass('showLess');
  });

});


$(".toggle-password").click(function() {

  $(this).toggleClass("password-show");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// Only allow number keys + number pad

$('input[name="phone"]').keypress
(
    function(event)
    {
        if (event.keyCode == 46 || event.keyCode == 8)
        {
        //do nothing
        }
        else 
        {
            if (event.keyCode < 48 || event.keyCode > 57 ) 
            {
          event.preventDefault(); 
      } 
        }
    }
);



$('.masterhead-slider').slick({
  infinite: false,    
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  swipe: true,
});

$('.logo-slider-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  dots: false,
  autoplaySpeed: 2000,
   responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ]
});

$('.based-interiors-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  arrows: true,
  dots: false,
  autoplaySpeed: 2000,
   responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]
});

$('.customer-speak-slider').slick({
  centerMode: false,
  variableWidth: true,
  autoplay: true,
  arrows: false,
  dots: false,
});


// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.fixed-mobile-nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.fixed-mobile-nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.fixed-mobile-nav').removeClass('nav-up').addClass('nav-down');
        }
    }
  
    lastScrollTop = st;
}



function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

  if(visible($('.number-counter-item h2')))
    {
      if($('.number-counter-item h2').hasClass('counter-loaded')) return;
      $('.number-counter-item h2').addClass('counter-loaded');
      
      $('.number-counter-item h2').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
    }
})

const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);


$(document).ready(function() {
  $(".accordion-set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".accordion-set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".accordion-set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".accordion-set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});



$('.core-menu li a[href^="#"]').click(function(event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({scrollTop:target}, 500);
    event.preventDefault();
  });

function getTargetTop(elem){
  var id = elem.attr("href");
  var offset = 60;
  return $(id).offset().top - offset;
}


  $(window).scroll(function(e){
    isSelected($(window).scrollTop())
  });

var sections = $('.core-menu li a[href^="#"]');

function isSelected(scrolledTo){
   
  var threshold = 100;
  var i;

  for (i = 0; i < sections.length; i++) {
    var section = $(sections[i]);
    var target = getTargetTop(section);
     
    if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
      sections.removeClass("active");
      section.addClass("active");
    }

  };
}
