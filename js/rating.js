export const rating = () => {
	const ratingElements = document.querySelectorAll('[data-rating]')

	if (!ratingElements?.length) {
		console.error("Data attribute 'data-rating' not found")
		return
	}

	ratingElements.forEach(ratingItem => {
		const { rating, ratingClick = 'false' } = ratingItem.dataset

		const currentRating = ratingItem.querySelector(`[data-rating-value="${rating}"]`),
			ratingValueElement = ratingItem.nextElementSibling

		if (currentRating) {
			currentRating.classList.add('_active')
			ratingValueElement.textContent = rating
		}

		if (ratingClick !== 'true') return

		ratingItem.addEventListener('click', event => {
			const ratingTarget = event.target

			if (ratingTarget === ratingTarget.closest('[data-rating-value]')) {
				const { ratingValue } = ratingTarget.dataset
				ratingTarget.parentElement.dataset.rating = ratingTarget.dataset.ratingValue

				const ratingActive = ratingItem.querySelector('[data-rating-value]._active')
				if (ratingActive) ratingActive.classList.remove('_active')
				ratingTarget.classList.add('_active')

				ratingValueElement.textContent = ratingValue
			}
		})
	})
}