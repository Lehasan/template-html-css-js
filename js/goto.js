import { findElements, watcher } from "./functions.js"
import { toggleBurgerMenu } from "./burger-menu.js"

export const goto = (marginTop = 0, isWatcher = false, viewBox = 0.8) => {
	document.addEventListener('click', event => {
		const gotoTarget = event.target

		if (gotoTarget === gotoTarget.closest('[data-goto]')) {
			event.preventDefault()

			const gotoTargetData = gotoTarget.dataset.goto,
				gotoSelector = document.querySelector(`.${gotoTargetData}`)

			if (!gotoSelector) {
				console.error(`Selector '.${gotoTargetData}' not found`)
				return
			}

			const burgerElement = document.querySelector('[data-burger]')
			if (burgerElement && burgerElement.classList.contains('_active')) toggleBurgerMenu(burgerElement)

			const gotoCordinates = gotoSelector.getBoundingClientRect().top - marginTop + window.scrollY
			window.scrollTo({ top: gotoCordinates })
		}
	})

	if (!isWatcher) return

	const conditionWatcher = entry => {
		if (entry.isIntersecting) {
			findElements('[data-goto-target]').forEach(gotoTarget => {
				const gotoTargetData = gotoTarget.dataset.goto

				if (entry.target.classList.contains(`${gotoTargetData}`)) {
					gotoTarget.classList.add('_active')
					return
				}

				gotoTarget.classList.remove('_active')
			})
		}
	}

	watcher('[data-goto-watch]', conditionWatcher, viewBox)
}