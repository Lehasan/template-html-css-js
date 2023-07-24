'use strict'

// devices
/*
const isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i) },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i) },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i) },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i) },
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() ||
			isMobile.Opera() || isMobile.Windows())
	}
}
*/



// load page
/*
window.addEventListener('load', () => {
	document.body.classList.remove('lock')
})
*/



// burger menu
/*
const burgerMenu = () => {
	const burgerMenuButton = document.querySelector('#burger-button'),
		burgerMenuList = document.querySelector('#burger-list')

	if (!burgerMenuButton || !burgerMenuList) return

	burgerMenuButton.addEventListener('click', () => {
		burgerMenuButton.classList.toggle('_active')
		burgerMenuList.classList.toggle('_active')
		document.body.classList.toggle('lock')
	})
}

burgerMenu()
*/



// fixed header
/*
const headerFixed = () => {
	const header = document.querySelector('header')

	if (!header) return

	if (window.scrollY > 1) {
		header.classList.add('_fixed')
		return
	}

	header.classList.remove('_fixed')
}

if (document.body.offsetWidth >= 767.98) window.addEventListener('scroll', headerFixed)
*/



// animation when scrolling
/*
const animOnScroll = () => {
	const dataAnimItems = document.querySelectorAll('[data-anim]')

	if (!dataAnimItems?.length) return

	const showAnimItem = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) entry.target.classList.add('_show')
		});
	}

	const animObserver = new IntersectionObserver(showAnimItem, {
		threshold: [0.5]
	})

	dataAnimItems.forEach(dataAnimItem => animObserver.observe(dataAnimItem))
}

animOnScroll()
*/



// parallax when mouse move
/*
const parallaxMousemove = (e) => {
	const parallaxItems = document.querySelectorAll('[data-parallax]')

	if (!parallaxItems?.length) return

	const parallaxCordX = ~~(window.innerWidth / 2 - e.clientX),
		parallaxCordY = ~~(window.innerHeight / 2 - e.clientY)

	parallaxItems.forEach(parallaxItem => {
		const parallaxSpeed = parallaxItem.dataset.parallax ? parallaxItem.dataset.parallax : 50

		parallaxItem.style.transform = `translate(${parallaxCordX / parallaxSpeed}px, ${parallaxCordY / parallaxSpeed}px)`
		parallaxItem.style.transition = `transform 0.1s linear`
	})
}

// check for the device
if (!isMobile.any()) window.addEventListener('mousemove', parallaxMousemove)
*/