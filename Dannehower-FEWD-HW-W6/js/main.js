$(document).ready(function() {
// set input variable for if/else
	var city;
// set array
	var cityOption = ["NYC", "SF", "LA", "ATX", "SYD"]; 

// set loop
		for(var i=0; i<5; i++) {
// set variable for option so we can add to it 
		var option = $("<option></option>")
// add theoretical option and content from array
		option.append($("<option>" + cityOption [i] + "</option>"))
// tell where in the html the option should be added
		$("#city-type").append(option)
	}

// add an event listener for the change
		$( "#city-type" ).change(function() {
// store user's selection as a string value and the variable "city"
 		city = $("#city-type").val();
 		console.log(city);


// if user selects NYC then a background picture of New York City will be displayed
 			if (city === "NYC") {
 				$('body').css('background','url(images/nyc.jpg)');
 			}
// if user selects SF then a background picture of San Francisco will be displayed
 			else if (city === "SF") {
 				$('body').css('background','url(images/sf.jpg)');
 			}
// if user selects LA then a background picture of Los Angeles will be displayed
 			else if (city === "LA") {
 				$('body').css('background','url(images/la.jpg)');
 			}
// if user selects ATX then a background picture of Austin will be displayed
 			else if (city === "ATX") {
 				$('body').css('background','url(images/austin.jpg)');
 			}
// if user selects SYD then a background picture of Sydney will be displayed
 			else if (city === "SYD") {
 				$('body').css('background','url(images/sydney.jpg)');
 			}
 	});		
});