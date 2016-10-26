$('.statics.main').ready(function(){
	$('.modal-trigger').leanModal();

	$('#signupModalOpen').on('click', function(e) {
		$('#signin').closeModal();
		$('#signup').openModal();
		e.preventDefault();
	});

	$('#registerButton').on('click', function(e) {
		$('#signup').closeModal();
	});
});
