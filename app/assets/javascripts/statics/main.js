$('.statics.main').ready(function(){
	console.log('main')

	var getLists = function () {
		$.ajax({
			url: '/api/lists',
			method: 'get',
			success: function (lists) {
				$('#lists-index').html('');

				lists.forEach(function (list) {
					html =
										'<div class="col s6">' +
											'<ul class="collapsible" data-collapsible="accordion">' +
												'<li>' +
													'<div class="collapsible-header">' +
														'<div class="col s11">' + '<h6>' + list.title + '</h6>' + '<span>' + ' ' + 'by' + ' ' + list.user_email + '</span>' + '</div>' +
														'<div class="col s1">' + '<i class="bookmark fa fa-star" data-favourite="no" aria-hidden="true"></i>' + '</div>' +
													'</div>' +
													'<div class="collapsible-body">' +
	                					'<p>' + list.description + '</p>' +
	                					'<p>' + list.list_restaurants + '</p>' +
	                				'</div>' +
	              				'</li>' +
	              			'</ul>' +
	              		'</div>';
          $('#lists-index').append(html);
        });

				$(".collapsible").collapsible({
      		accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    		});

      }, error: function (resp) {
        console.log(resp);
      }
		});
  }

	var signInModal = function() {
		// Able to open modal.

		$('.modal-trigger').leanModal();
		// Signup Modal

		$('#signupModalOpen').on('click', function(e) {
			$('#signin').closeModal();
			$('#signup').openModal();
			e.preventDefault();
		});

		// Register button click event
		$('#registerButton').on('click', function(e) {
			$('#signup').closeModal();
			e.preventDefault();
		});

		// Login button click event
		$('#loginButton').on('click', function(e) {
			$('#signin').closeModal();
			e.preventDefault();
		});
	};

	var init = function () {
		signInModal();
		getLists();
	}

	init();

});
