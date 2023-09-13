export const accordion = () => {
	const accordionWrapperElements = document.querySelectorAll('[data-accordion]')

	if (!accordionWrapperElements?.length) {
		console.error("Data attribute 'data-accordion' not found")
		return
	}

	const accordionState = accordionElement => {
		const accordionData = accordionElement.dataset.accordionItem,
			accordionContent = accordionElement.nextElementSibling

		if (accordionData === 'open') {
			accordionElement.classList.add('_active')
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			return
		}

		accordionElement.classList.remove('_active')
		accordionContent.style.maxHeight = 0
	}

	accordionWrapperElements.forEach(accordionWrapperItem => {
		const { accordion, accordionMedia } = accordionWrapperItem.dataset
		const accordionElements = accordionWrapperItem.querySelectorAll('[data-accordion-item]')

		if (!accordionElements?.length) {
			console.error("Data attribute 'data-accordion-item' not found")
			return
		}

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
				if (event.matches) {
					updateAccordion('open')
					return
				}

				updateAccordion('close')
			})
		}

		accordionWrapperItem.addEventListener('click', event => {
			const accordionTarget = event.target

			if (accordionTarget === accordionTarget.closest('[data-accordion-item]')) {
				if (accordion !== 'toggle') {
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