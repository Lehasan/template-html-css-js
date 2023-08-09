export const progressLoader = (progressSelector, progressDuration = 0.5) => {
	const mediaElements = document.querySelectorAll('img'),
		progressElement = document.querySelector(progressSelector)

	if (!mediaElements?.length || !progressElement) {
		console.error(`Media elements or selector '${progressSelector}' not found`)
		return
	}

	let mediaUploaded = 0

	progressElement.style.transition = `width ${progressDuration}s`

	mediaElements.forEach(mediaItem => {
		const img = new Image()

		img.src = mediaItem.src
		img.addEventListener('load', () => {
			progressElement.style.width = `${Math.floor(++mediaUploaded / mediaElements.length * 100)}%`
		})
	})
}