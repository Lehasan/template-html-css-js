'use strict'

import { toggleClass } from "./functions.js"

// import { progressLoader } from "./progress-loader.js"
// progressLoader('.SELECTOR', duration)

// import { burgerMenu } from "./burger-menu.js"
// burgerMenu('.icon-menu', '.burger-menu-list')

// import { headerFixed } from "./fixed.js"
// headerFixed(width) // default width: 767.98

// import { animOnScroll } from "./animation-scroll.js"
// animOnScroll() // data-anim="TYPE, VALUE, duration"

// import { parallaxMousemove } from "./parallax.js"
// parallaxMousemove() // data-parallax-mouse="50" (minmax 10-100)

// load page
window.addEventListener('load', () => {
	setTimeout(() => {
		toggleClass('body', '_lock', '_loaded')
	}, 400)
})