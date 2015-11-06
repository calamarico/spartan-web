var ESPARTANO = '.espartano',
  CIRCULO = '.circulo';

function downSpartan(callback) {
  move(ESPARTANO)
    .translate(300, -16)
    .ease('in')
      .duration('0.4s')
      .end(callback);
}

$(document).ready(function() {
  downSpartan();
});