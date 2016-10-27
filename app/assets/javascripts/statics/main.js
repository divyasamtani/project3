$('.statics.main').ready(function(){
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
});
