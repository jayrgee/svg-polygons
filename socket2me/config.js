var config = (function () {
  return {

    // configure xhr
    xhrEnabled: false,
    xhrUrl: "../data/socket-kit.json",

    // configure data to be loaded when xhr disabled
    sockets: [
      {"name": "4 mm", "system": "Metric", "uom": "mm", "size": 4.0},
      {"name": "5 mm", "system": "Metric", "uom": "mm", "size": 5.0},
      {"name": "6 mm", "system": "Metric", "uom": "mm", "size": 6.0},
      {"name": "8 mm", "system": "Metric", "uom": "mm", "size": 8.0},
      {"name": "10 mm", "system": "Metric", "uom": "mm", "size": 10.0},
      {"name": "13 mm", "system": "Metric", "uom": "mm", "size": 13.0},
      {"name": "3/16 \"", "system": "AF", "uom": "inch", "size": 0.1875},
      {"name": "1/4 \"", "system": "AF", "uom": "inch", "size": 0.25},
      {"name": "5/16 \"", "system": "AF", "uom": "inch", "size": 0.3125},
      {"name": "3/8 \"", "system": "AF", "uom": "inch", "size": 0.375},
      {"name": "1/2 \"", "system": "AF", "uom": "inch", "size": 0.5}
    ]
  };
}());