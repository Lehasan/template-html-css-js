export const popup = () => {
	document.addEventListener('click', event => {
		const buttonTarget = event.target.closest('[data-popup]')

		if (!buttonTarget) return

		const buttonData = buttonTarget.dataset.popup,
			popupElement = document.getElementById(buttonData)

		if (!popupElement) return console.error(`id="${buttonData}" not found`)

		document.body.classList.add('_lock')
		popupElement.classList.add('popup_open')

		const popupCloseElement = popupElement.querySelector('.popup__close')

		const popupClose = () => {
			document.body.classList.remove('_lock')
			popupElement.classList.remove('popup_open')

			popupRemoveEvents()
		}

		const popupСloseOnOutsideClick = event => {
			const popupTarget = event.target

			if (popupTarget !== popupTarget.closest('.popup')) return

			popupClose()
			popupRemoveEvents()
		}

		const popupСloseOnKeyup = event => {
			if (event.code !== 'Escape') return

			popupClose()
			popupRemoveEvents()
		}

		const popupRemoveEvents = () => {
			popupCloseElement.removeEventListener('click', popupClose)
			window.removeEventListener('click', popupСloseOnOutsideClick)
			document.removeEventListener('keyup', popupСloseOnKeyup)
		}

		popupCloseElement.addEventListener('click', popupClose)
		window.addEventListener('click', popupСloseOnOutsideClick)
		document.addEventListener('keyup', popupСloseOnKeyup)
	})
}