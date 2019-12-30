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

var curr, dom;

var width = $(window).width();
var speed = $('.content').data('speed');

function plusSlides(n) {
  var left, right;

left = Math.floor(current);
right = Math.ceil(current);

  if ( left == right ) {
    // The user is exactly on the element
    scroll = (dom + n) * width / speed;
    parallax();
  }

  // if ( n == 1 ) {
  //   if ( left == right ) {
  //     // The user is exactly on the element
  //   } else if ( dom == left ) {
  //     // The left is dominant
  //   } else if ( dom == right ) {
  //     // The right is more dominant
  //   } else {
  //     alert("Where the fuck are you");
  //   }
  // } else if ( n == -1 ) {
  //   if ( left == right ) {
  //     // The user is exactly on the element
  //   } else if ( dom == left ) {
  //     // The left is dominant
  //   } else if ( dom == right ) {
  //     // The right is more dominant
  //   } else {
  //     alert("Where the fuck are you");
  //   }
  // } else {
  //   alert("Invalid input");
  // }

  // if ( left == right ) {
  //   // The user is exactly on the element
  //   if ( n == -1 ) {

  //   }
  // }
}

function parallax() {
  $('.layer').each(function() {
    $(this).css('transform', `translateX(${-scroll * $(this)data("speed")}px)`);
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

  $('nav').on('click', 'a', function(e) {
    loc = $(this).data("loc");
    scroll = locs.indexOf(loc) * width / speed;

    parallax();
  });
});