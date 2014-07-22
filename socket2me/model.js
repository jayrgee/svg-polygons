var model = (function () {
  "use strict";

  var items = [];

  function getItems() {
    return items;
  }

  function addItem(data) {
    var item = {
        name: data.name,
        system: data.system,
        size: {
          Metric: 0,
          AF: 0
        },
        label: {
          Metric: "",
          AF: ""
        }
      },
      uomInch = "\"",
      uomMM = "mm",
      mmPerInch = 25.4;

    switch (item.system) {
    case "AF":
      item.size.AF = data.size;
      item.size.Metric = data.size * mmPerInch;
      break;
    case "Metric":
      item.size.Metric = data.size;
      item.size.AF = data.size / mmPerInch;
      break;
    default:
      break;
    }

    item.label.AF = item.size.AF.toFixed(3) + uomInch;
    item.label.Metric = item.size.Metric.toFixed(2) + uomMM;

    items.push(item);
  }

  return {
    addItem: addItem,
    items: getItems
  };
}());