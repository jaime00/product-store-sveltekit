<script lang="ts">
	import { onMount } from 'svelte';
	import type { Product, ProductWithCategory } from '../../types';
	import { getProductsWithCategory } from '../../utils/requests/getProductsWithCategory';

	export let currentCategory;
	let products: ProductWithCategory[] = [];
	let isLoading = true;

	$: {
		(async function () {
			setIsLoading(true);
			products = await getProductsWithCategory(currentCategory);
			setIsLoading(false);
		})();
	}
	const setIsLoading = (loading: boolean) => (isLoading = loading);
</script>

{#if isLoading}
	<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"
		><radialGradient id="a11" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"
			><stop offset="0" stop-color="#565656"></stop><stop
				offset=".3"
				stop-color="#565656"
				stop-opacity=".9"
			></stop><stop offset=".6" stop-color="#565656" stop-opacity=".6"></stop><stop
				offset=".8"
				stop-color="#565656"
				stop-opacity=".3"
			></stop><stop offset="1" stop-color="#565656" stop-opacity="0"></stop></radialGradient
		><circle
			transform-origin="center"
			fill="none"
			stroke="url(#a11)"
			stroke-width="15"
			stroke-linecap="round"
			stroke-dasharray="200 1000"
			stroke-dashoffset="0"
			cx="100"
			cy="100"
			r="70"
			><animateTransform
				type="rotate"
				attributeName="transform"
				calcMode="spline"
				dur="2"
				values="360;0"
				keyTimes="0;1"
				keySplines="0 0 1 1"
				repeatCount="indefinite"
			></animateTransform></circle
		><circle
			transform-origin="center"
			fill="none"
			opacity=".2"
			stroke="#565656"
			stroke-width="15"
			stroke-linecap="round"
			cx="100"
			cy="100"
			r="70"
		></circle></svg
	>
{:else}
	<div class="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
		{#if products.length > 0}
			<h1 class="text-2xl font-bold mb-4 text-center">List of Products</h1>
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>ID</th
						>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>Nombre</th
						>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>Category</th
						>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					{#each products as { id, name, category }}
						<tr>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{id}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{name}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.name}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{:else}
			<h1 class="text-2xl font-bold mb-4 text-center">No results</h1>
		{/if}
	</div>
{/if}
