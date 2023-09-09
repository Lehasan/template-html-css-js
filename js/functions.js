export const toggleClass = (element, ...classes) => {
	const currentElement = document.querySelector(element)
	if (currentElement) classes.forEach(classItem => currentElement.classList.toggle(classItem))
}

// ===============================================================================

export const findElement = element => {
	const currentElement = document.querySelector(element)

	if (currentElement) {
		return currentElement
	} else {
		console.error(`Element '${element}' not found`)
	}
}

// ===============================================================================

export const findElements = elements => {
	const currentElements = document.querySelectorAll(elements)

	if (currentElements?.length) {
		return currentElements
	} else {
		console.error(`Elements '${elements}' not found`)
	}
}

// ===============================================================================

export const watcher = (selector, condition, viewBox) => {
	const watcherElements = document.querySelectorAll(selector)

	if (!watcherElements?.length) {
		console.error(`Elements '${selector}' not found`)
		return
	}

	const watcherItem = entries => entries.forEach(entry => condition(entry)),
		watcherObserver = new IntersectionObserver(watcherItem, { threshold: [viewBox] })

	watcherElements.forEach(watcherElement => watcherObserver.observe(watcherElement))
}