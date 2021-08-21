function fetchDogImage(){
	// var xhrRequest = new XMLHttpRequest();

	// xhrRequest.onload = function(){
	// 	console.log(xhrRequest.response);
	// 	var responseJSON = JSON.parse(xhrRequest.response);
	// 	var imageURL = responseJSON.message;
	// 	$('#dog-image').attr('src',imageURL);
	// }

	// xhrRequest.open('get','https://dog.ceo/api/breeds/image/random');
	// xhrRequest.send();

		$.ajax({
			url:'https://dog.ceo/api/breeds/image/random',
			method:'GET',
			success: function(data){{
					var imageURL = data.message;
					$('#dog-image').attr('src',imageURL);
			}}
		})


}

$('#button1').click(fetchDogImage);
