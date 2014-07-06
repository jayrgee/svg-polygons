/*global svgPolygons*/

var render = (function () {
  var dpi = 96;

  function getSvgPolygon(sides, diameter) {

    var r = diameter / 2,
      x = r,
      y = r;

    return svgPolygons.getRegularPolygon(sides, r, x, y);
  }

  function addItemToThisList(item) {
    var elList = this,
      elListItm,
      elSpanSides,
      elSpanNm,
      elSvg = getSvgPolygon(item.sides, item.diameter * dpi);

    elSpanSides = document.createElement("span");
    elSpanSides.textContent = item.sides;

    elSpanNm = document.createElement("span");
    elSpanNm.setAttribute("class", "name");
    elSpanNm.textContent = item.name;

    elListItm = document.createElement("li");
    elListItm.appendChild(elSpanSides);
    elListItm.appendChild(elSvg);
    elListItm.appendChild(elSpanNm);

    elList.appendChild(elListItm);
  }

  // public functions

  function appendElementWithThisList(data) {
    var items = this,
      elParent,
      elDiv,
      elList;

    elList = document.createElement("ul");
    elList.setAttribute("class", "sockets");
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