/*
<div class="slider">
	<ul class="slider__wrapper">
		<li class="slider__slide">Slide 1</li>
		<li class="slider__slide">Slide 2</li>
		<li class="slider__slide">Slide 3</li>
	</ul>
	<div class="slider__pagination"></div>

	<button class="slider__button-prev"></button>
	<button class="slider__button-next"></button>
</div>
*/

import { toggleClass } from "./functions.js"

const sliderElement = document.querySelector('.slider')

if (sliderElement) {
	sliderElement.style.minWidth = 0
	
	const slider = new Swiper('.slider', {
		wrapperClass: 'slider__wrapper',
		slideClass: 'slider__slide',

		navigation: {
			nextEl: '.slider__button_next',
			prevEl: '.slider__button_prev',

			disabledClass: "slider__button_disabled",
		},

		pagination: {
			el: '.slider__pagination',
			bulletClass: "slider__bullet",
			bulletActiveClass: "slider__bullet_active",

			clickable: true,
		},

		direction: 'vertical',
		slidesPerView: 'auto',
		autoHeight: true,
		spaceBetween: 30,
		loop: true,
		speed: 800,
		grabCursor: true,
		simulateTouch: false,
		initialSlide: 1,
		mousewheel: true,
		
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},

		autoplay: {
			delay: 3500,
			disableOnInteraction: true,
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},

		// mobile first
		breakpoints: {
			479.89: {},
			767.98: {},
			991.98: {},
		},

		on: {
			// event init slider
			init: function () {
				bullets()
			},

			// event switch slide
			slideChange: function () {
				bullets()
			},

			// event resize
			resize: function () { },
		},

		observer: true,
		observeParents: true,
		observeSlideChildren: true,

		init: false,
	})



	// custom bullets
	const bullets = () => {
		const bulletItems = document.querySelectorAll('[data-bullet]')

		if (!bulletItems?.length) return

		bulletItems.forEach((blt, bltIndex) => {
			if (bltIndex === slider.activeIndex) {
				toggleClass('[data-bullet]._active', '_active')
				blt.classList.add('_active')
			}

			blt.addEventListener('click', () => slider.slideTo(bltIndex))
		})
	}



	// init slider
	slider.init()
}