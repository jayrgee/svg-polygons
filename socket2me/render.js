/*global svgPolygons*/

var render = (function () {
  "use strict";

  var dpi = 96;

  function addItemToThisList(item) {
    var elList = this,
      elListItm,
      elSpanNm,
      elListSz,
      elListSzItmMM,
      elListSzItmAF,
      elSvg = svgPolygons.getHexagon(item.size.AF * dpi / Math.sqrt(3));

    elSpanNm = document.createElement("span");
    elSpanNm.setAttribute("class", "name");
    elSpanNm.textContent = item.name;

    elListSzItmMM = document.createElement("li");
    elListSzItmMM.textContent = item.label.Metric;

    elListSzItmAF = document.createElement("li");
    elListSzItmAF.textContent = item.label.AF;

    elListSz = document.createElement("ul");
    elListSz.setAttribute("class", "size");
    elListSz.appendChild(elListSzItmMM);
    elListSz.appendChild(elListSzItmAF);

    elListItm = document.createElement("li");
    elListItm.setAttribute("class", item.system);
    elListItm.appendChild(elSpanNm);
    elListItm.appendChild(elSvg);
    elListItm.appendChild(elListSz);

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