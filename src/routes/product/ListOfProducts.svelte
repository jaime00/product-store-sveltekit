<script lang="ts">
	// @ts-nocheck
	import type { ProductWithCategory } from '../../types';
	import { getProductsWithCategory } from '../../utils/requests/getProductsWithCategory';
	import loadingSVG from '../../lib/images/loading.svg';

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
	<img src={loadingSVG} alt="Loading..." />
{:else}
	<div class="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
		{#if products.length > 0}
			<h1 class="text-2xl font-bold mb-4 text-center">Products</h1>
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
