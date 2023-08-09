export const animOnScroll = () => {
	const dataAnimItems = document.querySelectorAll('[data-anim]')

	if (!dataAnimItems?.length) {
		console.error("Data attribute 'data-anim' not found")
		return
	}

	const dataAnimStyle = (item, opacity, transform) => {
		const animData = item.dataset.anim,
			animArray = animData.split(',')

		const type = animArray[0],
			value = animArray[1],
			duration = animArray[2]

		item.style.transform = transform ? transform : `${type}(${value})`
		item.style.opacity = opacity
		item.style.transition = `all ${duration ? duration : 1.4}s`
	}

	const showAnimItem = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) dataAnimStyle(entry.target, 1, 'translate(0) scale(1)')
		});
	}

	const animObserver = new IntersectionObserver(showAnimItem, { threshold: [0.5] })

	dataAnimItems.forEach(dataAnimItem => {
		dataAnimStyle(dataAnimItem, 0)
		animObserver.observe(dataAnimItem)
	})
}