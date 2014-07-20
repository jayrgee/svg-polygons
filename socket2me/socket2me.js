/*global render,model,util,config*/

(function () {
  "use strict";

  function renderData(data, targets) {

    // init model
    data.sockets.forEach(model.addItem);

    // render targets with model
    targets.forEach(render.appendElementWithThisList,
        model.items().sort(function (a, b) { return a.sizeMM - b.sizeMM; })
      );

  }

  function init(targets) {

    util.getData(

      config.xhrUrl,

      function renderAsyncData(data) {

        renderData(data, targets);
      },

      function renderDefaultData() {
        var data = config.defaultData || {};

        renderData(data, targets);
      }
    );
  }

  var instances = [
      {id: "ex1", parentId: "content"},
      {id: "ex2", parentId: "content"}
    ];

  init(instances);

}());