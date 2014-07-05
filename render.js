/*global mySvg,hex,XMLHttpRequest*/

var render = (function () {

  function getSvgHexagon(size) {
    var r = size / Math.sqrt(3),
      x = r,
      y = size / 2;

    return mySvg.getSvgHexagon(r, x, y);
  }

  function addItemToThisList(item) {
    var elList = this,
      elListItm,
      elSpanNm,
      elListSz,
      elListSzItmMM,
      elListSzItmAF,

      dpi = 96,
      size = item.sizeAF * dpi,
      elSvg = getSvgHexagon(size);

    elListItm = document.createElement("li");
    elListItm.setAttribute("class", item.system);

    elSpanNm = document.createElement("span");
    elSpanNm.setAttribute("class", "name");
    elSpanNm.textContent = item.name;

    elListItm.appendChild(elSpanNm);

    elListItm.appendChild(elSvg);

    elListSz = document.createElement("ul");
    elListSz.setAttribute("class", "size");

    elListSzItmMM = document.createElement("li");

    elListSzItmMM.textContent = item.labelMM;

    elListSz.appendChild(elListSzItmMM);

    elListSzItmAF = document.createElement("li");

    elListSzItmAF.textContent = item.labelAF;

    elListSz.appendChild(elListSzItmAF);

    elListItm.appendChild(elListSz);

    elList.appendChild(elListItm);
  }

  // public functions

  function appendElementWithThisList(id) {
    var items = this,
      elContent = document.getElementById("content"),
      elDiv = document.createElement("div"),
      elList = document.createElement("ul");

    elList.setAttribute("class", "sockets");
    items.forEach(addItemToThisList, elList);

    elDiv.setAttribute("id", id);
    elDiv.setAttribute("class", "example");
    elDiv.appendChild(elList);

    elContent.appendChild(elDiv);
  }

  return { // exports
    appendElementWithThisList: appendElementWithThisList
  };
}());