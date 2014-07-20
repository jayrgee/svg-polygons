/*global render,model,util, config*/

(function () {
  "use strict";

  function renderData(data, target) {

    // init model
    data.polygons.sides.forEach(model.addItem);

    // render target with model
    render.appendElementWithThisList.call(model.items(), target);

  }

  function init(target) {

    util.getData(

      config.xhrUrl,

      function renderAsyncData(data) {

        renderData(data, target);
      },

      function renderDefaultData() {
        var data = config.defaultData || {};

        renderData(data, target);
      }
    );
  }

  var instance = {id: "ex1", parentId: "content"};

  init(instance);

}());
