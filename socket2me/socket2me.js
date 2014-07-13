/*global render,xhr,model,config*/

var socket2me = (function () {

  function initModel(success) {
    if (config.xhrEnabled) {
      xhr.get(config.xhrUrl, function (response) {
        // handle json response
        var jsonResponse = JSON.parse(response);

        // get item (model) data
        jsonResponse.sockets.forEach(model.addItem);

        if (success) { success(model); }
      });
    } else {
      // load data from config (synchronous)
      config.sockets.forEach(model.addItem);
      if (success) { success(model); }
    }
  }

  function init() {
    // get data
    initModel(function (model) {
      // render array of instances
      [
        {id: "ex1", parentId: "content"},
        {id: "ex2", parentId: "content"}
      ].forEach(render.appendElementWithThisList,
        model.items().sort(function (a, b) { return a.sizeMM - b.sizeMM; })
        );

    });
  }

  return { // exports
    init: init
  };
}());