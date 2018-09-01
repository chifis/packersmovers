(function(){
	emailjs.init("user_tsVsEORERoQYYoKbWD04a");
})();

function sendMail() {
	changeButtonTo('load');

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const subject = document.getElementById('subject').value;
	const message = document.getElementById('message').value;

	const template_params = {
		"reply_to": email,
		"to_name": name,
		"message_html": message,
		"form_subject": subject,
		"from_name": "Horowood contact form: "
	};
	 
	var service_id = "default_service";
	var template_id = "template_yEfWBTFX";
	
	emailjs.send(service_id,template_id,template_params)
		.then(function() {
			resetFields();
			document.getElementById('contact_failure_message').classList.add('hidden');
			document.getElementById('contact_success_message').classList.remove('hidden');
			changeButtonTo('normal');
		}, function() {
			document.getElementById('contact_failure_message').classList.remove('hidden');
			document.getElementById('contact_success_message').classList.add('hidden');
			changeButtonTo('normal');
		});

	return false;
}

function resetFields() {
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('subject').value = '';
	document.getElementById('message').value = '';
}

function changeButtonTo(type) {
	if(type === 'load') {
		document.getElementById("sendMessage").disabled = true;
		document.getElementById('sendMessage').textContent = 'Sending...';
	} else {
		document.getElementById("sendMessage").disabled = false;
		document.getElementById('sendMessage').textContent = 'Send Message';
	}
}