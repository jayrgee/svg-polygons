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
  function getRegularPolygon(n, r, x, y, w, h) {
    var el,
      poly;

    x = x || r;
    y = y || n % 2 == 0 ? r * (Math.cos(Math.PI / n)) : r;
    w = w || 2 * r;
    h = h || n % 2 == 0 ? r * (2 * Math.cos(Math.PI / n)) : r * (1 + Math.cos(Math.PI / n));

    el = getSvgElement(w, h);
    poly = getSvgPolygon(n, r, x, y, w, h);

    el.appendChild(poly);

    return el;
  }

  function getHexagon(r, x, y, w, h) {

    x = x || r;
    y = y || r * Math.sqrt(3) / 2;
    w = w || 2 * r;
    h = h || r * Math.sqrt(3);

    return getRegularPolygon(6, r, x, y, w, h);
  }

  return { // exports
    getHexagon: getHexagon,
    getRegularPolygon: getRegularPolygon
  };
}());