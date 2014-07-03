/*global hex*/

var mySvg = (function () {
  var xmlns = 'http://www.w3.org/2000/svg';

  function getPoints(n, r, dx, dy) {
    var coords = hex.getCoords(n, r, dx, dy),
      points = "",
      i;

    for (i = 0; i < coords.length; i++) {
      points += coords[i].x + "," + coords[i].y + " ";
    }

    return points.trim();
  }

  function getSvgElement(w, h) {
    console.log('getSvgElement', w, h);
    var svg = document.createElementNS(xmlns, "svg");
    w = w + 2;
    h = h + 2;
    svg.setAttributeNS(null, "width", w);
    svg.setAttributeNS(null, "height", h);
    svg.setAttributeNS(null, "viewPort", "0 0 " + w + " " + h);
    return svg;
  }

  function getSvgPolygon(n, r, x, y) {
    var p = document.createElementNS(xmlns, "polygon");
    p.setAttributeNS(null, "points", getPoints(n, r, x + 1, y + 1));
    return p;
  }

  // public functions

  function getSvgHexagon(r, x, y) {
    console.log('getSvgHexagon', r, x, y);
    var w = r * 2,
      h = r * Math.sqrt(3),
      el = getSvgElement(w, h);

    var poly = getSvgPolygon(6, r, x, y);

    el.appendChild(poly);

    return el;
  }

  return { // exports
    getSvgHexagon: getSvgHexagon
  };
}());