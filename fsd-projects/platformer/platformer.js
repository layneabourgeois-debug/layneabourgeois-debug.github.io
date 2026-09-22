$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(200, 300, 100, 10);
createPlatform(650, 500, 100, 10);
createPlatform(100, 700, 100, 10);
createPlatform(250, 650, 100, 10);
createPlatform(369, 590, 100, 10);
createPlatform(450, 340, 100, 10);
createPlatform(300, 150, 100, 10);
createPlatform(100, 80, 100, 10);


    // TODO 3 - Create Collectables
createCollectable("diamond", 200, 260, 0, 0)
createCollectable("steve", 100, 650, 0, 0)
createCollectable("max", 368, 540, 0, 0)


    
    // TODO 4 - Create Cannons
 createCannon("right", 650, 2000)
createCannon("left", 150, 2000)
createCannon("right", 100, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
