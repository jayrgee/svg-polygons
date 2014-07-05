/*global mySvg,hex,XMLHttpRequest*/

var socket2me = (function () {

  var data = (function () {
    function doThat() {
      console.log('do that');
    }

    return {
      doThat: doThat
    };
  }());

  var render = (function () {
    function doThis() {
      console.log('do this');
    }

    return {
      doThis: doThis
    };
  }());

  return { // exports
    data: data,
    render: render
  };
}());