// Define variables for boxes
var boxes = document.getElementsByClassName("box");
console.log(boxes.length);

// recognize when a box is clicked
for (var i = 0; i < boxes.length; i++) {
	console.log("Hello!")

	boxes[i].addEventListener("click", function() {
		console.log("You clicked me!")
	})
}

// add color to each box individually
var randoColor = (Math.floor(Math.random() * 256))
console.log(randoColor);