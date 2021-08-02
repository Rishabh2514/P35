//Create variables here
var dog,dogHappy,foodS,foodStock;
var dogs;
var database;

function preload(){
	//load images here
  dogHappy=loadImage("dogImg1.png");
  dogs=loadImage("dogImg.png");
}

function setup() {
  database=firebase.database()
  canvas=createCanvas(500, 500);
  
  dog=createSprite(420,350,20,20);
  dog.addImage(dogs)
  dog.scale=0.2

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  
  drawSprites();
  //add styles here
  textSize(2)
  text("Food Stock : "+ readStock,250,100)

  textSize(2);
  text("Note"+":"+"Press UP_Arrow Key To Feed Drago Milk")
}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

