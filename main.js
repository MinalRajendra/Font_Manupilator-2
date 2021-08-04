textX=0;
textY=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}

function modelloaded(){
    console.log("model is loaded");
}