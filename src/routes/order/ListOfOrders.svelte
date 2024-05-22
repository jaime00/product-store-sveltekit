<script lang="ts">
	import { onMount } from 'svelte';
	import { getOrders } from '../../utils/requests/getOrders';
	import type { OrderDetail } from '../../types';
	import loadingSVG from '../../lib/images/loading.svg';

	let orders: OrderDetail[] = [];
	let isLoading = true;

	const setIsLoading = (loading: boolean) => (isLoading = loading);

	onMount(async () => {
		setIsLoading(true);
		orders = await getOrders();
		setIsLoading(false);
	});
</script>

{#if isLoading}
	<img src={loadingSVG} alt="Loading..." />
{:else}
	<div class="w-full bg-white shadow-md rounded-lg p-6 mt-4">
		<h1 class="text-2xl font-bold mb-4 text-center">Orders</h1>
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Order ID</th
					>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Customer Name</th
					>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Product Name</th
					>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Quantity</th
					>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>Created At</th
					>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-gray-200">
				{#each orders as { order_id, customer_name, product_name, quantity, created_at }}
					<tr>
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order_id}</td
						>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer_name}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product_name}</td>
						<!-- <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quantity}</td> -->
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
							<span
								class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
							>
								{quantity}
							</span>
						</td>
						<!-- <span class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{quantity}</span> -->
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{created_at}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
