var img;
function setup(){
  createCanvas(1370, 390, WEBGL);
    img = loadImage("img/lllogo.png");
}

function draw(){
  
  var radius = width * 0.65;
  
  //drag to move the world.
  orbitControl();
    
  

  ambientMaterial(255);
    background(255);
  translate(0, 0, -600);
  for(var i = 0; i <= 12; i++){
    for(var j = 0; j <= 12; j++){
      push();
      var a = j/12 * PI;
      var b = i/12 * PI;
      translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2 , cos(2 * a) * radius * sin(b));    
      if(j%2 === 0){
          
          texture(img);
        box(35, 35, 35);
         
      }else{
          
          texture(img);
        box(25, 25, 25);
          
      }
      pop();
    }
  }
}

