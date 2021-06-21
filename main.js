function preload() {

}

function setup() {
    canvas= createCanvas(650,400);
    canvas.position(110,300);
    video = createCapture(VIDEO); //used to trigger cameras in p5.js
    video.hide();
    tintcolor = " ";
}

function applyfilter() {
    tintcolor = document.getElementById("option").value;
}

function draw() {
    image(video,0,0,650,400);
    tint(tintcolor);

}

function take_snapshot() {
    save("my_filter.png");
}