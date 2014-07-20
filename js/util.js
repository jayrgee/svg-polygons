/*global xhr,config,location*/

var util = (function () {
  "use strict";

  function getData(url, async, sync) {

    if (location.protocol === "http:") {

      xhr.get(url,

        function xhrSuccess(response) {
          // handle async response
          if (async) { async(response); }
        },

        function xhrError(response) {
          // fall-back to sync response
          if (sync) { sync(response); }
        });

    } else {
      // handle sync response
      if (sync) { sync(null); }
    }
  }

  return { // exports

    getData: getData

  };

}());