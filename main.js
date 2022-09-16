function preload(){

}
function setup(){
    canvas = createCanvas(500,500)
    canvas.position();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    fill("#FF0000");
    stroke("#FF0000");
    circle(50, 50, 50);
    fill("#FF0000");
    stroke("#FF0000");
    circle(50, 50, 50);
    fill("#009dff");
    stroke("#009dff");
    rect(36, 70, 30, 385);
    fill("#FF0000");
    stroke("#FF0000");
    circle(50, 450, 50);
    fill("#009dff");
    stroke("#009dff");
    rect(72, 33, 385, 30);
    fill("#FF0000");
    stroke("#FF0000");
    circle(50, 50, 50);
    fill("#FF0000");
    stroke("#FF0000");
    circle(448, 50, 50);
    fill("#009dff");
    stroke("#009dff");
    rect(434, 70, 30, 385);
    fill("#FF0000");
    stroke("#FF0000");
    circle(448, 50, 50);
    fill("#FF0000");
    stroke("#FF0000");
    circle(448, 450, 50);
    fill("#009dff");
    stroke("#009dff");
    rect(72, 437, 355, 30);
    fill("#FF0000");
    stroke("#FF0000");
    circle(50, 450, 50);
    fill("#FF0000");
    stroke("#FF0000");
    circle(448, 450, 50);

    image(video,75,76,350,350)
}
function take_snapshot(){
    snapshot("img.png");
}