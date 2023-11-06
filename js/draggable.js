export const draggable = () => {
	document.addEventListener('mousedown', event => {
		const target = event.target.closest('[data-draggable]')

		if (!target) return

		const handleDraggingMousemove = event => {
			const getStyle = window.getComputedStyle(target)

			target.style.position = 'absolute'
			target.style.top = parseInt(getStyle.top) + event.movementY + 'px'
			target.style.left = parseInt(getStyle.left) + event.movementX + 'px'
		}

		window.addEventListener('mousemove', handleDraggingMousemove)

		document.addEventListener('mouseup', () => {
			window.removeEventListener('mousemove', handleDraggingMousemove)
		})
	})
}