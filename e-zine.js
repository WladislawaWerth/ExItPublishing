var img;
function setup(){
  createCanvas(1370, 500, WEBGL);
    img = loadImage("img/lllogo.png");
}

function draw(){
  
  var radius = width * 0.8;
  
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
        box(8, 8, 8);
         
      }else{
          
          texture(img);
        box(9, 9, 9);
          
      }
      pop();
    }
  }
}

