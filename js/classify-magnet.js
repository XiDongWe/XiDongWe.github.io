$(document).ready(function() {
    $('.magnet-item').click(function() {
      var categoryLink = $(this).find('a').attr('href');
      window.location.href = categoryLink;
    });
  });