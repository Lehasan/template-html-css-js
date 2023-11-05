export const accordion = () => {
	const accordionWrapperElements = document.querySelectorAll('[data-accordion]')

	if (!accordionWrapperElements?.length) return console.error("Data attribute 'data-accordion' not found")

	const accordionState = accordionElement => {
		const accordionData = accordionElement.dataset.accordionItem,
			accordionContent = accordionElement.nextElementSibling

		if (accordionData === 'open') {
			accordionElement.classList.add('_active')
			return accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
		}

		accordionElement.classList.remove('_active')
		accordionContent.style.maxHeight = 0
	}

	accordionWrapperElements.forEach(accordionWrapperItem => {
		const { accordion, accordionMedia } = accordionWrapperItem.dataset
		const accordionElements = accordionWrapperItem.querySelectorAll('[data-accordion-item]')

		if (!accordionElements?.length) return console.error("Data attribute 'data-accordion-item' not found")

		accordionElements.forEach(accordionItem => accordionState(accordionItem))

		if (accordionMedia) {
			const updateAccordion = action => {
				accordionElements.forEach(accordionItem => {
					accordionItem.dataset.accordionItem = action
					accordionState(accordionItem)
				})
			}

			updateAccordion(window.innerWidth >= accordionMedia ? 'open' : 'close')

			window.matchMedia(`(min-width: ${accordionMedia}px)`).addEventListener('change', event => {
				event.matches ? updateAccordion('open') : updateAccordion('close')
			})
		}

		accordionWrapperItem.addEventListener('click', event => {
			const accordionTarget = event.target.closest('[data-accordion-item]')

			if (accordionTarget) {
				if (accordion !== 'toggle') {
					accordionTarget.dataset.accordionItem = accordionTarget.dataset.accordionItem === 'open' ? 'close' : 'open'
					return accordionState(accordionTarget)
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