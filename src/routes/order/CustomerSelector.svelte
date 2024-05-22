<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { getCustomers } from '../../utils/requests/getCustomers';
	import { CUSTOMER_BYDEFAULT } from '../../utils/defaults';

	export let title = '';
	export let onChangeCustomer = (param: string): void => {};
	let customers = [];

	const handleChange = (event) => {
		onChangeCustomer(event.target.value);
	};

	onMount(async () => {
		customers = await getCustomers();
	});
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
		<option value={CUSTOMER_BYDEFAULT.value}>{CUSTOMER_BYDEFAULT.name}</option>
		{#each customers as customer}
			<option value={customer.id}>{customer.name}</option>
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
