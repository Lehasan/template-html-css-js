/*
<div class="slider">
  <div class="slider__wrapper">
	 <div class="slider__slide">Slide 1</div>
	 <div class="slider__slide">Slide 2</div>
	<div class="slider__slide">Slide 3</div>
  </div>
  <div class="slider__pagination"></div>
  
  <div class="slider__button-prev"></div>
  <div class="slider__button-next"></div>
</div>
*/

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
function bullets() {
	const bulletItems = document.querySelectorAll('[data-bullet]')

	if (!bulletItems?.length) return

	bulletItems.forEach((blt, bltIndex) => {
		if (bltIndex === slider.activeIndex) {
			const bltActive = document.querySelector('[data-bullet]._active')
			if (bltActive) bltActive.classList.remove('_active')

			blt.classList.add('_active')
		}

		blt.addEventListener('click', () => slider.slideTo(bltIndex))
	})
}



// init slider
slider.init()