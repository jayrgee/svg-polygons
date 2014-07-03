var hex = (function () {

  function getCoords(n, r, dx, dy) {
    //console.log('getCoords');
    var i,
      coord = {},
      coords = [];
    for (i = 0; i < n; i++) {
      coord = {
        x: dx + r * Math.cos(2 * Math.PI * i / n),
        y: dy + r * Math.sin(2 * Math.PI * i / n)
      };
      coords.push(coord);
    }
    return coords;
  }

  return { // exports
    getCoords: getCoords
  };

}());