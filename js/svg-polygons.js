/*global polygons*/

var svgPolygons = (function () {
  var xmlns = 'http://www.w3.org/2000/svg',
    padding = 1;

  function getPoints(n, r, dx, dy) {
    var coords = polygons.getVerticies(n, r, dx, dy),
      points = "",
      i;

    for (i = 0; i < coords.length; i++) {
      points += coords[i].x + "," + coords[i].y + " ";
    }

    return points.trim();
  }

  function getSvgElement(w, h) {
    //console.log('getSvgElement', w, h);
    var svg = document.createElementNS(xmlns, "svg");
    svg.setAttributeNS(null, "width", w);
    svg.setAttributeNS(null, "height", h);
    svg.setAttributeNS(null, "viewPort", "0 0 " + w + " " + h);
    return svg;
  }

  function getSvgPolygon(n, r, x, y) {
    var p = document.createElementNS(xmlns, "polygon");
    p.setAttributeNS(null, "points", getPoints(n, r, x, y));
    return p;
  }

  // public functions
  function getRegularPolygon(n, r, options) {
    var el,
      poly,
      _options = options || {},
      origin = polygons.getOrigin(n, r),
      p = _options.p || padding,
      w = _options.w || polygons.getWidth(n, r),
      h = _options.h || polygons.getHeight(n, r),
      x,
      y;

    x = _options.x || w / 2;
    y = _options.y || origin.y;

    w = w + 2 * p;
    h = h + 2 * p;
    x = x + p;
    y = y + p;

    el = getSvgElement(w, h);
    poly = getSvgPolygon(n, r, x, y);

    el.appendChild(poly);

    return el;
  }

  function getHexagon(r, options) {

    var n = 6,
      _options = options || {};

    _options.p = _options.p || padding;
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