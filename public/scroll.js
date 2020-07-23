/*** */
var body = document.body;
var nav = document.getElementsByClassName('navbar')[0];
body.paddingTop = nav.offsetHeight + 'px';

// detect scroll top or down
var scroll = document.getElementsByClassName('smart-scroll')[0];
if (scroll) {
    var last_scroll_top = 0;
    window.onscroll = function (event) {
        scroll_top = event.target.scrollingElement.scrollTop;

        if (scroll_top < last_scroll_top) {
            scroll.classList.add('scrolled-up')
            scroll.classList.remove('scrolled-down');
        }
        else {
            scroll.classList.add('scrolled-down')
            scroll.classList.remove('scrolled-up');

        }
        last_scroll_top = scroll_top;
    }
}

// // Plugin @RokoCB :: Return the visible amount of px
// // of any element currently in viewport.
// // stackoverflow.com/questions/24768795/
// ; (function ($, win) {
//     $.fn.inViewport = function (cb) {
//         return this.each(function (i, el) {
//             function visPx() {
//                 var H = $(this).height(),
//                     r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
//                 return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
//             } visPx();
//             $(win).on("resize scroll", visPx);
//         });
//     };
// }(jQuery, window));


// $(".section-header").inViewport(function (px) {
//     if (px) $(this)
// });

// $(".row-icon").inViewport(function (px) {
//     if (px) $(this).addClass("triggeredCSS3");
// });

// $(".translate-left, .translate-left-full, .translate-right, .translate-right-full").inViewport(function (px) {
//     if (px) $(this).addClass("triggeredCSS3");
// });

var $animation_elements = $('.translate-left, .translate-left-full, .translate-right, .translate-right-full');
var $window = $(window);

function check_if_in_view() {
    console.log("scrolling")
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass("triggeredCSS3");
      }
    });
  }


//   $window.on('scroll resize', check_if_in_view);

  $window.scroll(check_if_in_view);
