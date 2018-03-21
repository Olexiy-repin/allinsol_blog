(() => {
  $('.cross').hide();
  $('.menu').hide();
  $('.hamburger').click(() => {
    $('.menu').slideToggle('slow', () => {
      $('.hamburger').hide();
      $('.cross').show();
    });
  });

  $('.cross').click(() => {
    $('.menu').slideToggle('slow', () => {
      $('.cross').hide();
      $('.hamburger').show();
    });
  });
})();
