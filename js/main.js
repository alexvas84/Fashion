$(function () {

	var mySwiper = new Swiper('.swiper-container', {

		loop: true,

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

		autoplay: {
			delay: 3000,
		},

	});

	var mySwiper = new Swiper('.instagram__slider-container', {
		containerModifierClass: 'instagram__slider-container',
		slideClass: 'instagram__slider-slide',
		wrapperClass: 'instagram__slider-wrapper',
		slidesPerView: 6,
		// slidesPerColumn: 1,
		// spaceBetween: 20,
		loop: true,
		breakpoints: {
			319: {
				slidesPerView: 1,
				spaceBetween: 21
			},
			630: {
				slidesPerView: 2,
				spaceBetween: 21
			},
			1230: {
				slidesPerView: 3,
				spaceBetween: 21
			},
			1250: {
				slidesPerView: 4,
				spaceBetween: 21
			},
			1550: {
				slidesPerView: 5,
				spaceBetween: 21
			},
			1850: {
				slidesPerView: 6,
				spaceBetween: 21
			},
		}
	});

	$('.header__menu-btn, .header__menu').on('click', function () {
		$('.header__menu').toggleClass('active');
		$('.header__menu-btn').toggleClass('active');
		$('body').toggleClass('lock');
	});

	/* 	$('.post-box .post__box-author, .post-box .post__box-item').hover(function (event) {
			$('.post-box').toggleClass('active');
		}); */

})