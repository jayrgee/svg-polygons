var model = (function () {
  "use strict";

  var items = [];

  function getItems() {
    return items;
  }

  function addItem(data) {
    var item = {
        name: data.name,
        system: data.system
      },
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

  return {
    addItem: addItem,
    items: getItems
  };
}());