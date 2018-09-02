$(".add-to-cart").click(function(event) {
	const temp = Math.random( );
	const alertHTML = `
		<div class="cart-alert alert alert-success alert-dismissible mb-5">
			<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			Item added to cart
		</div>
	`;
	const alertElement = $(alertHTML);
	alertElement.delay(1000).fadeOut(700, function () { $(this).remove(); });
	alertElement.appendTo("#alerts").fadeIn('slow');
});