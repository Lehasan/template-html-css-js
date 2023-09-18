import { isMobile } from "./devices.js"
import { watcher } from "./functions.js"

export const parallaxOnMousemove = () => {
	if (!isMobile.any()) {
		const conditionWatcher = entry => {
			const parallaxTarget = entry.target

			window.addEventListener('mousemove', event => {
				if (entry.isIntersecting) {
					parallaxTarget.style.transition = `transform 0.1s linear`

					const parallaxCordX = window.innerWidth / 2 - event.clientX,
						parallaxCordY = window.innerHeight / 2 - event.clientY

					const parallaxTargetData = parallaxTarget.dataset.parallaxMouse,
						parallaxSpeed = parallaxTargetData ? parallaxTargetData : 50

					parallaxTarget.style.transform = `translate(${parallaxCordX / parallaxSpeed}px, ${parallaxCordY / parallaxSpeed}px)`

					return
				}

				parallaxTarget.style = null
			})
		}

		watcher('[data-parallax-mouse]', conditionWatcher, 0)
	}
}

// ===============================================================================

export const parallaxOnScroll = parallaxGlobalSpeed => {
	const conditionWatcher = entry => {
		const parallaxScrollTarget = entry.target

		const { parallaxScroll, parallaxScrollOpacity = '', parallaxScrollScale = '' } = parallaxScrollTarget.dataset

		const [parallaxType, parallaxSpeed = parallaxGlobalSpeed ? parallaxGlobalSpeed : 2] = parallaxScroll.split(','),
			[parallaxOpacityType, parallaxOpacitySpeed = 0.3] = parallaxScrollOpacity.split(','),
			[parallaxScaleType, parallaxScaleSpeed = 0.03] = parallaxScrollScale.split(',')

		parallaxScrollTarget.style.transform = `${parallaxType}(${window.scrollY / parallaxSpeed}px)`

		window.addEventListener('scroll', () => {
			if (entry.isIntersecting) {
				parallaxScrollTarget.style.transform = `${parallaxType}(${window.scrollY / parallaxSpeed}px)`

				const parallaxScrollConfig = {
					opacity: {
						fade: 1 - parallaxOpacitySpeed / 100 * window.scrollY,
						show: 0 + parallaxOpacitySpeed / 100 * window.scrollY,
					},

					scale: {
						shrink: 1 - parallaxScaleSpeed / 100 * window.scrollY,
						grow: 1 + parallaxScaleSpeed / 100 * window.scrollY,
					},
				}

				if (parallaxOpacityType in parallaxScrollConfig.opacity) {
					parallaxScrollTarget.style.opacity = parallaxScrollConfig.opacity[parallaxOpacityType]
				}

				if (parallaxScaleType in parallaxScrollConfig.scale) {
					parallaxScrollTarget.style.scale = parallaxScrollConfig.scale[parallaxScaleType]
				}

				return
			}

			parallaxScrollTarget.style = null
		})
	}

	watcher('[data-parallax-scroll]', conditionWatcher, 0)
}