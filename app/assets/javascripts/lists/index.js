$('.lists.index').ready(function(){
	console.log("lists index");
	$('.bookmark').on('click', function() {
		$(this).css("color", "yellow");
	})
});
