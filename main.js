function preload()
{
    
}

function setup()
{
    Canvas=createCanvas(900,500)
    Canvas.position(250,100)
    video=createCapture(VIDEO)
    video.hide()
}

function draw()
{
    image(video,200,50,500,400)
    fill(20,20,100)
    circle(50,50,100,100)
    circle(150,150,100,100)
    circle(50,250,100,100)
    circle(150,350,100,100)
    circle(50,450,100,100)
    circle(850,50,100,100)
    circle(750,150,100,100)
    circle(850,250,100,100)
    circle(750,350,100,100)
    circle(850,450,100,100)
    fill(100,0,0)
    rect(101,25,700,25)
    rect(101,450,700,25)
}

function take_snapshot()
{
    save('picture.png')
}