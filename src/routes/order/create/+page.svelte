<script lang="ts">
	import { goto } from '$app/navigation';
	import { createOrder } from '../../../utils/requests/createOrder';
	import BackToTheList from '../../BackToTheList.svelte';
	import CustomerSelector from '../CustomerSelector.svelte';
	import ProductSelector from '../ProductSelector.svelte';

	let customer = '';
	let product = '';

	const onChangeCustomer = (customerId: string) => (customer = customerId);
	const onChangeProduct = (productId: string) => (product = productId);

	const onSubmit = async () => {
		createOrder({ customer_id: customer, product_id: product });
		goto('/order');
	};
</script>

<svelte:head>
	<title>Create a New Order</title>
	<meta name="description" content="Create a New Order" />
</svelte:head>

<div class="text-column">
	<BackToTheList url="/order" />
	<form class="max-w-sm mx-auto pt-5 mt-5" on:submit|preventDefault={onSubmit}>
		<div class="mb-5 flex flex-wrap">
			<label for="name">Customer</label>
			<CustomerSelector {onChangeCustomer} />
		</div>
		<div class="mb-5 flex flex-wrap">
			<label for="category">Product:</label>
			<ProductSelector {onChangeProduct} />
		</div>
		<button type="submit" class="btn">Create</button>
	</form>
</div>
