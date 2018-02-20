var randoColor;

// Define variables for boxes
var boxes = document.getElementsByClassName("box");

// loop through boxes
for (var i = 0; i < boxes.length; i++) {
	// assign each box an ID
	boxes[i].id = "box" + i.toString();

	// add color to each box individually
	randoColor = 	'rgb(' + 
									(Math.floor(Math.random() * 256)) + ',' +
									(Math.floor(Math.random() * 256)) + ',' +
									(Math.floor(Math.random() * 256)) + ')'

	console.log(i)
	console.log(boxes[i])
	console.log(randoColor);

	boxes[i].style.backgroundColor = randoColor;

	box = document.getElementById("box" + i.toString())
	box.addEventListener("click", function() {
		this.style.backgroundColor = 'red';
		// console.log(i)
		console.log(this.id)
	})
}
