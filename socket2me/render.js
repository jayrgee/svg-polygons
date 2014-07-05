/*global svgPolygons*/

var render = (function () {
  var dpi = 96;

  function getSvgHexagon(size) {
    var r = size / Math.sqrt(3),
      x = r,
      y = size / 2;

    return svgPolygons.getHexagon(r, x, y);
  }

  function addItemToThisList(item) {
    var elList = this,
      elListItm,
      elSpanNm,
      elListSz,
      elListSzItmMM,
      elListSzItmAF,
      elSvg = getSvgHexagon(item.sizeAF * dpi);

    elSpanNm = document.createElement("span");
    elSpanNm.setAttribute("class", "name");
    elSpanNm.textContent = item.name;

    elListSzItmMM = document.createElement("li");
    elListSzItmMM.textContent = item.labelMM;

    elListSzItmAF = document.createElement("li");
    elListSzItmAF.textContent = item.labelAF;

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