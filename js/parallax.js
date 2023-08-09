import { isMobile } from "./devices.js"

export const parallaxMousemove = () => {
	const parallaxItems = document.querySelectorAll('[data-parallax-mouse]')

	if (!parallaxItems?.length) {
		console.error("Data attribute 'data-parallax-mouse' not found")
		return
	}

	if (!isMobile.any()) {
		window.addEventListener('mousemove', e => {
			const parallaxCordX = window.innerWidth / 2 - e.clientX,
				parallaxCordY = window.innerHeight / 2 - e.clientY

			parallaxItems.forEach(parallaxItem => {
				const parallaxData = parallaxItem.dataset.parallaxMouse,
					parallaxSpeed = parallaxData ? parallaxData : 50

				parallaxItem.style.transform = `translate(${parallaxCordX / parallaxSpeed}px, ${parallaxCordY / parallaxSpeed}px)`
				parallaxItem.style.transition = `transform 0.1s linear`
			})
		})
	}
}