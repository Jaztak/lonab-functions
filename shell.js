function Matrix() {
  $("<canvas id='c'></canvas>").css({
    "top": "0px",
    "left": "0px",
    "z-index": 10001,
    "position": "fixed"
  }).appendTo("body");
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");
  var speeeeeed = 8;
  var fade = 2.5;
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  var font_size = 0.01 * vh;
  c.height = screen.height;
  c.width = screen.width;

  var chinese = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ012345789:・.\"=*+-<>";
  chinese = chinese.split("");
  var columns = c.width / font_size;
  var drops = [];
  for (var x = 0; x < columns; x++) {
    drops[x] = 1;
  }
  for (var x = 0; x < columns; x++) {
    drops[x] = -10;
  }
  var previousText = [];

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, " + (0.05 * fade) + ")";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.font = font_size + "px arial";
    for (var i = 0; i < drops.length; i++) {
      var text = chinese[Math.floor(Math.random() * chinese.length)];
      ctx.fillStyle = "#FFF";
      ctx.fillText(text, i * font_size, drops[i] * font_size);
      ctx.fillStyle = "#0F0";
      ctx.fillText(previousText[i], i * font_size, (drops[i] - 1) * font_size);
      previousText[i] = text;
      if (drops[i] * font_size > c.height && Math.random() > 0.985)
        drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(draw, 100 / speeeeeed);
}
function fun(f){fetch("https://cdn.jsdelivr.net/gh/Jaztak/lonab-functions/"+f+".js").then((o=>o.text())).then((n=>eval(n)))}
void((function(doc) {
  Matrix();

  function displayOverlayShell() {
    $("<div id='overlay-main-shell'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": 0,
      "left": 0,
      "width": "100vw",
      "height": "100vh",
      "background-color": "rgba(1,0,1,1)",
      "z-index": 10000,
      "color": "#0a9100",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "auto"
    }).appendTo("body");
    $("<div id='X-shell'><tbody><tr><td></td></tr></tbody></div>").css({
      "position": "fixed",
      "top": "2vw",
      "left": "95vw",
      "width": "3vw",
      "height": "3vw",
      "background-color": "#00b003",
      "z-index": 10004,
      "color": "#0a9100",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "crosshair",
      "border-radius": "10%"
    }).appendTo("body");
    $("<input id='box-shell'><tbody><tr><td></td></tr></tbody></input>").css({
      "position": "fixed",
      "top": "25vh",
      "left": "25vw",
      "width": "50vw",
      "height": "50vh",
      "background-color": "rgba(0,2,0,1)",
      "z-index": 10003,
      "color": "#0a9100",
      "font-family": "Georgia, serif",
      "font-size": "10px",
      "font-weight": "bold",
      "cursor": "text",
      "border-radius": "5%",
      "outline-style": "solid",
      "outline-color": "#00b003",
      "outline-width": "1vmin"
    }).appendTo("body");
  }


  function removeOverlayShell() {
    $("#overlay-main-shell").remove();
    $("#box-shell").remove();
    $("#X-shell").remove();
    $("#mogus").remove();
    $("#c").remove();
  }
  function killScreen() {
    $("<img src='https://chromeready.com/wp-content/uploads/sites/3/2022/01/google-chrome-critical-error-red-screen.png'id='deadScreen'>").css({
      "position": "fixed",
      "top": "0vh",
      "left": "0vw",
      "width": "100vw",
      "height": "100vh",
      "z-index": 1000000001
    }).appendTo("body");
  }

  function trollScreen() {
    $("<img src='https://cdnb.artstation.com/p/assets/images/images/004/456/215/large/wil-hughes-troll-face.jpg'id='deadScreen'>").css({
      "position": "fixed",
      "top": "0vh",
      "left": "0vw",
      "width": "100vw",
      "height": "100vh",
      "z-index": 1000000001
    }).appendTo("body");
  }

  function doStuff() {
    displayOverlayShell();
    var commands = [];
    var devItUp = false;
    var gobyebye = document.getElementById('X-shell');
    gobyebye.addEventListener("click", removeOverlayShell);
    $(this).keypress(function(event) {
      if (event.keyCode == 13) {
        var Val = document.getElementById("box-shell").value;
        if (Val == 'close shell' || Val == 'close' || Val == 'quit' || Val == 'clear') {
          removeOverlayShell();
        } else if (Val.substring(0, 5) == 'solve') {
          document.getElementById("box-shell").value = eval(Val.substring(6, 1000));
        } else if (Val.substring(0, 4) == 'math') {
          document.getElementById("box-shell").value = eval(Val.substring(5, 1000));
        } else if (Val.includes('69') || Val.includes('420')) {
          document.getElementById("box-shell").value = 'hehehe';
        } else if (Val == "ur mom" || Val == "your mom") {
          alert("is stupid");
          document.getElementById("box-shell").value = "";
        } else if (Val.substring(0, 7) == 'what is') {
          document.getElementById("box-shell").value = eval(Val.substring(8, 1000));
        } else if (Val == 'die' || Val == 'error') {
          document.getElementById("box-shell").value = "";
          killScreen();
        } else if (Val == 'troll' || Val == 'troll face') {
          document.getElementById("box-shell").value = "";
          trollScreen();
        } else if (Val == "REDACTED") {
          document.getElementById("box-shell").value = "like ur mom";
        } else if (Val == "like ur mom") {
          document.getElementById("box-shell").value = "is stupid";
        } else if (Val == "is stupid") {
          document.getElementById("box-shell").value = "get it?";
        } else if (Val == "sussy" || Val == "amogus" || Val == "amongus" || Val == "sus") {
          document.getElementById("box-shell").value = "amogus";
          $("<img src='https://ideawallpapers.com/wp-content/uploads/2021/12/among-us-wallpaper.jpg'id='mogus'>").css({
            "position": "fixed",
            "top": "0vh",
            "left": "0vw",
            "width": "100vw",
            "height": "100vh",
            "z-index": 10000
          }).appendTo("body");
        } else {
        try {
        	fun(Val);
        } catch(err) {
          eval(Val);
        }
        }
      }
    });
  }
  doStuff();
})(document));
