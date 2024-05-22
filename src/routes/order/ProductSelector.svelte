<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { getProducts } from '../../utils/requests/getProducts';
	import { PRODUCT_BYDEFAULT } from '../../utils/defaults';

	export let title = '';
	export let onChangeProduct = (param: string): void => {};
	let products = [];

	const handleChange = (event) => {
		onChangeProduct(event.target.value);
	};

	onMount(async () => (products = await getProducts()));
</script>

<div class="flex w-full flex-nowrap mt-4">
	<label for="customer-selector" class="block mb-2 text-sm font-medium text-gray-900">{title}</label
	>
	<select
		required
		id="customer-selector"
		on:change={handleChange}
		class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
	>
		<option value={PRODUCT_BYDEFAULT.value}>{PRODUCT_BYDEFAULT.name}</option>

		{#each products as product}
			<option value={product.id}>{product.name}</option>
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
