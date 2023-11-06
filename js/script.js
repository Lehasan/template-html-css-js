'use strict'

import { toggleClass, findElement } from "./functions.js"

// import { burgerMenu } from "./burger-menu.js"
// burgerMenu() // class: _active

// import { headerFixed } from "./fixed.js"
// headerFixed(findElement('.selector').offsetHeight) // default: 0, class: header_fixed

// import { goto } from "./goto.js"
// goto(findElement('header').offsetHeight, isWatcher = false) // default margin-top: 0
/*
data-goto="SELECTOR"
isWatcher = true class: _active
data-goto-watch
*/

// import { animationOnScroll } from "./animationOnScroll.js"
// animationOnScroll(isRepeat = false, resetMediaQuery = 0, globalDuration = 1.4, viewBox = 0.5) 
// data-animation-scroll="VALUE, delay, duration" default duration: 1.4s

// import { filter } from "./filter.js"
// filter() // classes: _active, ._hide

// import { parallaxOnScroll } from "./parallax.js"
// parallaxOnScroll(parallaxGlobalSpeed)
/*
data-parallax-scroll="TYPE, speed" default speed: 2
data-parallax-scroll-opacity="fade/show, speed" default speed: 0.3
data-parallax-scroll-scale="grow/shrink, speed" default speed: 0.03
*/

// import { parallaxOnMousemove } from "./parallax.js"
// parallaxOnMousemove() // data-parallax-mouse (minmax 10-100) default: 50

// import { move } from "./move.js"
// move()
/*
data-move="element, move element, event" default event: click
data-move-speed="1" default speed: 0.4
*/

// import { accordion } from "./accordion.js"
// accordion() // class: _active

// import { rating } from "./rating.js"
// rating() // class: _active

// import { popup } from "./popup.js"
// popup() // data-popup="popup id"

// import { draggable } from "./draggable.js"
// draggable() // data-draggable

// load page
window.addEventListener('load', () => {
	setTimeout(() => {
		toggleClass('body', '_lock', '_loaded')
	}, 300)
})