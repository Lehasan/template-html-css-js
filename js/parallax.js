import { isMobile } from "./devices.js"

export const parallaxOnMousemove = () => {
	if (!isMobile.any()) {
		const parallaxItems = document.querySelectorAll('[data-parallax-mouse]')

		if (!parallaxItems?.length) {
			console.error("Data attribute 'data-parallax-mouse' not found")
			return
		}

		window.addEventListener('mousemove', event => {
			const parallaxCordX = window.innerWidth / 2 - event.clientX,
				parallaxCordY = window.innerHeight / 2 - event.clientY

			parallaxItems.forEach(parallaxItem => {
				const parallaxData = parallaxItem.dataset.parallaxMouse,
					parallaxSpeed = parallaxData ? parallaxData : 50

				parallaxItem.style.transform = `translate(${parallaxCordX / parallaxSpeed}px, ${parallaxCordY / parallaxSpeed}px)`
				parallaxItem.style.transition = `transform 0.1s linear`
			})
		})
	}
}

// ===============================================================================

export const parallaxOnScroll = () => {
	if (!isMobile.any()) {
		const parallaxElements = document.querySelectorAll('[data-parallax-scroll]')

		if (!parallaxElements?.length) {
			console.error("Data attribute 'data-parallax-scroll' not found")
			return
		}

		parallaxElements.forEach(parallaxItem => {
			const { parallaxScroll, parallaxScrollOpacity } = parallaxItem.dataset,
				[parallaxType, parallaxSpeed = 2] = parallaxScroll.split(',')

			window.addEventListener('scroll', () => {
				parallaxItem.style.transform = `${parallaxType}(${window.scrollY / parallaxSpeed}px)`

				if (parallaxScrollOpacity === 'fade') parallaxItem.style.opacity = 1 - 0.3 / 100 * window.scrollY
				if (parallaxScrollOpacity === 'show') parallaxItem.style.opacity = 0 + 0.3 / 100 * window.scrollY
			})
		})
	}
}