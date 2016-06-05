// alert('hi');
$('document').ready(function() {
  $('.main-content #left-menu-toggler').bind('click', function() {
    $('.left-menu').toggleClass('left-toggling');
    $('.main-content').toggleClass('untoggle-left');
  });

  $('.main-content #right-menu-toggler').bind('click', function() {
    $('.right-menu').toggleClass('right-toggling');
    $('.main-content').toggleClass('untoggle-right');
  });
});
