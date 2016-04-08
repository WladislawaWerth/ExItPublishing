console.log("publications.js loaded!!!"); 

$(document).ready(function(){
    
    
    
    
    $('#publications #portfolio>div>divimg').mouseleave(function(){
        $(this).siblings().animate({
            opacity: '0',
            right: '0'
        },{
            duration: 1000
        });
    });
        
    
    
    
});




ArrayList<Particle> particles = new ArrayList<Particle>();
float len = 10;
float numParticles = 20;
for(int i=0; i < numPoints; i++) {
    Particle particle=new Particle(i*len,10);
    physics.addParticle(particle);
    particles.add(particle);
}

if (i !=0){
    Particle previous = particles.get(i-1);
    VerletSpring2D spring = new VerletSpring2D(particle,previous,len,strength);
    physics.addSpring(spring);
}

Particle head=particles.get(0);
head.lock();

stroke(0);
noFill();
beginShape();
for (Particle p : particles) {
  vertex(p.x,p.y);
    }
endShape();
Particle tail = particles.get(numPoints-1);
tail.display();



class Node extends VerletParticle2D {
  Node(Vec2D pos) {
    super(pos);
  }

  void display() {
    fill(0,150);
    stroke(0);
    ellipse(x,y,16,16);
  }
}

class Cluster {

  ArrayList<Node> nodes;

  // We’ll use this variable for the rest
  // length between all the nodes.
  float diameter;

  Cluster(int n, float d, Vec2D center) {
    nodes = new ArrayList<Node>();
    diameter = d;

    for (int i = 0; i < nodes.size()-1; i++) {
        VerletParticle2D ni = nodes.get(i);
      //[offset-down] Here’s a funny little detail.  We’re going to have a problem
      // if all the Node objects start in exactly the same location.
      // So we add a random vector to the center location so that each
      // Node is slightly offset.
      nodes.add(new Node(center.add(Vec2D.randomVector())));
         for (int j = i+1; j < nodes.size(); j++) { //[bold]
        VerletParticle2D nj = nodes.get(j);
              physics.addSpring(new VerletSpring2D(ni,nj,diameter,0.01));
      }
    }
      import toxi.geom.*;
import toxi.physics2d.*;

VerletPhysics2D physics;
Cluster cluster;

void setup() {
  size(300,300);
  physics=new VerletPhysics2D();
  //[offset-down] Make a cluster.
  cluster = new Cluster(8,100,new Vec2D(width/2,height/2));
}

void draw() {
  physics.update();
  background(255);
  // Draw the cluster.
  cluster.display();
}



    }
  }

