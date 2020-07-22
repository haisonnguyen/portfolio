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

// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
;(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){
           var H = $(this).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));
  
  
  
  $(".section-header").inViewport(function(px){
      if(px) $(this).addClass("triggeredCSS3") ;
  });