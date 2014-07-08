/*global svgPolygons*/

var render = (function () {
  var dpi = 96;

  function addItemToThisList(item) {
    var elList = this,
      elListItm,
      elSpanSides,
      elSpanNm,
      elLink,
      elSvg = svgPolygons.getRegularPolygon(item.sides, item.radius * dpi),
      elSvg2 = svgPolygons.getRegularPolygon(item.sides, item.radius * dpi, {"p": 10});

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
    elListItm.appendChild(elSvg);
    elListItm.appendChild(elSvg2);
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