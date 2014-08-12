/*global svgPolygons*/

var render = (function () {
  "use strict";

  var dpi = 96;

  function addItemToThisList(item) {
    var elList = this,
      elListItm,
      elSvgs = [],
      i;

    elSvgs.push(svgPolygons.getCircle(item.radius * dpi, {style: {fill: "yellow", strokeWidth: 1}}));
    elSvgs.push(svgPolygons.getCircle(item.radius * dpi, {style: {fill: "yellow", strokeWidth: 10}}));
    elSvgs.push(svgPolygons.getCircle(item.radius * dpi, {style: {fill: "yellow", strokeWidth: 20}}));

    elListItm = document.createElement("li");

    for (i = 0; i < elSvgs.length; i++) {
      elListItm.appendChild(elSvgs[i]);
    }

    elList.appendChild(elListItm);
  }

  // public functions

  function appendElementWithThisList(data) {
    var items = this,
      elParent,
      elDiv,
      elList;

    elList = document.createElement("ul");
    elList.setAttribute("class", "circles");
    items.forEach(addItemToThisList, elList);

    elDiv = document.createElement("div");
    elDiv.setAttribute("id", data.id);
    elDiv.setAttribute("class", "example");
    elDiv.appendChild(elList);

    elParent = document.getElementById(data.parentId);
    elParent.appendChild(elDiv);
  }

  return { // exports
    appendElementWithThisList: appendElementWithThisList
  };
}());