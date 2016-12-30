console.log("index.js loaded"); 

//var circle = {
//    x:0,
//    y:200,
//    diameter: 50
//}

var spot = {
    x: 100,
    y: 50,
    r: 0
}

var col = {
    r: 255,
    g: 0,
    b: 0,
    a: 0
}

function setup(){
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent("p5Canvas");
    background(255);
    noStroke();
}

function draw(){
    spot.x = random(0, width);
    spot.y = random(0, height);
    spot.r = random(5, 200); // controls size of spot
    
    col.r = random(100,106);// next three choose colors
    col.g = random(210,38);
    col.b = random(200,255);
    col.a = random(3,10); // controls opacity 
    
    fill(col.r, col.g, col.b, col.a);
    ellipse(spot.x, spot.y, spot.r, spot.r);
}



