"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Logger(id, subject) {
    _classCallCheck(this, Logger);

    //Subject param in this case will correspond to "playbutton"'s id
    this.id = id;
    this.subject = subject;
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log(this.subject + " has been pushed!");
    }
  }]);

  return Logger;
}();