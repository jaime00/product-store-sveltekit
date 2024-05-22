<script lang="ts">
	import ListOfProducts from './ListOfProducts.svelte';
	import CategorySelector from './CategorySelector.svelte';
	import { goto } from '$app/navigation';

	let currentCategory: string = '';
	const onChangeCategory = (newCategory: string) => {
		currentCategory = newCategory;
	};
</script>

<div class="flex flex-col items-center justify-center mt-5">
	<section>
		<!-- <a class="create-product" href="/product/create">Create a New Product</a> -->
		<button class="create-product btn" on:click={() => goto('/product/create')}>New Product</button>

		<CategorySelector {onChangeCategory} title={'Filter By Category'} />
		<ListOfProducts {currentCategory} />
	</section>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.4;
	}
	.btn {
		@apply inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
	}
</style>
