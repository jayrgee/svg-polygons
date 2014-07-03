/*global mySvg,hex,XMLHttpRequest,render*/

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

function addSocketToThis(socket) {
  var items = this,
    item,
    mmSize,
    afSize,
    mmPerInch = 25.4;

  item = socket;
  mmSize = item.size;
  afSize = item.size;
  if (item.system === "AF") { mmSize = mmSize * mmPerInch; }
  if (item.system === "Metric") { afSize = afSize / mmPerInch; }
  item.mmSize = mmSize;
  item.afSize = afSize;
  items.push(item);
}

// Call to function with anonymous callback
loadJSON(function (response) {
  // Do Something with the response e.g.
  var jsonResponse = JSON.parse(response),
    sockets = jsonResponse.sockets,
    items = [];

  sockets.forEach(addSocketToThis, items);
  items.sort(function (a, b) { return a.mmSize - b.mmSize; });
  ["ex1", "ex2", "ex3"].forEach(render.renderTheseItems, items);
});
