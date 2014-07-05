/*global mySvg,hex,XMLHttpRequest,render,socket2me*/

function loadJSON(success, error) {
  var url = 'toolkit.json',
    xhr = new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  xhr.open('GET', url, true);

  // Response handlers.
  xhr.onload = function () {
    if (success) { success(xhr.responseText); }
  };
  xhr.onerror = function () {
    if (error) { error(xhr.responseText); }
  };

  xhr.send(null);
}

function addItemToThis(data) {
  var items = this,
    item = { name: data.name, system: data.system },
    uomInch = "\"",
    uomMM = "mm",
    mmPerInch = 25.4;

  switch (item.system) {
  case "AF":
    item.sizeAF = data.size;
    item.sizeMM = data.size * mmPerInch;
    break;
  case "Metric":
    item.sizeMM = data.size;
    item.sizeAF = data.size / mmPerInch;
    break;
  default:
    item.sizeMM = 0;
    item.sizeAF = 0;
    break;
  }

  item.labelAF = item.sizeAF.toFixed(3) + uomInch;
  item.labelMM = item.sizeMM.toFixed(3) + uomMM;

  items.push(item);
}

// Call to function with anonymous callback
loadJSON(function (response) {

  // get json data
  var jsonResponse = JSON.parse(response),
    sockets = jsonResponse.sockets,
    items = [];

  // get item (model) data
  sockets.forEach(addItemToThis, items);
  items.sort(function (a, b) { return a.sizeMM - b.sizeMM; });

  // render
  ["ex1", "ex2", "ex3"].forEach(render.appendElementWithThisList, items);

});

socket2me.data.doThat();
socket2me.render.doThis();

