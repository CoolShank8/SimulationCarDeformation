var weight, speed

var car
var wall

function setup() {


  speed = random(55,120)
  weight = random(400,1500)

  console.log("Car speed is " + speed)

  console.log("Car weight is " +  weight)

  wall = createSprite(1500,200,60, height/2)

  car = createSprite(50,200,50,50)
  car.velocityX = speed

  

  createCanvas(1600,400);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if (Collide(wall, car))
  {
    var Deformation = (0.5 * speed * speed * weight)/22500
    console.log("Amount of damage caused is " +  Deformation)

    text("Speed: " + speed,1200,200)
    text("Weight: " + weight,1200,400)

    if (Deformation < 100)
    {
     // console.log("cool")
      car.shapeColor = "Green"
    }

    else if (Deformation > 99 && Deformation < 181)
    {
     // console.log("cool")
      car.shapeColor = "Yellow"
    }

    else if (Deformation > 180)
    {
     // console.log("cool")
      car.shapeColor = "Red"
    }

  }
}


function Collide(Object1, Object2)
{
  if (Object1.x - Object2.x < Object1.width/2 + Object2.width/2 && Object2.x - Object1.x < Object1.width/2 + Object2.width/2 
    && Object1.y - Object2.y < Object1.height/2 + Object2.height/2 
    && Object2.y - Object1.y < Object1.height/2 + Object2.height/2 )
  {
    car.velocityX = 0;
    return true
  }

  else 
  {
    return false
  }
}

function bounceOff(Object1, Object2)
{
  if (Object1.x - Object2.x < Object1.width/2 + Object2.width/2 && Object2.x - Object1.x < Object1.width/2 + Object2.width/2)
  {
    Object1.velocityX = Object1.velocityX * (-1)
    Object2.velocityX = Object2.velocityX * (-1)
  }

  if (Object1.y - Object2.y < Object1.height/2 + Object2.height/2 && Object2.y - Object1.y < Object1.height/2 + Object2.height/2)
  {
    Object1.velocityY = Object1.velocityY * (-1)
    Object2.velocityY = Object2.velocityY * (-1)
  }
  
}
