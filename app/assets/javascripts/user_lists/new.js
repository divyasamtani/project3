$('.user_lists.new').ready(function(){
	// Limit input fields, user can add.
	var MAXINPUTFIELD = 10;
	// Tracks user input field.
	var countInputField = 1;

	var wrapper = $('.input-wrapper-field');

	$('#addInputButton').on('click', function(e) {
		e.preventDefault();

		if (countInputField <= MAXINPUTFIELD) {
			wrapper.append('<div id="restaurantInput' + countInputField + '" class="row">'+
												'<div class="input-field col s12">' +
													'<div class="col s11">' +
														'<input placeholder="Restaurant" class="restaurant" type="text" class="validate">' +
													'</div>' +
													'<div class="col s1">' +
														'<a class="removeInputButton btn-floating btn waves-effect waves-light red">'+
															'<i class="fa fa-minus"></i>' +	
														'</a>' +
													'</div>' +
												'</div>' +
										'</div>');
		}
		countInputField++;
	});

	$('body').on('click', 'a.removeInputButton', function(e) {
		e.preventDefault();
		$(this).parent('div').parent('div').parent('div').remove();
		countInputField--;
	});
});