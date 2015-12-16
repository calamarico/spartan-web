var ESPARTANO = '.espartano',
  CIRCULO = '.circulo';

function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  var edge = ua.indexOf('Edge/');

  if (msie > 0 || trident > 0 || edge > 0) {
    return true;
  } else {
    return false;
  }
}

function getCircleLeft() {
  return $('#circulo').offset().left;
}

function setEspartanoToCenter() {
  $('#espartano').css({left: getCircleLeft()});
}

function downSpartan(callback) {
  setEspartanoToCenter();
  move(ESPARTANO)
    .translateY(-18)
    .ease('in')
      .duration('0.4s')
      .end(callback);
}

function loadImages() {
  $('#i1').attr('src', 'styles/imgs/sparta1.png');
  $('#i2').attr('src', 'styles/imgs/sparta2.png');
  $('#i3').attr('src', 'styles/imgs/sparta3.png');
  $('#i4').attr('src', 'styles/imgs/sparta4.png');
  $('#i5').attr('src', 'styles/imgs/sparta5.png');
  $('#i6').attr('src', 'styles/imgs/sparta6.png');
  $('.image-gym').css('display', 'inherit');
}

function showEye() {
  $('#eye').css('display', 'inherit');
  loadImages();
}


$(document).ready(function() {
  $('#circulo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd ' +
    ' oanimationend animationend', function(param) {
      //downSpartan(detectIE() ? undefined : showEye);
      downSpartan(loadImages);
    });
  $('#circulo').addClass('animated fadeIn');
  $('a[rel^="prettyPhoto"]').prettyPhoto();
  $(window).resize(function() {
    setEspartanoToCenter();
  });
});
