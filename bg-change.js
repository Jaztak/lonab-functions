var jasper = prompt('Background color? Hex or name will do. You can also write nothing to revert to default. Type random for randomized coloration.', 'black');
    if (jasper == "chaos") {
      function ono() {
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
        lo7NAB();
        setTimeout(ono, 50)
      }
      ono();
    } else {
      if (jasper == "random") {
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
      } else {
        if (!jasper.includes("#")) {
          jasper = jasper.replace(' ', '');
          jasper = (colourNameToHex(jasper));
        }
        document.body.style.background = jasper;
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.backgroundColor = jasper;
        }
        var all = document.getElementsByTagName("*");
        jasper = invertColor(jasper);
        for (var i = 0, max = all.length; i < max; i++) {
          all[i].style.color = jasper;
        }
      }
    }
    lo7NAB();
