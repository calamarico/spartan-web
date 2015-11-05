$(document).ready(function() {
  var ESPARTANO = '.espartano',
    CIRCULO = '.circulo';

    move(ESPARTANO)
      .translate(300, -16)
      .ease('in')
      .duration('0.4s')
      .end();
});