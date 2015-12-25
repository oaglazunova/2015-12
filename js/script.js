'use strict';

(function () {
  var playBtn = document.getElementById("play");
  var confirmBtn = document.getElementById("confirm");
  var cancelBtn = document.getElementById("cancel");

  playBtn.onclick = function () {
    event.preventDefault();
  };

  cancelBtn.onclick = function () {
    event.preventDefault();
  };

  confirmBtn.onclick = function () {
    playBtn.style.cursor = document.getElementById("confirm").checked ? "pointer" : "default";
    playBtn.style.pointerEvents = confirmBtn.checked ? "all" : "none";
    playBtn.style.background = confirmBtn.checked ? "linear-gradient(to top, #d30e18, #ff002a)" : "#555";
  }

})();