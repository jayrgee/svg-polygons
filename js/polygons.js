var polygons = (function () {

  function getVerticies(n, radius, dx, dy) {
    var i,
      coord = {},
      coords = [],
      extAngle = 2 * Math.PI / n,
      di = n % 2 == 0 ? 0.5 : 0; // di rotates co-ords so base edge always horizontal

    for (i = 0; i < n; i++) {
      coord = {
        x: dx + radius * Math.sin(extAngle * (i + di)),
        y: dy - radius * Math.cos(extAngle * (i + di))
      };
      coords.push(coord);
    }
    return coords;
  }

  return { // exports
    getVerticies: getVerticies
  };

}());