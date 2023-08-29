export const animationOnScroll = (isRepeat = false, resetDelayValue = 0, globalDuration = 1.4, viewBox = 0.5) => {
	const dataAnimationItems = document.querySelectorAll('[data-animation-scroll]')

	if (!dataAnimationItems?.length) {
		console.error("Data attribute 'data-animation-scroll' not found")
		return
	}

	const animationStyle = (item, opacity, reset) => {
		const animationData = item.dataset.animationScroll,
			[transformValue, delay, duration] = animationData.split(',')

		const isDelay = delay && window.innerWidth >= resetDelayValue ? delay : 0,
			isDuration = duration ? duration : globalDuration

		item.style.transform = reset ? reset : transformValue
		item.style.opacity = opacity
		item.style.transition = `transform ${isDuration}s ${isDelay}s, opacity ${isDuration}s ${isDelay}s`
	}

	const showAnimationItem = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) animationStyle(entry.target, 1, 'none')
			if (isRepeat && !entry.isIntersecting) animationStyle(entry.target, 0)
		});
	}

	const animationObserver = new IntersectionObserver(showAnimationItem, { threshold: [viewBox] })

	dataAnimationItems.forEach(dataAnimationItem => {
		animationStyle(dataAnimationItem, 0)
		animationObserver.observe(dataAnimationItem)
	})
}