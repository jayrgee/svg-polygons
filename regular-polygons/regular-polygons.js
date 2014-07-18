/*global render,model,util*/

(function () {
  "use strict";

  function init() {

    // get data
    util.getData(function (data) {

      // init model
      data.polygons.sides.forEach(model.addItem);

      // render single instance
      render.appendElementWithThisList.call(model.items(), {id: "ex1", parentId: "content"});
    });
  }

  init();

}());
