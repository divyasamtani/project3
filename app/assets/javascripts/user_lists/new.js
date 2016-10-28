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
														'<input name="restaurant[]" placeholder="Restaurant" type="text" class="validate">' +
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
