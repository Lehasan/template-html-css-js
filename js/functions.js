export const toggleClass = (current, ...classes) => {
	const element = document.querySelector(current)
	if (element) classes.map(classItem => element.classList.toggle(classItem))
}

export const handleClick = (e, ...classes) => {
	classes.map(classItem => e.currentTarget.classList.toggle(classItem))
}