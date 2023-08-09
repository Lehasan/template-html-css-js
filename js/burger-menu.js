import { toggleClass, handleClick } from "./functions.js"

export const burgerMenu = (buttonSelector, menuSelector) => {
	const burgerMenuButton = document.querySelector(buttonSelector)

	if (!burgerMenuButton) {
		console.error(`Element ${buttonSelector} not found`)
		return
	}

	burgerMenuButton.addEventListener('click', e => {
		document.body.classList.toggle('_lock')
		handleClick(e, '_active')
		toggleClass(menuSelector, '_active')
	})
}