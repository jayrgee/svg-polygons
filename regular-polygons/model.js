var model = (function () {
  var items = [];

  function getItems() {
    return items;
  }

  function addItem(data) {
    var item = {
        sides: data.n,
        name: data.name,
        link: data.link,
        radius: 1
      };

    items.push(item);
  }

  return {
    addItem: addItem,
    items: getItems
  };
}());