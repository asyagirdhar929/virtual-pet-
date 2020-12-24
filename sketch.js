//Create variables here
var dog,dog1,happydog1,happydog,database,foodS,foodStock;
function preload()
{

  //load images here
  dog1=loadImage("images/dog.png");
  happydog1=loadImage("images/happydog.png");  
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  console.log(firebase);
  
var dog=createSprite(250,300,10,10);
dog.addImage(dog1);
dog.scale=0.1;
 
foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
if (keyDown(UP_ARROW))
{ writeStock(foodS);
  dog.addImage(happydog1);
}


  drawSprites();
  //add styles here
  fill("pink");
  textSize(20);
  text("Food Left:"+ foodS,150,100);
  textSize(30);
}

function writeStock()
{
  if (x<=0){
    x=0;
  }else{
x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function readStock(data){
  foodS=data.val();
}

