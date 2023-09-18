'use strict'

import { toggleClass, findElement } from "./functions.js"

// import { burgerMenu } from "./burger-menu.js"
// burgerMenu('.icon-menu', '.burger-menu-list') // class: _active

// import { headerFixed } from "./fixed.js"
// headerFixed(findElement('.selector').offsetHeight) // default: 0, class: header_fixed

// import { goto } from "./goto.js"
// goto(findElement('header').offsetHeight, isWatcher = false) // default margin-top: 0
/*
data-goto="SELECTOR"
data-goto-target class: _active
data-goto-watch
*/

// import { animationOnScroll } from "./animationOnScroll.js"
// animationOnScroll(isRepeat = false, resetMediaQuery = 0, globalDuration = 1.4, viewBox = 0.5) 
// data-animation-scroll="VALUE, delay, duration" default duration: 1.4s

// import { parallaxOnScroll } from "./parallax.js"
// parallaxOnScroll(parallaxGlobalSpeed)
/*
data-parallax-scroll="TYPE, speed" default speed: 2
data-parallax-scroll-opacity="fade/show, speed" default speed: 0.3
data-parallax-scroll-scale="grow/shrink, speed" default speed: 0.03
*/

// import { parallaxOnMousemove } from "./parallax.js"
// parallaxOnMousemove() // data-parallax-mouse (minmax 10-100) default: 50

// import { accordion } from "./accordion.js"
// accordion() // class: _active

// import { rating } from "./rating.js"
// rating() // class: _active

// import { popup } from "./popup.js"
// popup() // data-popup="popup id"

// load page
window.addEventListener('load', () => {
	setTimeout(() => {
		toggleClass('body', '_lock', '_loaded')
	}, 300)
})