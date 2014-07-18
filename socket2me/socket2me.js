/*global render,model,util*/

(function () {
  "use strict";

  function init() {

    // get data
    util.getData(function (data) {

      // init model
      data.sockets.forEach(model.addItem);

      // render array of instances
      [ {id: "ex1", parentId: "content"},
        {id: "ex2", parentId: "content"}
        ].forEach(render.appendElementWithThisList,
          model.items().sort(function (a, b) { return a.sizeMM - b.sizeMM; })
        );
    });
  }

  init();

}());