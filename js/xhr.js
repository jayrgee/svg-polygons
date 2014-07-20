/*global XMLHttpRequest*/

var xhr = (function () {
  "use strict";

  var handleSuccess,
    handleError;

  function handler() {
    if (this.readyState === this.DONE) {
      if (this.status === 200 &&
          this.responseText !== null) {
        // success!
        handleSuccess(JSON.parse(this.responseText));
      } else {
        // something went wrong
        handleError({status: this.status, statusText: this.statusText, responseText: this.responseText});
      }
    }
  }

  function get(url, success, error) {
    var req = new XMLHttpRequest();
    if (success) { handleSuccess = success; }
    if (error) { handleError = error; }
    req.onreadystatechange = handler;
    req.open('GET', url, true);
    req.send();
  }

  return { // exports
    get: get
  };

}());