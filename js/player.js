(function Player(doc, global){
    var Player = function(image_url, position){
      this.x      = position[0];
      this.y      = position[1];
      this.sprite = image_url;
      this.show = false;
    };

    Player.prototype.update = function(dt){
      _render(this);
    };

    Player.prototype.handleInput = function(direction){
      switch(direction){
        case "left":
          this.x -= 100;
          break;
        case "up":
          this.y -= 83;
          break;
        case "right":
          this.x += 100;
          break;
        case "down":
          this.y += 83;
          break;
      }
    };

    function _render(player){
      if(player.show){
        ctx.drawImage(Resources.get(player.sprite), player.x, player.y);
      }
    };

    display_player = function(){
      global.player.show = true;
    }

    Resources.onReady(display_player);
    Resources.load("images/char-boy.png");
    global.player = new Player("images/char-boy.png", [200, 405])

    doc.addEventListener('keyup', function(e){
      var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
      };
      global.player.handleInput(allowedKeys[e.keyCode])
    });
})(this.document, this);
