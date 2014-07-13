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
  function getRegularPolygon(n, r, options, styles) {
    var el,
      poly,
      _styles = styles || {},
      _options = options || {},
      p = _styles.strokeWidth || defaultPadding,
      w = _options.w || polygons.getWidth(n, r),
      h = _options.h || polygons.getHeight(n, r),
      origin = polygons.getOrigin(n, r),
      x,
      y;

    x = _options.x || w / 2;
    y = _options.y || origin.y;

    w = w + 2 * p;
    h = h + 2 * p;
    x = x + p;
    y = y + p;

    el = svgCore.getSvgElement(w, h);
    poly = svgCore.getSvgPolygon(getPoints(n, r, x, y), _styles);

    el.appendChild(poly);

    return el;
  }

  function getHexagon(r, options, styles) {

    var n = 6,
      _styles = styles || {},
      _options = options || {};

    _styles.strokeWidth = _styles.strokeWidth || defaultPadding;
    _options.x = _options.x || r;
    _options.y = _options.y || r * Math.sqrt(3) / 2;
    _options.w = _options.w || 2 * r;
    _options.h = _options.h || r * Math.sqrt(3);

    return getRegularPolygon(n, r, _options, _styles);
  }

  return { // exports
    getHexagon: getHexagon,
    getRegularPolygon: getRegularPolygon
  };
}());