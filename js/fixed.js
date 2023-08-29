export const headerFixed = (selector = 0) => {
	const header = document.querySelector('header')

	if (!header) return

	window.addEventListener('scroll', () => {
		if (window.scrollY > selector) {
			header.classList.add('header_fixed')
			return
		}

		header.classList.remove('header_fixed')
	})
}