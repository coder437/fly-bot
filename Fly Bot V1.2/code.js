var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2f6f31ac-62f2-4bb0-afe0-bab15c08f7a5","e321fa99-7d1c-4b68-8246-ce268be67ee3","e4e26d2f-3df2-4d71-b592-f204eff44e6f","ce09914a-f1bc-482b-b825-c9f17e0b20c4","6576cb74-e1d5-4631-ae38-70172f2975c2","9ad8c10a-dd20-4984-81e2-df09a5967204","06ff02f6-f8c1-4dd6-bd6f-db70789d26a1","0fe18560-e188-41a5-bbb4-ff80b8897df7"],"propsByKey":{"2f6f31ac-62f2-4bb0-afe0-bab15c08f7a5":{"name":"fly_bot","sourceUrl":null,"frameSize":{"x":122,"y":121},"frameCount":2,"looping":true,"frameDelay":3,"version":"vSXN09K18AuDzn7fSwjtXohYhR69o7id","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":242},"rootRelativePath":"assets/2f6f31ac-62f2-4bb0-afe0-bab15c08f7a5.png"},"e321fa99-7d1c-4b68-8246-ce268be67ee3":{"name":"fly_bot_fast","sourceUrl":null,"frameSize":{"x":122,"y":121},"frameCount":2,"looping":true,"frameDelay":12,"version":"mOT1dFPrZGsMfWhpyj084UAabeHhEyUw","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":242},"rootRelativePath":"assets/e321fa99-7d1c-4b68-8246-ce268be67ee3.png"},"e4e26d2f-3df2-4d71-b592-f204eff44e6f":{"name":"fly_bot_damaged","sourceUrl":null,"frameSize":{"x":122,"y":122},"frameCount":1,"looping":true,"frameDelay":10,"version":"Wek9l..ktkGk0ZWA4O_4PNB1gItec6hI","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":122},"rootRelativePath":"assets/e4e26d2f-3df2-4d71-b592-f204eff44e6f.png"},"ce09914a-f1bc-482b-b825-c9f17e0b20c4":{"name":"blank","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MZDlmpjGAgfbIpK1TY2SzSdpkqlGKjR8","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ce09914a-f1bc-482b-b825-c9f17e0b20c4.png"},"6576cb74-e1d5-4631-ae38-70172f2975c2":{"name":"underground_1","sourceUrl":"assets/api/v1/animation-library/gamelab/fOWQC3tW8_R2cBvdC4CgkgCyiFm3W4Fu/category_backgrounds/underground.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"fOWQC3tW8_R2cBvdC4CgkgCyiFm3W4Fu","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fOWQC3tW8_R2cBvdC4CgkgCyiFm3W4Fu/category_backgrounds/underground.png"},"9ad8c10a-dd20-4984-81e2-df09a5967204":{"name":"spring_bot","sourceUrl":null,"frameSize":{"x":111,"y":141},"frameCount":1,"looping":true,"frameDelay":12,"version":"bif8nidkjLLLc24u87YqI1zK4BtJ6vGD","loadedFromSource":true,"saved":true,"sourceSize":{"x":111,"y":141},"rootRelativePath":"assets/9ad8c10a-dd20-4984-81e2-df09a5967204.png"},"06ff02f6-f8c1-4dd6-bd6f-db70789d26a1":{"name":"coin","sourceUrl":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png","frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":2,"version":"dZ98jetKnt5ZogX102g5XO3252U0D8oc","loadedFromSource":true,"saved":true,"sourceSize":{"x":516,"y":86},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png"},"0fe18560-e188-41a5-bbb4-ff80b8897df7":{"name":"coin_fast","sourceUrl":null,"frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":5,"version":"KCa4ZTdXBCSZxfMyVtGpE6sSeUs5f_t0","loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":258},"rootRelativePath":"assets/0fe18560-e188-41a5-bbb4-ff80b8897df7.png"}}};
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




World.frameRate = 35;

stopSound();

playSound("assets/category_loops/faultering_desicion_loop1.mp3", true);

var back_ground = createSprite(200, 200);
back_ground.setAnimation("underground_1");
back_ground.scale = 1;

createEdgeSprites();

var ds = 0;

var d = 0;

var h = 0;

var s = 0;

var ts = 0;

var t = 0;

var as = 0;

var score = 0;

var high_score = 0;

var coin = createSprite(randomNumber(15, 385),randomNumber(15, 385));
coin.setAnimation("coin");
coin.setCollider("circle");
coin.scale = 0.35;

var fly_bot = createSprite(200, 20);
fly_bot.setAnimation("fly_bot");
fly_bot.bounciness = 0.2;
fly_bot.scale = 0.3; 

var sprite = createSprite(200, 160);
sprite.setAnimation("spring_bot");
sprite.scale = 0.3;
sprite.velocityY = 0;
sprite.velocityX = 3;

var start_screen = createSprite(200, 200);


