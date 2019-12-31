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

var current = 0;
var dom = 0;

function plusSlides(n) {
  var left, right;

  dom = Math.round(current);
  left = Math.floor(current);
  right = Math.ceil(current);

  if ( left == right ) {
    // The user is exactly on the element
    scroll = (dom + n) * width / speed;
  } else if ( dom == left ) {
    // The left side takes more of the screen
    if ( n == 1 ) {
      scroll = (dom + n) * width / speed;
    } else if ( n == -1 ) {
      scroll = dom * width / speed;
    }
  } else if ( dom == right ) {
    // The right side takes more of the screen
    if ( n == 1 ) {
      scroll = dom * width / speed;
    } else if ( n == -1 ) {
      scroll = (dom + n) * width / speed;
    }
  }

  parallax();
}

function parallax() {
  $('.layer').each(function() {
    $(this).css('transform', `translateX(${-scroll * $(this).data("speed")}px)`);
  });

  current = scroll * speed / width;
  dom = Math.round(current);
  
  if ( dom == 0 ) {
    $('.prev').hide();
  } else {
    $('.prev').show();
  }

  if ( dom == locs.length - 1 ) {
    $('.next').hide();
  } else {
    $('.next').show();
  }
}

$(document).ready(() => {
  $('.prev').hide();

  $('.scrolling-container').mousewheel((e, dir) => {
    e.preventDefault();

    if ( Math.abs(dir) > 1) dir = Math.sign(dir);
    if ( scroll - dir >= 0 && scroll - dir <= (locs.length - 1) * width / speed) scroll -= dir;

    parallax();
  });
});