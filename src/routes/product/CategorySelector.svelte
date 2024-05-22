<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { getCategories } from '../../utils/requests/getCategories';
	import { CATEGORY_BYDEFAULT } from '../../utils/defaults';

	export let title = '';
	export let onChangeCategory = (param: string): void => {};
	let categories = [];

	const onChangeFilterCategory = (event) => {
		onChangeCategory(event.target.value);
	};

	onMount(async () => (categories = await getCategories()));
</script>

<div class="flex w-full flex-nowrap mt-4">
	<label for="category-selector" class="block mb-2 text-sm font-medium text-gray-900">{title}</label
	>
	<select
		required
		id="category-selector"
		on:change={onChangeFilterCategory}
		class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
	>
		<option value={CATEGORY_BYDEFAULT.value}>{CATEGORY_BYDEFAULT.name}</option>
		{#each categories as category}
			<option value={category.id}>{category.name}</option>
		{/each}
		<div
			class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
		>
			<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path d="M7 10l5 5 5-5H7z" />
			</svg>
		</div>
	</select>
</div>
