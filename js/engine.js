(function Engine(doc, win){
    var canvas = doc.createElement("canvas"),
        ctx    = canvas.getContext("2d"),
        lastTime;
    canvas.width  = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);


    function main(){
      var now = Date.now(),
          dt  = (now - lastTime)/1000.0;

      renderField();
      lastTime = now;
      win.requestAnimationFrame(main);
    };

    function init(){
      lastTime = Date.now();
      main();
    };

    function renderField(){
      var rowImages =[
            "images/water-block.png",
            "images/stone-block.png",
            "images/stone-block.png",
            "images/stone-block.png",
            "images/grass-block.png",
            "images/grass-block.png"
          ],
          numRows = 6,
          numCols = 5,
          row, col;

      for (row = 0; row < numRows; row++){
        for (col = 0; col < numCols; col++){
          ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
        }
      }
    };

    Resources.onReady(init);
    Resources.load([
        "images/water-block.png",
        "images/stone-block.png",
        "images/stone-block.png",
        "images/stone-block.png",
        "images/grass-block.png",
        "images/grass-block.png"
      ]);
})(this.document, this.window);
