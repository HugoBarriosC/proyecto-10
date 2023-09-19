var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bfde8093-8892-49a8-8d51-a60527562461","fb13841d-0f0f-4ac9-8ca3-b2aa6b0aa98a","b9c8323f-482c-482f-87f6-a7d9f6f708d2","d4dd78fe-04d3-4c97-addb-9bad122eb223","6523689c-ba28-479e-b845-20475a680da8"],"propsByKey":{"bfde8093-8892-49a8-8d51-a60527562461":{"name":"ground_grass_broken_1","sourceUrl":null,"frameSize":{"x":100,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"tCOe4k5X7UxF79VFp8u0SkKL8gxnCgM5","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":25},"rootRelativePath":"assets/bfde8093-8892-49a8-8d51-a60527562461.png"},"fb13841d-0f0f-4ac9-8ca3-b2aa6b0aa98a":{"name":"texture_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.OqUx8AL2A1AczqKW0GhLkq127WNAu8C/category_backgrounds/texture_02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".OqUx8AL2A1AczqKW0GhLkq127WNAu8C","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.OqUx8AL2A1AczqKW0GhLkq127WNAu8C/category_backgrounds/texture_02.png"},"b9c8323f-482c-482f-87f6-a7d9f6f708d2":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"d4dd78fe-04d3-4c97-addb-9bad122eb223":{"name":"ground_stone_broken_1","sourceUrl":null,"frameSize":{"x":100,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"qts0mrgPRCIou5ARW4I3gHfBU2LX7XHz","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":25},"rootRelativePath":"assets/d4dd78fe-04d3-4c97-addb-9bad122eb223.png"},"6523689c-ba28-479e-b845-20475a680da8":{"name":"ore_coal_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EXwnEiZdteOE6ff6APB3RBor0vYegUVU/category_video_games/ore_coal.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"EXwnEiZdteOE6ff6APB3RBor0vYegUVU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EXwnEiZdteOE6ff6APB3RBor0vYegUVU/category_video_games/ore_coal.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backgroundSprite = createSprite(200, 200);
backgroundSprite.setAnimation("space_1");



var ball=createSprite(200,200,20,20);
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

var gameState="serve";
var paddle=createSprite(200,390,100,20);
paddle.setAnimation("ground_stone_broken_1");

createEdgeSprites();

var score=0;

function draw() {
  background("white");
  
  paddle.x=World.mouseX;
  
  drawSprites();
if (gameState == "serve") {
textSize(20); 
fill("blue");
text("¡Hola! presiona ENTER para comenzar.",25,250);
  }
  
    
if (keyDown("ENTER")) {
ball.velocityX=2;
ball.velocityY=15;
gameState = "play";
}
if (ball.isTouching(bottomEdge)|| score == 16) {
gameState="end";
}


if (gameState == "end") {
ball.velocityX=0;
ball.velocityY=0;
textSize(20);
stroke("red");
text("Fin del juego." ,150,250);
}


ball.bounceOff(topEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(paddle);


  
  if (ball.isTouching(box1)) {
  box1.destroy();
  playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score = score+1;
  }
if (ball.isTouching(box2)) {
  box2.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score = score+1;
}
if (ball.isTouching(box3)) {
  box3.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box4)) {
  box4.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box5)) {
  box5.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box6)) {
  box6.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box7)) {
  box7.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box8)) {
  box8.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box9)) {
  box9.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box10)) {
  box10.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box11)) {
  box11.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}  
if (ball.isTouching(box12)) {
  box12.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
if (ball.isTouching(box13)) {
  box13.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}  
if (ball.isTouching(box14)) {
  box14.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}  
if (ball.isTouching(box15)) {
  box15.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
} 
if (ball.isTouching(box16)) {
  box16.destroy();
   playSound("assets/category_hits/puzzle_game_button_02.mp3", false);
  score=score+1;
}
 
 
 
 
  
}
 function reset() {
  ball.x=200;
  ball.y=200;
  ball.velocityX=0;
  ball.velocityY=0;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
