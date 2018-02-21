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
	theColor = boxes[(Math.floor(Math.random() * 5))].style.backgroundColor

	box = document.getElementById("box" + i.toString())
	box.addEventListener("click", function() {
		console.log(this.style.backgroundColor)
		// console.log(i)
		console.log(this.id)

		if (this.style.backgroundColor ==  theColor) {
			console.log("Correct!")

			// loop through boxes
			for (var i = 0; i < boxes.length; i++) {
				boxes[i].style.backgroundColor = theColor;
			}
		} else {
			console.log("Nope!")
			this.style.backgroundColor = 'red';
		}


	})
}
