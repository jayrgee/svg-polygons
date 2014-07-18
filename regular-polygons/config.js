var config = (function () {
  "use strict";

  return {

    // configure xhr
    xhrUrl: "../data/regular-polygons.json",

    // configure data to be loaded when using file: protocol
    "data": {
      "polygons": {
        "sides": [
          {"n": 3, "name": "Equilateral Triangle", "link": "https://en.wikipedia.org/wiki/Equilateral_triangle"},
          {"n": 4, "name": "Square", "link": "https://en.wikipedia.org/wiki/Square_(geometry)"},
          {"n": 5, "name": "Pentagon", "link": "https://en.wikipedia.org/wiki/Pentagon"},
          {"n": 6, "name": "Hexagon", "link": "https://en.wikipedia.org/wiki/Hexagon"},
          {"n": 7, "name": "Heptagon", "link": "https://en.wikipedia.org/wiki/Heptagon"},
          {"n": 8, "name": "Octagon", "link": "https://en.wikipedia.org/wiki/Octagon"},
          {"n": 9, "name": "Nonagon", "link": "https://en.wikipedia.org/wiki/Nonagon"},
          {"n": 10, "name": "Decagon", "link": "https://en.wikipedia.org/wiki/Decagon"},
          {"n": 11, "name": "Hendecagon", "link": "https://en.wikipedia.org/wiki/Hendecagon"},
          {"n": 12, "name": "Dodecagon", "link": "https://en.wikipedia.org/wiki/Dodecagon"},
          {"n": 13, "name": "Tridecagon", "link": "https://en.wikipedia.org/wiki/Tridecagon"},
          {"n": 14, "name": "Tetradecagon", "link": "https://en.wikipedia.org/wiki/Tetradecagon"},
          {"n": 15, "name": "Pentadecagon", "link": "https://en.wikipedia.org/wiki/Pentadecagon"},
          {"n": 16, "name": "Hexadecagon", "link": "https://en.wikipedia.org/wiki/Hexadecagon"},
          {"n": 17, "name": "Heptadecagon", "link": "https://en.wikipedia.org/wiki/Heptadecagon"},
          {"n": 18, "name": "Octadecagon", "link": "https://en.wikipedia.org/wiki/Octadecagon"},
          {"n": 19, "name": "Enneadecagon", "link": "https://en.wikipedia.org/wiki/Enneadecagon"},
          {"n": 20, "name": "Icosagon", "link": "https://en.wikipedia.org/wiki/Icosagon"}
        ],
        "description": "In Euclidean geometry, a regular polygon is a polygon that is equiangular (all angles are equal in measure) and equilateral (all sides have the same length).",
        "link" : "https://en.wikipedia.org/wiki/Regular_polygon"
      }
    }
  };
}());