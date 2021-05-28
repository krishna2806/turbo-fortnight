sng="";
sng2="";
sng1status="";
sng2status="";
lwx="";
lwy="";
rwx="";
rwy="";
lws="";
rws="";
function preload(){
sng=loadSound("music.mp3")
sng2=loadSound("music2.mp3")
}
function setup(){
canvas=createCanvas(400, 400)
canvas.center();
v=createCapture(VIDEO)
v.hide();
pnet=ml5.poseNet(v ,ld)
pnet.on('pose' ,rsult)
}
function ld(){
console.log("model posenet loaded hank")
}
function rsult(r){
if(r.length>0){
console.log(r)
lwx=r[0].pose.leftWrist.x;
lwy=r[0].pose.leftWrist.y;
console.log("left x=" + lwx + "left y=" + lwy)
lws=r[0].pose.keypoints[9].score;
rwx=r[0].pose.rightWrist.x;
rwy=r[0].pose.rightWrist.y;
console.log("right x=" + rwx + "right y=" + rwy)
rws=r[0].pose.keypoints[10].score;
}
}
function draw(){
image(v,0,0,400,400)

fill("FFFFFF")
stroke("FFFFFF")
sng1status=sng.isPlaying();
sng2status=sng2.isPlaying();

if(lws>0.2){
circle(lwx,lwy,20)

sng2.stop();
if(sng1status==false){
sng.play();
document.getElementById("song").innerHTML="harry potter"
}
}
if(rws>0.2){
	circle(rwx,rwy,20)
	
	sng.stop();
	if(sng2status==false){
	sng2.play();
	document.getElementById("song").innerHTML="peter pan"
	}
	}
}
function play()
{
	sng.play();
	sng.setVolume(1);
	sng.rate(1);
}