function draw() {
  if (t >= 1) {
  if (d == 1) {
  if (ds == 0) {
    playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
  }
  if (keyDown("space")) {
    stopSound();
    playSound("assets/category_loops/faultering_desicion_loop1.mp3", true);
    restart();
  }
  }
  }
  if (h == 1) {
   if (d == 0) {
    fly_bot.setAnimation("fly_bot_fast");
    coin.setAnimation("coin_fast");
   }
  }
  strokeWeight(3);
  
  
  as = ts / t;
  
  if (d == 1) {
    if (ds == 0) {
    stopSound();
    playSound("assets/category_loops/faultering_desicion_loop1.mp3", true);
    if (keyDown("space")) {
      restart();
    }
  }
  }
edges_effect();

  
  if (keyDown(UP_ARROW)) {
    if (d == 0) {
    fly_bot.velocityY = fly_bot.velocityY - 0.8;
    }
  }
  
  if (keyDown(RIGHT_ARROW)) {
    if (d == 0) {
      fly_bot.velocityX = fly_bot.velocityX + 0.25;
    }
  }
  
  if (keyDown(LEFT_ARROW)) {
    if (d == 0) {
      fly_bot.velocityX = fly_bot.velocityX - 0.25;
    }
  }
  if (sprite.isTouching(coin)) {
    if (d == 0) {
      if (h == 1) {
      playSound("assets/category_hits/retro_game_hit_block_3.mp3", false);
      score = score - 1;
    ts = ts - 1;
    coin.x = randomNumber(15, 385);
    coin.y = randomNumber(15, 385);
    if (coin.isTouching(sprite)) {
    coin.x = randomNumber(15, 385);
    coin.y = randomNumber(15, 385);
    }
    if (coin.isTouching(fly_bot)) {
    coin.x = randomNumber(15, 385);
    coin.y = randomNumber(15, 385);
    }
    }
    }
  }
  if (fly_bot.isTouching(coin)) {
    if (t >= 1) {
    if (d == 0) {
    playSound("assets/category_collect/vibrant_game_coin_1.mp3", false);
    score = score + 1;
    ts = ts + 1;
    coin.x = randomNumber(15, 385);
    coin.y = randomNumber(15, 385);
    if (score > high_score) {
    high_score = score;
    }
    }
  }
  }
  
  
  // Simulating Gravity
  fly_bot.velocityY = fly_bot.velocityY + 0.3;
  sprite.velocityY = sprite.velocityY + 0.3;
  if (sprite.isTouching(bottomEdge)) {
    sprite.velocityY = -12;
  }
if (sprite.isTouching(rightEdge)) {
    sprite.velocityX = -3;
    }
if (sprite.isTouching(leftEdge)) {
  sprite.velocityX = 3;
}

  if (fly_bot.velocityX > 0) {
    fly_bot.velocityX = fly_bot.velocityX - 0.03;
  }
  if (fly_bot.velocityX < 0) {
    fly_bot.velocityX = fly_bot.velocityX + 0.03;
  }
  
  if (d == 1) {
    fly_bot.setAnimation("fly_bot_damaged");
    ds = 1;
  }

  if (fly_bot.isTouching(sprite)) {
  if (t >= 1) {
  d = 1;
  fly_bot.bounceOff(sprite);
 }
}
  
  drawSprites();
  if (d == 1) {
    you_died();
    fill ("white");
  } else {
  fill ("gray");
}
  stroke ("black");
  text ("HIGH SCORE: " + high_score, 90, 15);
  text("SCORE: " + score, 5, 15);

  if (s == 0) {
    start_screen.setAnimation("underground_1");
    drawSprites();
    textFont ("bold");
    fill ("gold");
    textSize (50);
    text ("Fly Bot", 115, 200);
    textFont ("georgia");
    textSize (10);
    noStroke();
    fill ("black");
    text ("You are fly bot, you need to collect your coins before spring bot destroys you.", 31, 285);
    text ("In hard mode spring bot can collect your coins.", 98, 300);
    text ("Arrow keys to move.", 155, 315);
    fill ("limegreen");
    stroke ("black");
    textSize (15);
    text ("Press space to start.", 135, 350);
    fill ("red");
    text ("Press shift to start in hard mode.", 92, 370);
    if (keyWentDown("shift")) {
      stopSound();
      playSound("assets/category_loops/misguided_rabbit_chase_minimal_loop.mp3", true);
      h = 1;
      s = 1;
      restart();
      start_screen.setAnimation("blank");
    }
    if (keyWentDown("space")) {
      stopSound();
      playSound("assets/category_loops/pulsating_discovery_loop1.mp3", true);
      h = 0;
      s = 1;
      restart();
      start_screen.setAnimation("blank");
    }
  }
  if (h == 1) {
    World.frameRate = 100;
    h = 1;
  }
}

function edges_effect() {
if (d == 1) {
  fly_bot.collide(topEdge);
  fly_bot.collide(rightEdge);
  fly_bot.collide(leftEdge);
} else {
  fly_bot.collide(topEdge);
  fly_bot.collide(rightEdge);
  fly_bot.collide(leftEdge);
  fly_bot.collide(bottomEdge);
}
}

function restart() {
  stopSound();
  drawSprites();
  
  if (h == 0) {
    playSound("assets/category_loops/pulsating_discovery_loop1.mp3", true);
  } else {
    playSound("assets/category_loops/misguided_rabbit_chase_minimal_loop.mp3", true);
  }
  
  d = 0;
    
  ds = 0;
  
  t = t + 1;
  
  fly_bot.setAnimation("fly_bot");
  fly_bot.x = 200;
  fly_bot.y = 20;
  fly_bot.velocityX = 0;
  fly_bot.velocityY = 0;
  
  coin.x = randomNumber(15, 385);
  coin.y = randomNumber(15, 385);
  
  sprite.x = 200;
  sprite.y = 160;
  sprite.velocityX = 3;
  sprite.velocityY = 0;
  
  score = 0;
}

function you_died() {
  stroke ("black");
  textFont ("BOLD");
    fill ("red");
    textSize (30);
    text ("YOU DIED", 118, 205);
    textFont ("arial");
    text ("!", 268, 205);
    textFont("georgia");
    textSize (15);
    fill ("limegreen");
    text ("Press space to restart.", 125, 250);
    text ("Average score per try: " + Math.round(as), 121, 275);
}











































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































//Hi.

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
