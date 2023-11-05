import { switchClass } from "./functions.js"

export const move = () => {
	const dataMoveElements = document.querySelectorAll('[data-move]')

	if (!dataMoveElements?.length) return console.error("Elements 'data-move' not found")

	const setActiveElement = (selector, moveItem) => {
		const activeElement = selector.querySelector('._active'),
			moveElement = selector.querySelector(`.${moveItem}`)

		if (!activeElement) return console.error("No active element found inside 'data-move'")

		animateElementMove(activeElement, moveElement)
	}

	const animateElementMove = (target, moveElement, speed = 0.4) => {
		const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target

		moveElement.animate({
			top: offsetTop + 'px',
			left: offsetLeft + 'px',
			width: offsetWidth + 'px',
			height: offsetHeight + 'px'
		}, {
			easing: 'ease',
			fill: 'forwards',
			duration: speed * 1000
		})
	}

	const targetEvent = (event, targetElement, moveElement, moveSpeed) => {
		const target = event.target.closest(`.${targetElement}`),
			targetMoveElement = event.currentTarget.querySelector(`.${moveElement}`)

		if (!target || !targetMoveElement) return

		animateElementMove(target, targetMoveElement, moveSpeed)
	}

	const handleTargetEvents = (event, targetElement, moveElement, moveSpeed) => {
		targetEvent(event, targetElement, moveElement, moveSpeed)
		switchClass(event.currentTarget, event.target.closest(`.${targetElement}`), `.${targetElement}`, '_active')
	}

	dataMoveElements.forEach(dataMoveItem => {
		const [targetElement, moveElement, moveEvent] = dataMoveItem.dataset.move.split(', '),
			dataMoveSpeed = dataMoveItem.dataset.moveSpeed

		setActiveElement(dataMoveItem, moveElement)

		switch (moveEvent) {
			case 'click':
				return dataMoveItem.addEventListener('click', event => handleTargetEvents(event, targetElement, moveElement, dataMoveSpeed))
			case 'mousemove':
				return dataMoveItem.addEventListener('mousemove', event => handleTargetEvents(event, targetElement, moveElement, dataMoveSpeed))
			case 'all':
				dataMoveItem.addEventListener('click', event => handleTargetEvents(event, targetElement, moveElement, dataMoveSpeed))
				dataMoveItem.addEventListener('mousemove', event => targetEvent(event, targetElement, moveElement, dataMoveSpeed))
				return dataMoveItem.addEventListener('mouseleave', event => setActiveElement(dataMoveItem, moveElement))
			default:
				return dataMoveItem.addEventListener('click', event => handleTargetEvents(event, targetElement, moveElement, dataMoveSpeed))
		}
	})
}