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
</style>
