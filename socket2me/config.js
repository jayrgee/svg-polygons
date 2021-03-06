var config = (function () {
  "use strict";

  return {

    // configure xhrUrl
    xhrUrl: "../data/socket-kit.json",

    // configure data to be loaded when using file: protocol
    defaultData: {
      sockets: [
        {"name": "4mm", "system": "Metric", "uom": "mm", "size": 4.0},
        {"name": "4.5mm", "system": "Metric", "uom": "mm", "size": 4.5},
        {"name": "5mm", "system": "Metric", "uom": "mm", "size": 5.0},
        {"name": "5.5mm", "system": "Metric", "uom": "mm", "size": 5.5},
        {"name": "6mm", "system": "Metric", "uom": "mm", "size": 6.0},
        {"name": "7mm", "system": "Metric", "uom": "mm", "size": 7.0},
        {"name": "8mm", "system": "Metric", "uom": "mm", "size": 8.0},
        {"name": "9mm", "system": "Metric", "uom": "mm", "size": 9.0},
        {"name": "10mm", "system": "Metric", "uom": "mm", "size": 10.0},
        {"name": "11mm", "system": "Metric", "uom": "mm", "size": 11.0},
        {"name": "13mm", "system": "Metric", "uom": "mm", "size": 13.0},
        {"name": "3/16\"", "system": "AF", "uom": "inch", "size": 0.1875},
        {"name": "7/32\"", "system": "AF", "uom": "inch", "size": 0.21875},
        {"name": "1/4\"", "system": "AF", "uom": "inch", "size": 0.25},
        {"name": "9/32\"", "system": "AF", "uom": "inch", "size": 0.28125},
        {"name": "5/16\"", "system": "AF", "uom": "inch", "size": 0.3125},
        {"name": "1/32\"", "system": "AF", "uom": "inch", "size": 0.34375},
        {"name": "3/8\"", "system": "AF", "uom": "inch", "size": 0.375},
        {"name": "7/16\"", "system": "AF", "uom": "inch", "size": 0.4375},
        {"name": "1/2\"", "system": "AF", "uom": "inch", "size": 0.5}
      ]
    }
  };
}());