/*global xhr,config,location*/

var util = (function () {
  "use strict";

  function getData(success) {
    var data;

    if (location.protocol === "http:") {

      xhr.get(config.xhrUrl, function (response) {

        // handle json response
        var jsonResponse = JSON.parse(response);

        // get item (model) data
        data = jsonResponse;
        if (success) { success(data); }

      });

    } else {

      // load data from config (synchronous)
      data = config.data;
      if (success) { success(data); }

    }
  }

  return { // exports

    getData: getData

  };

}());