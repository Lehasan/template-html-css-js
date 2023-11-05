import { switchClass } from "./functions.js"

export const rating = () => {
	const ratingElements = document.querySelectorAll('[data-rating]')

	if (!ratingElements?.length) return console.error("Data attribute 'data-rating' not found")

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
			const ratingTarget = event.target.closest('[data-rating-value]')

			if (!ratingTarget) return

			const { ratingValue } = ratingTarget.dataset
			ratingTarget.parentElement.dataset.rating = ratingTarget.dataset.ratingValue

			switchClass(ratingItem, ratingTarget, '[data-rating-value]', '_active')
			ratingValueElement.textContent = ratingValue
		})
	})
}