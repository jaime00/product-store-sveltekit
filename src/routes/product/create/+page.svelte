<script lang="ts">
	import { goto } from '$app/navigation';
	import { createProduct } from '../../../utils/requests/createProduct';
	import CategorySelector from '../CategorySelector.svelte';
	let name = '';
	let category = '';

	const onChangeCategory = (categoryId: string) => (category = categoryId);

	async function handleSubmit() {
		const response = createProduct({ name, category_id: category });
		goto('/');
	}
</script>

<svelte:head>
	<title>Create a New Product</title>
	<meta name="description" content="Create a New Product" />
</svelte:head>

<div class="text-column">
	<form class="max-w-sm mx-auto" on:submit|preventDefault={handleSubmit}>
		<div class="mb-5">
			<label for="name">Product Name</label>
			<input
				type="text"
				id="name"
				bind:value={name}
				class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
				required
			/>
		</div>
		<div class="mb-5 flex flex-wrap">
			<label for="category">Category:</label>
			<CategorySelector {onChangeCategory} />
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>Create a New Product</button
		>
	</form>
</div>
