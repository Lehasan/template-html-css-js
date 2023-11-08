export const toggleClass = (element, ...classes) => {
	const currentElement = document.querySelector(element)

	if (currentElement) {
		return classes.forEach(classItem => currentElement.classList.toggle(classItem))
	}
}

// ===============================================================================

export const switchClass = (searchIn, targetElement, nameClass) => {
	if (!searchIn || !targetElement) return

	const currentElement = searchIn.querySelector(`.${nameClass}`)
	if (currentElement) currentElement.classList.remove(nameClass)

	targetElement.classList.add(nameClass)
}

// ===============================================================================

export const findElement = element => {
	const currentElement = document.querySelector(element)

	if (!currentElement) {
		return console.error(`Element '${element}' not found`)
	}

	return currentElement
}

// ===============================================================================

export const findElements = elements => {
	const currentElements = document.querySelectorAll(elements)

	if (!currentElements?.length) {
		return console.error(`Elements '${elements}' not found`)
	}

	return currentElements
}

// ===============================================================================

export const watcher = (selector, condition, viewBox) => {
	const watcherElements = document.querySelectorAll(selector)

	if (!watcherElements?.length) return console.error(`Elements '${selector}' not found`)

	const watcherItem = entries => entries.forEach(entry => condition(entry)),
		watcherObserver = new IntersectionObserver(watcherItem, { threshold: [viewBox] })

	watcherElements.forEach(watcherElement => watcherObserver.observe(watcherElement))
}