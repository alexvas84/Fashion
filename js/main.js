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
		loop: true
	})

	/* 	$('.post-box .post__box-author, .post-box .post__box-item').hover(function (event) {
			$('.post-box').toggleClass('active');
		}); */

})