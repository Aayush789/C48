var ghost,player;
var living_room_image,kitchenImage,bedroomImage,bedroom1Image,bedroom2Image,storeImage;
var ghostImage;
var level = 0;
function preload(){
  living_room_image = loadImage("living room.jpg");
  kitchenImage = loadImage("kitchen.jpg");
  bedroomImage = loadImage("bedroom.jpg");
  bathroomImage = loadImage("bathroom.jpg");
  bedroom1Image = loadImage("bedroom1.jpg");
  bedroom2Image = loadImage("bedroom2.jpg");
  storeroomImage = loadImage("storeroom.jpg");
  ghostImage = loadImage("Ghost1.png");
  playerImage = loadImage("Boy.png");
  
}

function setup() {
  createCanvas(1000,800);
  player = createSprite(500,700,30,30);
  player.scale = 0.5
  player.addImage("player",playerImage)
  ghostGroup = new Group();
}

function draw() {

  if(keyDown("UP_ARROW")) {
    player.velocityX = 0;
    player.velocityY = -5;
  }
  if(keyDown("DOWN_ARROW")) {
    player.velocityX = 0;
    player.velocityY = 5;
  }
  if(keyDown("RIGHT_ARROW")) {
    player.velocityX = 5;
    player.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")) {
    player.velocityX = -5;
    player.velocityY =  0;
  }

  if (level ===0) {
    background(living_room_image);

    spawnGhost();
    spawnGhost();
    spawnGhost();
    spawnGhost();
    spawnGhost();
    spawnGhost();
    spawnGhost();

    if(player.isTouching(ghostGroup)) {
      level = 1
      
     }
    }

    if (level ===3) {
      background(kitchenImage);

      spawnGhost();
      spawnGhost();
      spawnGhost();
      spawnGhost();
      spawnGhost();
      spawnGhost();

    if(player.isTouching(ghostGroup)) {
      level = 3
      
     }

    }

    if (level ===2) {
      background(bedroomImage);

      spawnGhost();
      spawnGhost();
      spawnGhost();
      spawnGhost();
      spawnGhost();

    if(player.isTouching(ghostGroup)) {
      level = 3
      
     }

    }

    if (level ===4) {
      background(bathroomImage);
  
      spawnGhost();
      spawnGhost();
      spawnGhost();
      spawnGhost();
      
  
      if(player.isTouching(ghostGroup)) {
        level = 5
        
       }
      }

      if (level ===5) {
        background(bedroom1Image);
    
        spawnGhost();
        spawnGhost();
        spawnGhost();
    
        if(player.isTouching(ghostGroup)) {
          level = 6
          
         }
        }

        if (level ===6) {
          background(bedroom2Image);
      
          spawnGhost();
          spawnGhost();
         
          if(player.isTouching(ghostGroup)) {
            level = 7
            
           }
          }

          if (level ===7) {
            background(storeroomImage);
        
            spawnGhost();
                  
            if(player.isTouching(ghostGroup)) {
              level = 8
              
             }
            }

  drawSprites();
}

function spawnGhost() {
  if(frameCount %60===0) {
    var ghost = createSprite(500,50,50,50);
    ghost.addImage("Ghost",ghostImage);
    ghost.scale = 0.1;
    ghost.x = random(100,900);
    ghost.y = random(100,700);
    ghost.lifetime = 50;
    ghostGroup.add(ghost);
  }
}