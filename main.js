// Define variable for random color
var randoColor;
// Define variables for boxes
var boxes 				= document.getElementsByClassName("box");
// Define variable for difficulty;
var currentDif 		= "hard";
// Define variables difficulty rows
var medDifRow 		= document.getElementById("medDif");
var harDifRow 		= document.getElementById("harDif");
// Define variables for the headers
var titleHeader 	= document.getElementById("title");
var commentary 		= document.getElementById("commentary");
// Define an array of comments for incorrect selection
var incComments = ["Nope!", "Not that one...", "That's not right.", "Sorry. Keep trying."]


// Function for loading the game
var loadGame = function() {
	// reset the headers
	titleHeader.innerHTML = "Color Picker Game";
	commentary.innerHTML = "Think you know of which color I'm thinking? Pick one.";

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

		// Assign each of the boxes a random color
		boxes[i].style.backgroundColor = randoColor;

		// Select the color of one random box to be the winning color
		// based on current difficulty
		if (currentDif == "hard") {
			theColor = boxes[(Math.floor(Math.random() * 8))].style.backgroundColor;
		} else if (currentDif == "medium") {
			theColor = boxes[(Math.floor(Math.random() * 5))].style.backgroundColor;
		} else if (currentDif == "easy") {
			theColor = boxes[(Math.floor(Math.random() * 2))].style.backgroundColor;
		}

		box = document.getElementById("box" + i.toString());
		box.addEventListener("click", function() {

			// Check to see if color matches winning color
			if (this.style.backgroundColor == theColor) {
				// Change commentary header when correctly chosen
				commentary.innerHTML = "Correct!";

				// loop through boxes
				for (var i = 0; i < boxes.length; i++) {
					// change color of all boxes to winning color
					boxes[i].style.backgroundColor = theColor;

					// Remove fadeOut and add fadeIn
					boxes[i].classList.remove("fadeOut");
					boxes[i].classList.add("fadeIn");
				}
			} else { // If color does not match winning color
				// Change commentary header when incorrectly chosen
				commentary.innerHTML = incComments[Math.floor(Math.random() * incComments.length)];

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
	// Just Reload the whole game
	loadGame();
});

// Difficulty button behavior
var difBtn = document.getElementById("difBtn");
difBtn.addEventListener("click", function() {
	if (currentDif == "hard") {
		currentDif = "medium";
		harDifRow.classList.remove("showRow");
		harDifRow.classList.add("hideRow");
	} else if (currentDif == "medium") {
		currentDif = "easy";
		medDifRow.classList.remove("showRow");
		medDifRow.classList.add("hideRow");
	} else if (currentDif == "easy") {
		currentDif = "hard"
		medDifRow.classList.remove("showRow");
		harDifRow.classList.remove("showRow");
		medDifRow.classList.add("showRow");
		harDifRow.classList.add("showRow");
	}
	loadGame();
})

// Hint button functionality
var hintBtn = document.getElementById("hintBtn");
hintBtn.addEventListener("click", function() {
	titleHeader.innerHTML = theColor.toString();
})