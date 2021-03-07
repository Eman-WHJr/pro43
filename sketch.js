var hr, mn, sc;
var hourAngle, minAngle, secAngle; 

function setup(){
    createCanvas(400,400); 
    
    angleMode(DEGREES);   
}

function draw(){
    background("pink");
    translate(200,200)
    rotate(-90)

    hr = hour();
    mn = minute();
    sc = second();

    secAngle = map(sc, 0, 60, 0, 360);
    minAngle = map(mn,0,60,0,360)
    hourAngle = map(hr % 12,0,12,0,360)

    push();
    rotate(secAngle); 
    stroke("red");
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    push();
    rotate(minAngle);
    stroke("blue");
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    push();
    rotate(hourAngle);
    stroke("green");
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke("orange");
    point(0,0)

  
    strokeWeight(10);
    noFill();

    //Seconds
    stroke("red");
    arc(0,0,300,300,0,secAngle);
    
    //Minutes
    stroke("blue");
    arc(0,0,280,280,0,minAngle);

    //Hour
    stroke("green");
    arc(0,0,260,260,0,hourAngle);
}