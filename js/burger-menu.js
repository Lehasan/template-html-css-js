import { toggleClass } from "./functions.js"

export const burgerMenu = (buttonSelector, menuSelector) => {
	const burgerMenuButton = document.querySelector(buttonSelector)

	if (!burgerMenuButton) {
		console.error(`Element '${buttonSelector}' not found`)
		return
	}

	burgerMenuButton.addEventListener('click', event => {
		document.body.classList.toggle('_lock')
		event.currentTarget.classList.toggle('_active')
		toggleClass(menuSelector, '_active')
	})
}