export const toggleClass = (currentClass, ...classes) => {
	const element = document.querySelector(currentClass)

	if (element) {
		classes.forEach(classItem => element.classList.toggle(classItem))
	} else {
		console.error(`Element '${currentClass}' not found`)
	}
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