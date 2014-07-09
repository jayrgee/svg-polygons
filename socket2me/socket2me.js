/*global render,xhr*/

var socket2me = (function () {

  function addItemToThis(data) {
    var item = {
        name: data.name,
        system: data.system
      },
      items = this,
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
    item.labelMM = item.sizeMM.toFixed(2) + uomMM;

    items.push(item);
  }

  function init(url) {
    // get data
    xhr.get(url, function (response) {

      // handle json response
      var jsonResponse = JSON.parse(response),
        data = jsonResponse.sockets,
        model = { "items": [] };

      // get item (model) data
      data.forEach(addItemToThis, model.items);
      model.items.sort(function (a, b) { return a.sizeMM - b.sizeMM; });

      // render array of instances
      [
        {id: "ex1", parentId: "content"},
        {id: "ex2", parentId: "content"}
      ].forEach(render.appendElementWithThisList, model.items);

    });
  }

  return { // exports
    init: init
  };
}());