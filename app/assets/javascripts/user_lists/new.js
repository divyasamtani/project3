<<<<<<< HEAD
$('.user_lists.new').ready(function(){
	// Limit input fields, user can add.
	const MAXINPUTFIELD = 10;

	// Tracks user input field.
	var countInputField = 1;

	var arrInputField = [];

	var wrapper = $('.input-wrapper-field');

	// Add new restaurant form.
	$('#addInputButton').on('click', function(e) {
		e.preventDefault();

		if (countInputField < MAXINPUTFIELD) {
			wrapper.append('<div class="row">'+
												'<div class="input-field col s12">' +
													'<div class="col s11">' +
														'<input name="restaurant[' + countInputField + ']" placeholder="Restaurant" type="text" class="validate">' +
													'</div>' +
													'<div class="col s1">' +
														'<a class="removeInputButton btn-floating btn waves-effect waves-light red">'+
															'<i class="fa fa-minus"></i>' +	
														'</a>' +
													'</div>' +
												'</div>' +
											'</div>');
			countInputField++;
		}
	});

	// title=a &
	// description=b &
	// restaurant%5B0%5D=ccc &
	// restaurant%5B1%5D=ddd &
	// restaurant%5B2%5D=eee &
	// restaurant%5B3%5D=fff

	// Remove functionality
	$('body').on('click', 'a.removeInputButton', function(e) {
		e.preventDefault();
		$(this).parent('div').parent('div').parent('div').remove();
		countInputField--;
	});

	$('#submitList').on('click', function(e) {

		console.log(arrInputField);
	});
});
=======
// $('.user_lists.new').ready(function(){
// 	// Limit input fields, user can add.
// 	var MAXINPUTFIELD = 10;
// 	// Tracks user input field.
// 	var countInputField = 1;

// 	var wrapper = $('.input-wrapper-field');

// 	$('#addInputButton').on('click', function(e) {
// 		e.preventDefault();

// 		if (countInputField <= MAXINPUTFIELD) {
// 			wrapper.append('<div id="restaurantInput' + countInputField + '" class="row">'+
// 												'<div class="input-field col s12">' +
// 													'<div class="col s11">' +
// 														'<input placeholder="Restaurant" class="restaurant" type="text" class="validate">' +
// 													'</div>' +
// 													'<div class="col s1">' +
// 														'<a class="removeInputButton btn-floating btn waves-effect waves-light red">'+
// 															'<i class="fa fa-minus"></i>' +
// 														'</a>' +
// 													'</div>' +
// 												'</div>' +
// 										'</div>');
// 		}
// 		countInputField++;
// 	});

// 	$('body').on('click', 'a.removeInputButton', function(e) {
// 		e.preventDefault();
// 		$(this).parent('div').parent('div').parent('div').remove();
// 		countInputField--;

// 	$('#addInputButton').on('click', function() {
// 		console.log("test");
// 	});
// });
>>>>>>> a87bbfa9ba6dd9afef7c989784c2a31078f31efc
