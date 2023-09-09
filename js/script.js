'use strict'

import { toggleClass, findElement } from "./functions.js"

// import { progressLoader } from "./progress-loader.js"
// progressLoader('.SELECTOR', duration) // default duration: 0.5s

// import { burgerMenu } from "./burger-menu.js"
// burgerMenu('.icon-menu', '.burger-menu-list') // class: _active

// import { headerFixed } from "./fixed.js"
// headerFixed(findElement('.selector').offsetHeight) // default: 0, class: header_fixed

// import { animationOnScroll } from "./animationOnScroll.js"
// animationOnScroll(isRepeat = false, resetDelayValue = 0, globalDuration = 1.4, viewBox = 0.5) 
// data-animation-scroll="VALUE, delay, duration" default duration: 1.4s

// import { parallaxOnScroll } from "./parallax.js"
// parallaxOnScroll()
/*
data-parallax-scroll="TYPE, speed" default speed: 2
data-parallax-scroll-opacity="fade/show"
*/

// import { parallaxOnMousemove } from "./parallax.js"
// parallaxOnMousemove() // data-parallax-mouse (minmax 10-100) default: 50

// import { accordion } from "./accordion.js"
// accordion() // class: _active

// import { rating } from "./rating.js"
// rating() // class: _active

// import { popup } from "./popup.js"
// popup(...selectors) // data-popup="popup id"

// load page
window.addEventListener('load', () => {
	setTimeout(() => {
		toggleClass('body', '_lock', '_loaded')
	}, 300)
})