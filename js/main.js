(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // animations
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
      $(".loader").fadeOut();
      $("#preloder").delay(200).fadeOut("slow");
  });

  //  partners
  $(document).ready(function(){
    $('.partners-logos').slick({
        
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover:true, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              infinite: true,
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});
  
  window.addEventListener("scroll", reveal);
})(jQuery);
