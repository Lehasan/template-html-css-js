export const accordion = () => {
	const accordionWrapperElements = document.querySelectorAll('[data-accordion]'),
		accordionElements = document.querySelectorAll('[data-accordion-item]')

	if (!accordionWrapperElements?.length || !accordionElements?.length) {
		console.error("Data attribute 'data-accordion' or 'data-accordion-item' not found")
		return
	}

	const accordionState = (accordionItem) => {
		const accordionData = accordionItem.dataset.accordionItem,
			accordionContent = accordionItem.nextElementSibling

		if (accordionData === 'open') {
			accordionItem.classList.add('_active')
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			return
		}

		accordionItem.classList.remove('_active')
		accordionContent.style.maxHeight = 0
	}

	accordionElements.forEach(accordionItem => accordionState(accordionItem))

	accordionWrapperElements.forEach(accordionWrapperItem => {
		const accordionWrapperData = accordionWrapperItem.dataset.accordion

		accordionWrapperItem.addEventListener('click', event => {
			const accordionTarget = event.target

			if (accordionTarget === accordionTarget.closest('[data-accordion-item]')) {
				if (accordionWrapperData !== 'toggle') {
					accordionTarget.dataset.accordionItem = accordionTarget.dataset.accordionItem === 'open' ? 'close' : 'open'

					accordionState(accordionTarget)
					return
				}

				const accordionOpenElement = accordionWrapperItem.querySelector('[data-accordion-item="open"]')
				if (accordionOpenElement) accordionOpenElement.dataset.accordionItem = 'close'

				accordionTarget.dataset.accordionItem = 'open'

				if (accordionTarget.classList.contains('_active')) accordionTarget.dataset.accordionItem = 'close'
				accordionElements.forEach(accordionItem => accordionState(accordionItem))
			}
		})
	})
}