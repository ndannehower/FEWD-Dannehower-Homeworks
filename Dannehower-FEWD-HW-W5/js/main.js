$(document).ready(function() {
	var city; 

// when a user types into the text box and clicks the button, it will enable the following if/else statements
		$( "#submit-btn" ).click(function( event ) {
 		event.preventDefault();
// store user submitted text as a string value and the variable "city"
 		city = $( "#city-type" ).val();
 		console.log(city);
// if user submits New York or NYC then a background picture of New York City will be displayed
 			if (city === "New York" || city === "NYC") {
 				$('body').css('background','url(images/nyc.jpg)');
 			}
// if user submits San Francisco or SF or Bay Area then a background picture of San Francisco will be displayed
 			else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
 				$('body').css('background','url(images/sf.jpg)');
 			}
// if user submits Los Angeles or LA or LAX then a background picture of Los Angeles will be displayed
 			else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
 				$('body').css('background','url(images/la.jpg)');
 			}
// if user submits Austin or ATX then a background picture of Austin will be displayed
 			else if (city === "Austin" || city === "ATX") {
 				$('body').css('background','url(images/austin.jpg)');
 			}
// if user submits Sydney or SYD then a background picture of Sydney will be displayed
 			else if (city === "Sydney" || city === "SYD") {
 				$('body').css('background','url(images/sydney.jpg)');
 			}
 	});		
});