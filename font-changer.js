var font = prompt("what font?");
    var ccolor = prompt("what font color?");
    var all = document.getElementsByTagName("*");
    if (!ccolor.includes("#")) {
      ccolor = ccolor.replace(' ', '');
      ccolor = colourNameToHex(ccolor);
    }
    for (var i = 0, max = all.length; i < max; i++) {
      all[i].style.color = ccolor;
    }

    for (var i = 0, max = all.length; i < max; i++) {
      all[i].style.fontFamily = font;
    }
