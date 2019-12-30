var scroll = 0;
var locs = [
  "home",
  "science",
  "status",
  "sdg",
  "help",
  "tree-vias",
  "about"
];

var width = $(window).width();
var speed = $('.content').data('speed');

function parallax() {
  $('.layer').each(function() {
    $(this).css('transform', `translateX(${-scroll * $(this).data("speed")}px)`);
  });
}

$(document).ready(() => {
  $('.scrolling-container').mousewheel((e, dir) => {
    e.preventDefault();

    if ( Math.abs(dir) > 1) dir = Math.sign(dir);
    if ( scroll - dir >= 0 && scroll - dir <= (locs.length - 1) * width / speed) scroll -= dir;

    parallax();

  });

  $('nav').on('click', 'a', function(e) {
    loc = $(this).data("loc");
    scroll = locs.indexOf(loc) * width / speed;

    parallax();

  });
});