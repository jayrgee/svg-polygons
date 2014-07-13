/*global render,xhr,model,config*/

var regularPolygons = (function () {

  function initModel(success) {
    if (config.xhrEnabled) {
      xhr.get(config.xhrUrl, function (response) {
        // handle json response
        var jsonResponse = JSON.parse(response);

        // get item (model) data
        jsonResponse.polygons.sides.forEach(model.addItem);

        if (success) { success(model); }
      });
    } else {
      // load data from config (synchronous)
      config.polygons.sides.forEach(model.addItem);
      if (success) { success(model); }
    }
  }

  function init() {
    // get data
    initModel(function (model) {
      // render single instance
      render.appendElementWithThisList.call(model.items(), {id: "ex1", parentId: "content"});
    });
  }

  return { // exports
    init: init
  };
}());