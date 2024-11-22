var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noFill();
	stroke(0);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    rect(280, 100, 300, 550); // Example coordinates: adjust x, y, width, height as needed
}
