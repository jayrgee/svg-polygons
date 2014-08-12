var config = (function () {
  "use strict";

  return {

    // configure xhr
    xhrUrl: "../data/circles.json",

    // configure data to be loaded when using file: protocol
    "defaultData": {
      "circles": [
        {"r": 0.2},
        {"r": 0.3},
        {"r": 0.4},
        {"r": 0.5},
        {"r": 0.6},
        {"r": 0.7},
        {"r": 0.8},
        {"r": 0.9},
        {"r": 1.0}
      ]
    }
  };
}());