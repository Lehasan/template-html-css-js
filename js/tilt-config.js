import { isMobile } from "./devices.js"

const tiltElements = document.querySelectorAll('.selector')

if (tiltElements?.length && !isMobile.any()) {
	VanillaTilt.init(tiltElements, {
		reverse: false,
		speed: 400,
		scale: 1,
		glare: true,
		"max-glare": 1, // (1 = 100%, 0.5 = 50%)
	})
}