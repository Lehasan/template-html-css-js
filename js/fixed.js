export const headerFixed = (selector = 0) => {
	const header = document.querySelector('header')

	if (!header) return

	window.addEventListener('scroll', () => {
		window.scrollY > selector
			? header.classList.add('header_fixed')
			: header.classList.remove('header_fixed')
	})
}