/*
<div class="filter" data-filter="list-filter__item">
	<nav class="filter__menu menu-filter">
		<ul class="menu-filter__list">
			<li class="menu-filter__item">
				<button type="button" data-filter-button="all" class="menu-filter__button _active">all</button>
			</li>
			<li class="menu-filter__item">
				<button type="button" data-filter-button="item-one" class="menu-filter__button">item 1</button>
			</li>
			<li class="menu-filter__item">
				<button type="button" data-filter-button="item-two" class="menu-filter__button">item 2</button>
			</li>
			<li class="menu-filter__item">
				<button type="button" data-filter-button="item-three" class="menu-filter__button">item 3</button>
			</li>
			<li class="menu-filter__item">
				<button type="button" data-filter-button="item-four" class="menu-filter__button">item 4</button>
			</li>
		</ul>
	</nav>
	<ul class="filter__list list-filter">
		<li class="list-filter__item item-one">item 1</li>
		<li class="list-filter__item item-three">item 3</li>
		<li class="list-filter__item item-one">item 1</li>
		<li class="list-filter__item item-two">item 2</li>
		<li class="list-filter__item item-four">item 4</li>
		<li class="list-filter__item item-two">item 2</li>
		<li class="list-filter__item item-three">item 3</li>
		<li class="list-filter__item item-one">item 1</li>
		<li class="list-filter__item item-three">item 3</li>
		<li class="list-filter__item item-four">item 4</li>
		<li class="list-filter__item item-two">item 2</li>
		<li class="list-filter__item item-four">item 4</li>
	</ul>
</div>
*/

import { switchClass } from "./functions.js"

export const filter = () => {
	const filterElements = document.querySelectorAll('[data-filter]')

	if (!filterElements?.length) return console.error(`Elements 'data-filter' not found`)

	const filteringItems = (searchIn, filterItems, filterValue) => {
		const filterItemElements = searchIn.querySelectorAll(`.${filterItems}`)

		if (!filterItemElements?.length) return console.error('filter content elements not found')

		filterItemElements.forEach(filterItemElement => {
			!filterItemElement.classList.contains(filterValue) && filterValue !== 'all'
				? filterItemElement.classList.add('_hide')
				: filterItemElement.classList.remove('_hide')
		})
	}

	filterElements.forEach(filterItem => {
		const filterData = filterItem.dataset.filter

		filterItem.addEventListener('click', event => {
			const filterButtonTarget = event.target.closest('[data-filter-button]')

			if (!filterButtonTarget) return

			const filterButtonData = filterButtonTarget.dataset.filterButton

			switchClass(filterItem, filterButtonTarget, '[data-filter-button]', '_active')
			filteringItems(filterItem, filterData, filterButtonData)
		})
	})
}