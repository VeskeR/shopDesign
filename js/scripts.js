$(document).ready(function () {
	$('.ripple').on('mousedown', function (e) {
		var ripple = $('<div class="ripple--active"></div>');
		$(this).append(ripple);
		var x = (e.pageX - $(this).offset().left);
		var y = (e.pageY - $(this).offset().top);
		ripple.css('top', y).css('left', x);
		var thisWidth = parseInt($(this).css('width'));
		var thisHeight = parseInt($(this).css('height'));
		var scale = Math.max(calcDistTo(0, 0), calcDistTo(0, thisHeight), calcDistTo(thisWidth, 0), calcDistTo(thisWidth, thisHeight));
		function calcDistTo(x1, y1) {
			return calcDist(x, y, x1, y1);
		}
		function calcDist (x0, y0, x1, y1) {
			return Math.sqrt((x0 - x1)*(x0 - x1) + (y0 - y1)*(y0 - y1));
		}
		// Add 5% to ensure ripple covers all space
		scale *= 1.05;
		$(ripple).animate({ textIndent: scale }, {
				step: function (now) {
					$(this).css('-webkit-transform','scale(' + now + ')');
				},
				duration: 1000
		});
		$(ripple).add(window).on('mouseout mouseup', function (e) {
			ripple.addClass('ripple--fade-out');
			setTimeout(function() {
				ripple.remove();
			}, 5000);
		});
	});

	$('.registration__button-reg').on('click', function(){
		$(this).parent().addClass("registration--active");
	});
        $(document).mouseup(function (e){ // событие клика по веб-документу
		var tw = $(".registration"); // тут указываем ID элемента
		// если клик был не по нашему блоку
		if (!tw.is(e.target) && tw.has(e.target).length === 0)
		    { // и не по его дочерним элементам
		    	$('.registration').removeClass('registration--active');
		    	setTimeout(function(){
		    		$('.form__submit').children('span').text('registrate');
		    		$('.form__submit').children('i').text('perm_identity');
		    		$('.form__submit').removeClass('form__submit--active');
		    	}, 500);
		    }
		});

        $('#registration').submit(function(){
        	$('.form__submit').addClass('form__submit--active').children('span').text('done');
        	$('.form__submit i').addClass('sending').text('done');
        	$('#registration')[0].reset();
        });
        // .on('click', function(){
        	// $('.form__submit').addClass('form__submit--active').children('span').text('done');
        	// $('.form__submit i').addClass('sending').text('done');
        // });
    });
