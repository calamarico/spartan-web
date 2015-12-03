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

function downSpartan(callback) {
  move(ESPARTANO)
    .translate(300, -18)
    .ease('in')
      .duration('0.4s')
      .end(callback);
}

function showEye() {
  $('#eye').css('display', 'inherit');
}

$(document).ready(function() {
  $('#circulo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd ' +
    ' oanimationend animationend', function(param) {
      downSpartan(detectIE() ? undefined : showEye);
    });
  $('#circulo').addClass('animated fadeIn');
});
