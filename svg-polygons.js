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
  function getRegularPolygon(n, r, x, y) {
    var w = r * 2,
      h = r * Math.sqrt(3),
      el = getSvgElement(w, h);

    var poly = getSvgPolygon(n, r, x, y);

    el.appendChild(poly);

    return el;
  }

  function getHexagon(r, x, y) {
    return getRegularPolygon(6, r, x, y);
  }

  return { // exports
    getHexagon: getHexagon,
    getRegularPolygon: getRegularPolygon
  };
}());