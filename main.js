// Define variable for random color
var randoColor;
// Define variables for boxes
var boxes = document.getElementsByClassName("box");
var shownBoxes = boxes.classList.contains("showRow")
// Define variable for difficulty;
var currentDif = "hard";
// Define variables difficulty rows
var medDifRow = document.getElementById("medDif");
var harDifRow = document.getElementById("harDif");


// Function for loading the game
var loadGame = function() {
	boxes = document.getElementsByClassName("box");
	console.log(boxes.length)
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].classList.contains("fadeIn")) {
			boxes[i].classList.remove('fadeIn');
			boxes[i].classList.remove('animated');
		}
		boxes[i].classList.add("fadeIn");
	}


	// loop through boxes
	for (var i = 0; i < boxes.length; i++) {

		// assign each box an ID
		boxes[i].id = "box" + i.toString();

		// add color to each box individually
		randoColor = 	'rgb(' + 
							(Math.floor(Math.random() * 256)) + ',' +
							(Math.floor(Math.random() * 256)) + ',' +
							(Math.floor(Math.random() * 256)) + ')';

		// console.log(i)
		// console.log(boxes[i])
		// console.log(randoColor);

		// Assign each of the boxes a random color
		boxes[i].style.backgroundColor = randoColor;

		// Select the color of one random box to be the winning color
		theColor = boxes[(Math.floor(Math.random() * 5))].style.backgroundColor;

		box = document.getElementById("box" + i.toString());
		box.addEventListener("click", function() {
			// console.log(this.style.backgroundColor)
			// console.log(i)
			// console.log(this.id)

			// Check to see if color matches winning color
			if (this.style.backgroundColor == theColor) {
				console.log("Correct!");
				console.log(theColor);

				// loop through boxes
				for (var i = 0; i < boxes.length; i++) {
					// change color of all boxes to winning color
					boxes[i].style.backgroundColor = theColor;

					// Remove fadeOut and add fadeIn
					boxes[i].classList.remove("fadeOut");
					boxes[i].classList.add("fadeIn");
				}
			} else { // If color does not match winning color
				console.log("Nope!");

				// Add fadeOut class effect
				this.classList.remove('fadeIn');
				this.classList.add("animated");
				this.classList.add("fadeOut");
			}


		})
	}
}

// Reset button behavior
var resetBtn = document.getElementById("resBtn");
resetBtn.addEventListener("click", function(){

	loadGame();
});

// Difficulty button behavior
var difBtn = document.getElementById("difBtn");
difBtn.addEventListener("click", function() {
	if (currentDif == "hard") {
		currentDif = "medium";
		harDifRow.classList.remove("showRow");
		harDifRow.classList.add("hideRow");
		console.log(currentDif);
	} else if (currentDif == "medium") {
		currentDif = "easy";
		medDifRow.classList.remove("showRow");
		medDifRow.classList.add("hideRow");
		console.log(currentDif);
	} else if (currentDif == "easy") {
		currentDif = "hard"
		console.log(currentDif);
		medDifRow.classList.remove("showRow");
		harDifRow.classList.remove("showRow");
		medDifRow.classList.add("showRow");
		harDifRow.classList.add("showRow");
	}
	console.log("Change Dif");
	loadGame();
})

// Working on counting only the visible elements when changing difficulties
// thought about something like adding hidden visibility to each box when changing difficulties

