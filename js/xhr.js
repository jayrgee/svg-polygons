/*global XMLHttpRequest*/

var xhr = (function () {
  "use strict";

  function get(url, success, error) {
    var req = new XMLHttpRequest();
    //req.overrideMimeType("application/json");
    req.open('GET', url, true);

    // Response handlers.
    req.onload = function () {
      if (success) { success(req.responseText); }
    };
    req.onerror = function () {
      if (error) { error(req.responseText); }
    };

    req.send(null);
  }

  return { // exports
    get: get
  };

}());