$(document).ready(function () {
	$('.ripple').on('click', function (e) {
		var ripple = $('<div class="ripple--active ripple--animate"></div>');
		$(this).append(ripple);
		var x = (e.pageX - $(this).offset().left);
		var y = (e.pageY - $(this).offset().top);
		ripple.css('top', y).css('left', x);
		setTimeout(function() {
			ripple.remove();
		}, 5000);
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
