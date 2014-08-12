var model = (function () {
  "use strict";

  var items = [];

  function getItems() {
    return items;
  }

  function addItem(data) {
    var item = {
        radius: data.r
      };

    items.push(item);
  }

  return {
    addItem: addItem,
    items: getItems
  };
}());