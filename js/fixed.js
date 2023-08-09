export const headerFixed = (maxWidth = 767.98) => {
	const header = document.querySelector('header')

	if (!header || document.body.offsetWidth <= maxWidth) return

	window.addEventListener('scroll', () => {
		if (window.scrollY > 1) {
			header.classList.add('header_fixed')
			return
		}

		header.classList.remove('header_fixed')
	})
}