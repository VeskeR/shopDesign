$(document).ready(function () {
	$('.ripple').on('click', function (e) {
		$(this).append('<div class="ripple--active ripple--animate"></div>').delay(10000).queue(function () {
			$(this).children('.ripple-active').remove();
			$(this).dequeue();
		});
		var ripple = $(this).children('.ripple--active'),
		x = (e.pageX - $(this).offset().left),
		y = (e.pageY - $(this).offset().top);
		ripple.css('top', y).css('left', x);
	})

	$('.registration__button-reg').on('click', function(){
		$(this).parent().addClass("registration--active");
	})
        $(document).mouseup(function (e){ // событие клика по веб-документу
		var tw = $(".registration"); // тут указываем ID элемента
		if (!tw.is(e.target) // если клик был не по нашему блоку
			&& tw.has(e.target).length === 0) 
		    { // и не по его дочерним элементам
		    	$('.registration').removeClass('registration--active');
		    	setTimeout(function(){
		    		$('.form__submit').children('span').text('registrate');
		    		$('.form__submit').children('i').text('perm_identity');
		    		$('.form__submit').removeClass('form__submit--active');
		    	}, 500)

		    }
		})

        $('#registration').submit(function(){
        	$('.form__submit').addClass('form__submit--active').children('span').text('done');
        	$('.form__submit i').addClass('sending').text('done');
        	$('#registration')[0].reset();
        })
        // .on('click', function(){
        	// $('.form__submit').addClass('form__submit--active').children('span').text('done');
        	// $('.form__submit i').addClass('sending').text('done');
        // });
    })