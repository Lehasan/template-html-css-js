/*
<div class="slider">
  <div class="slider__wrapper">
	 <div class="slider__slide">Slide 1</div>
	 <div class="slider__slide">Slide 2</div>
	<div class="slider__slide">Slide 3</div>
  </div>
  <div class="slider__button-prev"></div>
  <div class="slider__button-next"></div>
</div>
*/

const slider = new Swiper('.slider', {
	wrapperClass: 'slider__wrapper',
	slideClass: 'slider__slide',

	navigation: {
		nextEl: '.slider__button-next',
		prevEl: '.slider__button-prev',
	},

	grabCursor: true,
	direction: 'vertical',
	autoHeight: true,
	spaceBetween: 30,
	loop: true,
	speed: 500,

	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	breakpoints: {
		479.89: {},
		767.98: {},
		991.98: {},
	},

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
})