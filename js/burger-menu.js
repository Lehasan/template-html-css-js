export const burgerMenu = () => {
	const burgerMenuButton = document.querySelector('[data-burger]')

	if (!burgerMenuButton) {
		return console.error(`Element '[data-burger]' not found`)
	}

	burgerMenuButton.addEventListener('click', () => toggleBurgerMenu(burgerMenuButton))
}

export const toggleBurgerMenu = item => {
	document.body.classList.toggle('_lock')
	item.classList.toggle('_active')
	item.nextElementSibling.classList.toggle('_active')
}