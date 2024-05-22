<script lang="ts">
	import { goto } from '$app/navigation';
	import { createOrder } from '../../../utils/requests/createOrder';
	// import { createProduct } from '../../../utils/requests/createProduct';
	import CustomerSelector from '../CustomerSelector.svelte';
	import ProductSelector from '../ProductSelector.svelte';
	let name = '';
	let customer = '';
	let product = '';

	const onChangeCustomer = (customerId: string) => (customer = customerId);
	const onChangeProduct = (productId: string) => (product = productId);

	async function handleSubmit() {
		const response = createOrder({ customer_id: customer, product_id: product });
		goto('/order');
	}
</script>

<svelte:head>
	<title>Create a New Order</title>
	<meta name="description" content="Create a New Order" />
</svelte:head>

<div class="text-column">
	<form class="max-w-sm mx-auto" on:submit|preventDefault={handleSubmit}>
		<div class="mb-5 flex flex-wrap">
			<label for="name">Customer</label>
			<CustomerSelector {onChangeCustomer} />
		</div>
		<div class="mb-5 flex flex-wrap">
			<label for="category">Product:</label>
			<ProductSelector {onChangeProduct} />
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>Create a New Product</button
		>
	</form>
</div>
