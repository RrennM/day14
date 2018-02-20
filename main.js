// Define variables for boxes
var boxes = document.getElementsByClassName("box");
console.log(boxes.length);

var randoColor;

// recognize when a box is clicked
for (var i = 0; i < boxes.length; i++) {
// add color to each box individually
	randoColor = 	'rgb(' + 
									(Math.floor(Math.random() * 256)) + ',' +
									(Math.floor(Math.random() * 256)) + ',' +
									(Math.floor(Math.random() * 256)) + ')'

	console.log("Hello!")
	console.log(i)
	console.log(randoColor);

	boxes[i].style.backgroundColor = randoColor;

	boxes[i].addEventListener("click", function() {
		console.log("Box No. " + i)
	})
}

