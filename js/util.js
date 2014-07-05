/*global XMLHttpRequest*/

var util = (function () {

  function loadJSON(url, success, error) {
    var xhr = new XMLHttpRequest();
    //xhr.overrideMimeType("application/json");
    xhr.open('GET', url, true);

    // Response handlers.
    xhr.onload = function () {
      if (success) { success(xhr.responseText); }
    };
    xhr.onerror = function () {
      if (error) { error(xhr.responseText); }
    };

    xhr.send(null);
  }

  return { // exports
    loadJSON: loadJSON
  };

}());