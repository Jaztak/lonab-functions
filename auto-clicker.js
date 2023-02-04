void((function() {
  var DELAY = prompt("what should the delay between clicks be? (ms, enter zero for hyper speed)");
  if (DELAY != null) {
    var autoClickerStyleElement = document.createElement("style");
    autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
    document.body.appendChild(autoClickerStyleElement);

    function addClicker(e) {
      if (!e.isTrusted) {
        return;
      }
      if (e.target.classList.contains("auto-clicker-target")) {
        e.target.classList.remove("auto-clicker-target");
      } else {
        e.target.classList.add("auto-clicker-target");
      }
      document.body.removeChild(autoClickerStyleElement);
      document.body.removeEventListener("click", addClicker);
      e.preventDefault();
      autoClick(e.target);
    }

    function clickclick(element) {
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
      element.click();
    }

    function autoClick(element) {
      if (element.classList.contains("auto-clicker-target")) {
        if (DELAY === 0) {
          clickclick(element);
          clickclick(element);
          clickclick(element);
          clickclick(element);
          clickclick(element);
          clickclick(element);
          clickclick(element);
          clickclick(element);
          clickclick(element);
          clickclick(element);
        } else {
          element.click();
        }
        setTimeout(function() {
          autoClick(element);
        }, DELAY);
      }
    }
    document.body.addEventListener("click", addClicker, 0);
  }
})(document));
