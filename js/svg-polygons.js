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
    w = w + 2 * padding;
    h = h + 2 * padding;
    svg.setAttributeNS(null, "width", w);
    svg.setAttributeNS(null, "height", h);
    svg.setAttributeNS(null, "viewPort", "0 0 " + w + " " + h);
    return svg;
  }

  function getSvgPolygon(n, r, x, y) {
    var p = document.createElementNS(xmlns, "polygon"),
      dx = padding,
      dy = padding;
    p.setAttributeNS(null, "points", getPoints(n, r, x + dx, y + dy));
    return p;
  }

  // public functions
  function getRegularPolygon(n, r, options) {
    var el,
      poly,
      _options = options || {},
      w = _options.w || (n % 2 == 0 && (n / 2) % 2 == 1) ? 2 * r : 2 * r * Math.sin((Math.PI / n) * (n + (n % 2) - 2) / 2),
      h = _options.h || n % 2 == 0 ? r * (2 * Math.cos(Math.PI / n)) : r * (1 + Math.cos(Math.PI / n)),
      x = _options.x || w / 2,
      y = _options.y || n % 2 == 0 ? r * (Math.cos(Math.PI / n)) : r;

    el = getSvgElement(w, h);
    poly = getSvgPolygon(n, r, x, y);

    el.appendChild(poly);

    return el;
  }

  function getHexagon(r, options) {

    var n = 6,
      _options = options || {};

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