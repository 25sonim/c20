var fixobj, movingobj


function setup() {
    createCanvas(800, 400);
    fixobj = createSprite(200, 200, 50, 80)
    movingobj = createSprite(600, 200, 80, 30)

    fixobj.shapeColor = "green"
    movingobj.shapeColor = "green"

    fixobj.debug = true
    movingobj.debug = true
}

function draw() {
    background("black");
    movingobj.x = World.mouseX
    movingobj.y = World.mouseY

    if (fixobj.x - movingobj.x < fixobj.width / 2 + movingobj.width / 2 &&
        movingobj.x - fixobj.x < fixobj.width / 2 + movingobj.width / 2 &&
        fixobj.y - movingobj.y < fixobj.height / 2 + movingobj.height / 2 &&
        movingobj.y - fixobj.y < fixobj.height / 2 + movingobj.height / 2) {
        fixobj.shapeColor = "red"
        movingobj.shapeColor = "red"
    } else {
        fixobj.shapeColor = "green"
        movingobj.shapeColor = "green"
    }

    drawSprites();
}