/*global polygons*/

var svgCore = (function () {
  var xmlns = 'http://www.w3.org/2000/svg';

  function getSvgElement(w, h) {
    //console.log('getSvgElement', w, h);
    var e = document.createElementNS(xmlns, "svg");
    e.setAttributeNS(null, "width", w);
    e.setAttributeNS(null, "height", h);
    e.setAttributeNS(null, "viewPort", "0 0 " + w + " " + h);
    return e;
  }

  function getSvgCircle(cx, cy, r) {
    var e = document.createElementNS(xmlns, "circle");
    e.setAttributeNS(null, "cx", cx);
    e.setAttributeNS(null, "cy", cy);
    e.setAttributeNS(null, "r", r);
    return e;
  }

  function getSvgLine(x1, y1, x2, y2, style) {
    var e = document.createElementNS(xmlns, "line");
    e.setAttributeNS(null, "x1", x1);
    e.setAttributeNS(null, "y1", y1);
    e.setAttributeNS(null, "x2", x2);
    e.setAttributeNS(null, "y2", y2);
    if (style) {
      if (style.stroke) { e.setAttributeNS(null, "stroke", style.stroke); }
      if (style.strokeWidth) { e.setAttributeNS(null, "stroke-width", style.strokeWidth); }
    }
    return e;
  }

  function getSvgPolygon(points) {
    var e = document.createElementNS(xmlns, "polygon");
    e.setAttributeNS(null, "points", points);
    return e;
  }

  function getSvgPolyline(points) {
    var e = document.createElementNS(xmlns, "polyline");
    e.setAttributeNS(null, "points", points);
    return e;
  }

  return { // exports
    getSvgElement: getSvgElement,
    getSvgCircle: getSvgCircle,
    getSvgLine: getSvgLine,
    getSvgPolygon: getSvgPolygon,
    getSvgPolyline: getSvgPolyline
  };
}());