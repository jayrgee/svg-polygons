/*global svgPolygons*/

var render = (function () {
  var dpi = 96;

  function addItemToThisList(item) {
    var elList = this,
      elListItm,
      elSpanSides,
      elSpanNm,
      elLink,
      elSvgs = [],
      i;

    elSvgs.push(svgPolygons.getRegularPolygon(item.sides, item.radius * dpi));
    elSvgs.push(svgPolygons.getRegularPolygon(item.sides, item.radius * dpi, {}, {fill: "red"}));
    elSvgs.push(svgPolygons.getRegularPolygon(item.sides, item.radius * dpi, {}, {fill: "yellow", strokeWidth: 10}));
    elSvgs.push(svgPolygons.getRegularPolygon(item.sides, item.radius * dpi, {}, {fill: "#9966ff", strokeWidth: 20}));

    elSpanSides = document.createElement("span");
    elSpanSides.setAttribute("class", "size");
    elSpanSides.textContent = item.sides;

    elLink = document.createElement("a");
    elLink.href = item.link;
    elLink.textContent = item.name;

    elSpanNm = document.createElement("span");
    elSpanNm.setAttribute("class", "name");
    elSpanNm.appendChild(elLink);

    elListItm = document.createElement("li");
    elListItm.appendChild(elSpanSides);

    for (i = 0; i < elSvgs.length; i++) {
      elListItm.appendChild(elSvgs[i]);
    }

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
    elList.setAttribute("class", "polygons");
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