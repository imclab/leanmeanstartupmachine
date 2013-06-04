$.fn.center = function() {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	return this;
}

function openLightbox(element) {
	$(".lightbox").removeClass("open").css('left', '-999px');
	$("." + element + ".lightbox").toggleClass("open").center();
}

$(document).ready(function() {
	WebFontConfig = {
		google: {
			families: ['Quantico:400,700:latin']
		}
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
			'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();

	$(document).keydown(function(e) {
		console.log(e.which, 'key pressed');
		switch (e.which) {
			case 27 /* esc */ :
				$(".lightbox").removeClass("open").css('left', '-999px');
				break;
				// case 77 /* m */ :
				// 	openLightbox('mongo');
				// 	break;
				// case 65 /* a */ :
				// 	openLightbox('angular');
				// 	break;
				// case 69 /* e */ :
				// 	openLightbox('express');
				// 	break;
				// case 78 /* n */ :
				// 	openLightbox('node');
				// 	break;
				// case 13 /* n */ :
				// 	openLightbox('form');
				// 	break;
		}
	});

	$(document).click(function() {
		$(".lightbox").removeClass("open").css('left', '-999px');
	});

	$(".close").click(function() {
		$(".lightbox").removeClass("open").css('left', '-999px');
	});

	$("#stack").click(function(e) {
		e.stopPropagation();

	});

	$(".lightbox").click(function(e) {
		e.stopPropagation();
	});

	$("#stack").find("li").click(function(e) {
		e.preventDefault();
		openLightbox($("a", this).attr('rel'));
	});

	$("#leadForm").submit(function(e) {
		var url = "https://dev.linnovate.net/lead/new?key=cbd142ed135d53baea9e4dfa330649149ef93403&project_id=leads&" + $("#leadForm").serialize();
		alert(url);
		$.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            error: function(xhr, status, error) {
            	debugger
                alert("error");
            },
            success: function(json) {
            	debugger
                alert("success");
            }
        });

		$(".lightbox").removeClass("open").css('left', '-999px');

		//Prevent form submission
		e.preventDefault();
	});
});