var scroll = 0;
var locs = [
  "home",
  "science",
  "status",
  "sdg",
  "help",
  "tree-vias",
  "about"
]

function parallax() {
  $('.layer').each(function() {
    $(this).css('transform', `translateX(${-scroll * $(this).data("speed")}px)`);
  });
}

$(document).ready(() => {
  $('.scrolling-container').mousewheel((e, dir) => {
    e.preventDefault();

    if ( Math.abs(dir) > 1) dir = Math.sign(dir);
    if ( scroll - dir >= 0 ) scroll -= dir;

    parallax();

  });

  $(document).on('click', 'a', function(e) {
    loc = $(this).data("loc");
    scroll = locs.indexOf(loc) * $(window).width() / 60;

    parallax();

  })
});