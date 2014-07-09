/*global render,xhr*/

var regularPolygons = (function () {

  function addItemToThis(data) {
    var item = {
        sides: data.n,
        name: data.name,
        link: data.link,
        radius: 1
      },
      items = this;

    items.push(item);
  }

  function init(url) {
    // get data
    xhr.get(url, function (response) {

      // handle json response
      var jsonResponse = JSON.parse(response),
        data = jsonResponse.polygons.sides,
        model = {"items": [] };

      // get item (model) data
      data.forEach(addItemToThis, model.items);

      // render single instance
      render.appendElementWithThisList.call(model.items, {id: "ex1", parentId: "content"});
    });
  }

  return { // exports
    init: init
  };
}());