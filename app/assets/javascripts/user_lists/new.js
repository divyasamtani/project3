$('.user_lists.new').ready(function(){
	// Limit input fields for restaurants, user can add.
	const MAXINPUTFIELD = 10;

	// Tracks user input field.
	var countInputField = 1;

	//Gets user input field for restaurant
	var restaurantArray = [];

	var wrapper = $('.input-wrapper-field');

	// Add new restaurant form.
	$('#addInputButton').on('click', function(e) {
		e.preventDefault();

		if (countInputField < MAXINPUTFIELD) {
			wrapper.append('<div class="row">'+
												'<div class="input-field col s12">' +
													'<div class="col s11">' +
														'<input id="restaurantInput'+ countInputField+1 +'" name="restaurants[]" placeholder="Restaurant" type="text" class="restaurant validate">' +
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

	//Submit data to backend server with AJAX request
	$('#submitList').on('click', function(e) {
		// e.preventDefault();

		$.each($(".restaurant"), function(k, v) {
			getRestaurant = $(this).val();
			restaurantArray.push(getRestaurant);
		});


		var getListParams = {
			list: {
				title: $('#title').val(),
				description: $('#description').val()
			}
		};

		submitListener();

		// $.ajax({
		// 	method: 'POST',
		// 	url: 'http://localhost:3000/api/user/lists',
		// 	data: getListParams
		// }).success(function(data) {
		// 	console.log(data);
		// });

		// for (var i = 0; i < countInputField; i++) {
		// 	$.ajax({
		// 		method: "POST",
		// 		beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
		// 		url: "http://localhost:3000/api/restaurants",
		// 		data: {
		// 			restaurants: {
		// 				name: $('#restaurantInput1').val()
		// 			}
		// 		}
		// 	}).success(function(data) {
		// 		console.log(data);
		// 	});
		// // }

		// var getRestaurantParams = {
		// 	restaurant: restaurantArray
		// };

		// countInputField = 1;
		// restaurantArray = [];
	});
});

	var submitList = function() {
		var getListParams = {
			list: {
				title: $('#title').val(),
				description: $('#description').val()
			}
		}

		$.ajax({
			url: '/api/user/lists',
			data: getListParams,
			success: function(){
				console.log('sent list')
			},
			error: function(resp) {
				console.log(resp)
			}
		});
	}

	var submitRestaurants = function() {
		var getRestParams = {
			restaurants: {
			name: $('#restaurantInput1').val()
		}
	}

	$.ajax({
		url: '/api/restaurants',
		data: getRestParams,
		success: function(){
			console.log('restaurants sent')
		},

		error: function(resp) {
			console.log(resp)
		}
	});
}

  var submitListener = function() {
    $('#submitList').on('click', function(e){
      submitList();
      submitRestaurants();
    })
  }

