
      function clickerGame() {
        $("<iframe width='1200px' height='700px' id='clicker-game' src='//jsfiddle.net/jaspertherock/tmx3pw9f/35/embedded/result/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function superHeatedGame() {
        $("<iframe width='1200px' height='700px' id='superHeated-game' src='//jsfiddle.net/jaspertherock/u2Lxrhte/167/embedded/result/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }
			function devil() {
        $("<iframe width='1200px' height='700px' id='devil-game' src='//jsfiddle.net/jaspertherock/qvwaphyb/33/embedded/result/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }
      function dinoGame() {
        $("<div id='overlay-dino-game'></div>").css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "width": "100vw",
          "height": "100vh",
          "background-color": "rgba(0,0,0,1)",
          "z-index": 1000000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "auto"
        }).appendTo("body");
        $("<iframe width='1200px' height='700px' id='dino-game' src='https://offline-dino-game.firebaseapp.com/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function urbanEgger() {
        $("<iframe width='1200px' height='700px' id='egg-game' src='https://eggboy.xyz' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function stopAtNothing() {
        $("<iframe width='1200px' height='700px' id='stop-game' src='https://www.stopatnothinggame.com' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function particleClicker() {
        $("<iframe width='1200px' height='620px' id='particle-game' src='https://particle-clicker.web.cern.ch/' allowfullscreen='allowfullscreen' allowpaymentrequest frameborder='0'></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }

      function kickSomeAss() {
        var KICKASSVERSION = '2.0';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        document.body.appendChild(s);
        s.src = '//hi.kickassapp.com/kickass.js';
        void(0);
      }

      function rickRolled() {
        $("<iframe id='shooter-game' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&enablejsapi=1' width='1200' height='700' allow='autoplay' frameborder='2' allowfullscreen></iframe>").css({
          "position": "fixed",
          "z-index": 10000000000000000000,
          "top": "6vh",
          "left": "0vw"
        }).appendTo("body");
      }
      
        function removeOverlayMenu() {
          $("#option-devil-game").remove();
          $("#option-clicker-game").remove();
          $("#option-dino-game").remove();
          $("#option-egg-game").remove();
          $("#option-superHeated-game").remove();
          $("#option-amazing-game").remove();
          $("#option-stop-game").remove();
          $("#option-particle-game").remove();
        }

        function removeOverlayGame() {
          $("#overlay-main-game").remove();
          $("#X-game").remove();
          $("#devil-game").remove();
          $("#clicker-game").remove();
          $("#dino-game").remove();
          $("#egg-game").remove();
          $("#superHeated-game").remove();
          $('#overlay-dino-game').remove();
          $('#shooter-game').remove();
          $('#stop-game').remove();
          $('#particle-game').remove();
          removeOverlayMenu();
          removeOverlay();
          removeOverlayShell();
        }
        $("<div id='overlay-main-game'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "width": "100vw",
          "height": "100vh",
          "background-color": "rgba(1,0,1,1)",
          "z-index": 100000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "auto"
        }).appendTo("body");
        $("<div id='X-game'><tbody><tr><td></td></tr></tbody></div>").css({
          "position": "fixed",
          "top": "2vw",
          "left": "95vw",
          "width": "3vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100000000000000,
          "color": "#0a9100",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%"
        }).appendTo("body");
        $("<div id='option-devil-game'>Devil's Eye</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "10vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-clicker-game'>Generic Clicker</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "17vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-dino-game'>Chrome Dino</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "24vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-superHeated-game'>Super Heated</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "31vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-egg-game'>Shell Shockers</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "38vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-amazing-game'>Generic Shooter</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "45vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-stop-game'>Stop at Nothing</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "52vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        $("<div id='option-particle-game'>Particle Clicker</div>").css({
          "position": "fixed",
          "top": "10vh",
          "left": "59vw",
          "width": "5vw",
          "height": "3vw",
          "background-color": "rgba(255, 102, 0, 1)",
          "z-index": 100001,
          "color": "rgba(0,0,0,1)",
          "font-family": "Georgia, serif",
          "font-size": "10px",
          "font-weight": "bold",
          "cursor": "crosshair",
          "border-radius": "10%",
          "text-align": "center"
        }).appendTo("body");
        var gameCloser = document.getElementById('X-game');
        gameCloser.addEventListener('click', removeOverlayGame);
        var gameDevil = document.getElementById('option-devil-game');
        gameDevil.addEventListener('click', devil);
        var gameClicker = document.getElementById('option-clicker-game');
        gameClicker.addEventListener('click', clickerGame);
        var gameDino = document.getElementById('option-dino-game');
        gameDino.addEventListener('click', dinoGame);
        var gamehot = document.getElementById('option-superHeated-game');
        gamehot.addEventListener('click', superHeatedGame);
        var gameEgg = document.getElementById('option-egg-game');
        gameEgg.addEventListener('click', urbanEgger);
        var gameShooter = document.getElementById('option-amazing-game');
        gameShooter.addEventListener('click', rickRolled);
        var gameStop = document.getElementById('option-stop-game');
        gameStop.addEventListener('click', stopAtNothing);
        var gamepart = document.getElementById('option-particle-game');
        gamepart.addEventListener('click', particleClicker);
