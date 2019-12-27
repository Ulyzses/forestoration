var scroll = 0;
var curr = scroll;
var isScrolling = false;
var previous = 0;
var loop;
var locs = [
  "home",
  "science",
  "status",
  "sdg",
  "help",
  "tree-vias"
]

function parallax() {
  isScrolling = true;

  loop = setInterval(() => {
    dist = Math.abs(curr - scroll);
    speed = dist * 0.2;

    if ( dist < 0.2 ) {
      clearInterval(loop);
      isScrolling = false;

      $('.layer').each(function() {
        $(this).css('transform', `translateX(${-scroll * $(this).data("speed")}px)`);
        // $(this).css('left', -curr * $(this).data("speed"));
      });
      return;
    }

    console.log(speed);

    curr += (scroll < curr) ? -speed : speed;

    $('.layer').each(function() {
      $(this).css('transform', `translateX(${-curr * $(this).data("speed")}px)`);
      // $(this).css('left', -curr * $(this).data("speed"));
    });

  }, 10);
}

$(document).ready(() => {
  $('.scrolling-container').mousewheel((e, dir) => {
    if ( Math.abs(dir) > 1) dir = Math.sign(dir);

    // if ( previous !== dir ) {
    //   previous = dir;
    //   isScrolling = false;
    //   scroll = curr;
    //   // clearInterval(loop);
    // }

    if ( scroll - dir >= 0 ) scroll -= dir;
    if ( !isScrolling ) parallax();

  });

  $(document).on('click', 'a', function(e) {
    loc = $(this).data("loc");
    scroll = locs.indexOf(loc) * $(window).width() / 60;
    parallax();

  })
});