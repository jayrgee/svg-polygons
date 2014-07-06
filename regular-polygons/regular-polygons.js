/*global render,util*/

var regularPolygons = (function () {

  function addItemToThis(data) {
    var item = {
        sides: data.n,
        name: data.name,
        link: data.link,
        diameter: 1
      },
      items = this;

    items.push(item);
  }

  function init(url) {
  // Call to function with anonymous callback
    util.loadJSON(url, function (response) {

      // get json data
      var jsonResponse = JSON.parse(response),
        data = jsonResponse.polygons.sides,
        model = {"items": [] };

      // get item (model) data
      data.forEach(addItemToThis, model.items);
      //model.items.sort(function (a, b) { return a.n - b.n; });

      // render
      [
        {id: "ex1", parentId: "content"}
      ].forEach(render.appendElementWithThisList, model.items);

    });
  }

  return { // exports
    init: init
  };
}());