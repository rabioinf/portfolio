// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook
(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
          fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));

// Googlemaps
var map;
var marker;
var myLatLng = {lat: 52.5091016, lng: 13.420983};
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 12
	});
	var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
	marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		title: 'CareerFoundry GmbH',
		icon: image
	});
}

$(document).ready(function() {
	
	// Smooth scrolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});

	// Stellar
	$('#contact').stellar();

	// Tooltips
	$(function () {
		$('#item1').tooltip();
		$('[data-toggle="tooltip"]').tooltip();
	});

	// Button click event handler
	$('#send-button').on('click', function() {
		var name = $('#name').val();
		if (name != "") {
			$('#visible-name').html(name);	
			$('#name').hide();
		}
		else {
			alert("Please type in your name!")
			return false;
		}

		var email = $('#email').val();
		if ($('#email')[0].checkValidity()) {
			$('#visible-email').html(email);
			$('#email').hide();
		}
		else {
			alert("Please type in a valid email address!")
			return false;
		}

		var comment = $('#message-box').val();
		if (comment === "") {
			// textarea background
			$('#message-box').css("border", "2px solid red");
			$('#visible-comment').html("Please insert a comment!");
			return false;
		}
		else {
			var upperCaseComment = comment.toUpperCase();
			var resultMessage = "We have received your message:<br>" + upperCaseComment;
			$('#visible-comment').html(resultMessage);
			$('#message-box').hide();
		}

		var number = $('#number').val();
		if (number != "") {
			$('#visible-number').html(number);
		}
		$('#number').hide();	

		return false;
	});

	// capturing keyboard events in message-box
	$('#message-box').on('keyup', function() {
		//debug
		console.log("keyup happened!");

		var charCount = $('#message-box').val().length;
		// debug
		console.log(charCount);

		if(charCount > 50) {
			$('#char-count').css("color", "red");
			$('#message-box').css("border", "2px solid red");
		}
		else {
			$('#char-count').css("color", "white");
			$('#message-box').css("border", "2px solid green");
		}
		$('#char-count').html(charCount + " characters");

	});

	//work section
	for(var i=0; i < works.length; i++) {
		$('#work-projects').append("\
			<div class='col-sm-3 col-md-3 col-xs-6'>\
				<a href='" + works[i].url + "' class='work-img'>\
					<img class='img-responsive' src='" + works[i].pic + "'>\
					<span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
				</a>\
			</div>\
		");

		var images = $('#work-projects img');
		if(i%2 === 0) {
			$(images[i]).css("border", "2px solid DodgerBlue");
		} else {
			$(images[i]).css("border", "2px solid salmon");
		};

		$('.work-img').mouseenter( function() {
			$('.info', this).show();
		}).mouseleave( function() {
			$('.info', this).hide();
		});
	};
});
