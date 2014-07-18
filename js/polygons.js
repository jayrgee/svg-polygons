var polygons = (function () {
  "use strict";

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

  function getWidth(n, r) {
    return (n % 2 == 0 && (n / 2) % 2 == 1) ? 2 * r : 2 * r * Math.sin((Math.PI / n) * (n + (n % 2) - 2) / 2);
  }

  function getHeight(n, r) {
    return n % 2 == 0 ? r * (2 * Math.cos(Math.PI / n)) : r * (1 + Math.cos(Math.PI / n));
  }

  function getOrigin(n, r) {
    var x = getWidth(n, r) / 2,
      y = n % 2 == 0 ? r * (Math.cos(Math.PI / n)) : r;

    return {"x": x, "y": y};
  }

  return { // exports
    getVerticies: getVerticies,
    getWidth: getWidth,
    getHeight: getHeight,
    getOrigin: getOrigin
  };

}());