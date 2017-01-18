$(document).ready(function(){
  $('.bxslider').bxSlider();
  $('.toggle-button').on('click', function() {
      $(this).find('.toggle-menu').toggle();
  });
});
