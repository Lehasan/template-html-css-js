export const popup = (...selectors) => {
	const buttonsWrapper = document.querySelectorAll(selectors)

	if (!buttonsWrapper?.length) return

	buttonsWrapper.forEach(buttonsWrapperItem => {
		buttonsWrapperItem.addEventListener('click', event => {
			const buttonTarget = event.target

			if (buttonTarget.closest('[data-popup]')) {
				const buttonData = buttonTarget.dataset.popup,
					popupElement = document.getElementById(buttonData)

				if (!popupElement) return

				document.body.classList.add('_lock')
				popupElement.classList.add('popup_open')

				popupCloseOnClick(popupElement)
			}
		})
	})

	document.addEventListener('keyup', event => {
		const popupOpenElement = document.querySelector('.popup_open')

		if (event.code === 'Escape' && popupOpenElement) popupClose(popupOpenElement)
	})

	const popupCloseOnClick = selector => {
		const popupCloseElement = selector.querySelector('.popup__close')

		if (popupCloseElement) popupCloseElement.addEventListener('click', () => popupClose(selector))

		selector.addEventListener('click', event => {
			const target = event.target

			if (target === target.closest('.popup')) popupClose(target)
		})
	}

	const popupClose = selector => {
		document.body.classList.remove('_lock')
		selector.classList.remove('popup_open')
	}
}