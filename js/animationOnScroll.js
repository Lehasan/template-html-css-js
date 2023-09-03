import { findElements, watcher } from "./functions.js"

export const animationOnScroll = (isRepeat = false, resetDelayValue = 0, globalDuration = 1.4, viewBox = 0.5) => {
	const animationStyle = (item, opacity, reset) => {
		const animationData = item.dataset.animationScroll,
			[transformValue, delay, duration] = animationData.split(',')

		const isDelay = delay && window.innerWidth >= resetDelayValue ? delay : 0,
			isDuration = duration ? duration : globalDuration

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