/*global mySvg,hex,XMLHttpRequest*/

var render = (function () {

  function addItemToThisList(item) {
    var elList = this,
      elListItm = document.createElement("li"),
      elSpanNm = document.createElement("span"),
      elListSz = document.createElement("ul"),
      elListSzItmMM = document.createElement("li"),
      elListSzItmAF = document.createElement("li"),
      dpi = 96,
      unitInch = "\"",
      unitMM = "mm",
      size = item.afSize * dpi,
      r = size / Math.sqrt(3),
      x = r,
      y = size / 2,
      elSvg = mySvg.getSvgHexagon(r, x, y);

    elListItm.setAttribute("class", item.system);

    elSpanNm.setAttribute("class", "name");
    elSpanNm.textContent = item.name;
    elListItm.appendChild(elSpanNm);

    elListItm.appendChild(elSvg);

    elListSz.setAttribute("class", "size");
    elListSzItmMM.textContent = item.mmSize.toFixed(2) + unitMM;
    elListSzItmAF.textContent = item.afSize.toFixed(3) + unitInch;
    elListSz.appendChild(elListSzItmMM);
    elListSz.appendChild(elListSzItmAF);

    elListItm.appendChild(elListSz);

    elList.appendChild(elListItm);
  }

  // public functions

  function renderTheseItems(id) {
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
    renderTheseItems: renderTheseItems
  };
}());