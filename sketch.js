var bullet, wall, speed, weight, thickness;


function setup() {
    createCanvas(1600,400);
    speed = random(223, 321);
    weight = random(30, 52);
    thickness = random(22, 83)
    bullet = createSprite(50, 200, 50, 10);
    bullet.shapeColor = "white";
    wall = createSprite(1200, 200, thickness, height/2);
    wall.shapeColor = color(80, 80, 80);
    bullet.velocityX = speed;
}

function draw() {
    background(0);
    
    bounceOff(bullet, wall);
    
    text("speed:" + Math.round(speed), 50, 230);
    text("weight:" + Math.round(weight), 50, 250);
    text("damage:" + Math.round((speed ** 2) * weight / (2 * thickness ** 3)), 50, 270);

    drawSprites();
}


function bounceOff(a, b){
    if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < b.width/2 + a.width/2 && a.y - b.y < a.height/2 + b.height/2 && b.y - a.y < b.height/2 + a.height/2){
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
      if((speed ** 2) * weight / (2 * thickness ** 3) > 10){
          b.shapeColor = color(255, 0, 0);
      }

      if((speed ** 2) * weight / (2 * thickness ** 3) < 10){
          b.shapeColor = color(0, 255, 0);
      }
    }
    if(a.velocityX < 0){
        a.velocityX += a.velocityX / 190 * (-1);
    }

}