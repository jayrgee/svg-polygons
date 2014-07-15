/*global polygons,svgCore*/

var svgPolygons = (function () {
  var defaultPadding = 1;

  function getPoints(n, r, dx, dy) {
    var coords = polygons.getVerticies(n, r, dx, dy),
      points = "",
      i;

    for (i = 0; i < coords.length; i++) {
      points += coords[i].x + "," + coords[i].y + " ";
    }

    return points.trim();
  }

  // public functions
  function getRegularPolygon(n, r, options) {
    var el,
      poly,
      _options = options || {style: {}},
      p = _options.style.strokeWidth || defaultPadding,
      w = _options.w || polygons.getWidth(n, r),
      h = _options.h || polygons.getHeight(n, r),
      origin = polygons.getOrigin(n, r),
      x = _options.x || w / 2,
      y = _options.y || origin.y;

    el = svgCore.getSvgElement(w + 2 * p, h + 2 * p);
    poly = svgCore.getSvgPolygon(getPoints(n, r, x + p, y + p), _options.style);

    el.appendChild(poly);

    return el;
  }

  function getHexagon(r, options) {

    var n = 6,
      _options = options || {style: {}};

    _options.style.strokeWidth = _options.style.strokeWidth || defaultPadding;
    _options.x = _options.x || r;
    _options.y = _options.y || r * Math.sqrt(3) / 2;
    _options.w = _options.w || 2 * r;
    _options.h = _options.h || r * Math.sqrt(3);

    return getRegularPolygon(n, r, _options);
  }

  return { // exports
    getHexagon: getHexagon,
    getRegularPolygon: getRegularPolygon
  };
}());