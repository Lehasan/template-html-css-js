import { findElements, watcher } from "./functions.js"

export const animationOnScroll = (isRepeat = false, mediaQuery = 0, globalDuration = 1.4, viewBox = 0.5) => {
	const animationStyle = (item, opacity, reset) => {
		const animationData = item.dataset.animationScroll,
			[transformValue, delay, duration] = animationData.split(',')

		let isDelay = delay && window.innerWidth >= mediaQuery ? delay : 0

		window.matchMedia(`(min-width: ${mediaQuery}px)`).addEventListener('change', event => {
			if (event.matches) isDelay = 0
		})

		const isDuration = duration ? duration : globalDuration

		item.style.transform = reset ? reset : transformValue
		item.style.opacity = opacity
		item.style.transition = `transform ${isDuration}s ${isDelay}s, opacity ${isDuration}s ${isDelay}s`
	}

	findElements('[data-animation-scroll]').forEach(dataAnimationItem => animationStyle(dataAnimationItem, 0))

	const condition = entry => {
		if (entry.isIntersecting) animationStyle(entry.target, 1, 'none')
		if (isRepeat && !entry.isIntersecting) animationStyle(entry.target, 0)
	}

	watcher('[data-animation-scroll]', condition, viewBox)
}