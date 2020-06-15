$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find(".link");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };

  var accordion = new Accordion($("#accordion"), false);

  // Sidebar
      $("ul.main-menu li").click(function (e) {
        e.preventDefault();

        if ($(this).siblings("li").find("ul.sidebar__submenu:visible").length) {
          $("ul.sidebar__submenu").slideUp("normal");
        }
        $(this).find("ul.sidebar__submenu").slideToggle("normal");
      });

      var t1 = new TimelineMax({ paused: true });

      t1.to(".menu", 0.3, {
        autoAlpha: 1,
      });

      t1.staggerFrom(
        ".main-menu li a:not(.sidebar__submenu li a)",
        1,
        {
          opacity: 0,
          y: 10,
          ease: Power3.easeInOut,
        },
        0.1
      );

      t1.from(".sidebar__submenu", 0.3, {
        autoAlpha: 0,
      });

      t1.reverse();

      $(document).on("click", ".menu-btn", function () {
        t1.reversed(!t1.reversed());
      });

      $(document).on("click", ".close-menu", function () {
        t1.reversed(!t1.reversed());
      });
  
  // Hamburger
  $(".hamburger").click(function () {
    $(this).toggleClass("on");
    $(".sidebar").toggleClass("active");
    $(".nav-menu").toggleClass("off");
    $(".aside-panel").toggleClass("off");
    $(".aside-panel__controls").toggleClass("off");
    $(".aside-panel__items").toggleClass("off");
    $(".about__slider-wrapper").toggleClass("off");
  });

  // Cursor
  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientX + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });

  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }

  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }

  s();

  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }

  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }


 // Animation
  new WOW().init();
});
