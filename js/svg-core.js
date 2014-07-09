/*global polygons*/

var svgCore = (function () {
  var xmlns = 'http://www.w3.org/2000/svg';

  function addStyleStOthis(styles) {
    var e = this;
    if (styles.fill) { e.setAttributeNS(null, "fill", styles.fill); }
    if (styles.stroke) { e.setAttributeNS(null, "stroke", styles.stroke); }
    if (styles.strokeWidth) { e.setAttributeNS(null, "stroke-width", styles.strokeWidth); }
  }

  function getSvgElement(w, h, clss) {
    var e = document.createElementNS(xmlns, "svg");
    if (clss) { e.setAttributeNS(null, "class", clss); }
    e.setAttributeNS(null, "width", w);
    e.setAttributeNS(null, "height", h);
    e.setAttributeNS(null, "viewPort", "0 0 " + w + " " + h);
    return e;
  }

  function getSvgCircle(cx, cy, r, styles) {
    var e = document.createElementNS(xmlns, "circle");
    e.setAttributeNS(null, "cx", cx);
    e.setAttributeNS(null, "cy", cy);
    e.setAttributeNS(null, "r", r);
    if (styles) { addStyleStOthis.call(e, styles); }
    return e;
  }

  function getSvgLine(x1, y1, x2, y2, styles) {
    var e = document.createElementNS(xmlns, "line");
    e.setAttributeNS(null, "x1", x1);
    e.setAttributeNS(null, "y1", y1);
    e.setAttributeNS(null, "x2", x2);
    e.setAttributeNS(null, "y2", y2);
    if (styles) { addStyleStOthis.call(e, styles); }
    return e;
  }

  function getSvgPolygon(points, styles) {
    var e = document.createElementNS(xmlns, "polygon");
    e.setAttributeNS(null, "points", points);
    if (styles) { addStyleStOthis.call(e, styles); }
    return e;
  }

  function getSvgPolyline(points, styles) {
    var e = document.createElementNS(xmlns, "polyline");
    e.setAttributeNS(null, "points", points);
    if (styles) { addStyleStOthis.call(e, styles); }
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