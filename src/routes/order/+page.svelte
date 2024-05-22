<svelte:head>
	<title>Orders</title>
	<meta name="description" content="Orders" />
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import ListOfOrders from './ListOfOrders.svelte';
	import type { Product, ProductWithCategory } from '../../types';
	// import { getProducts } from '../../utils/requests/getProducts';
	import Loading from '../../lib/images/loading.svg';
	import { goto } from '$app/navigation';

	// let products: ProductWithCategory[] = [];
	let currentCategory: string = '';
	let isLoading = false;

	const setIsLoading = (loading: boolean) => (isLoading = loading);

	// onMount(async () => {
	// 	setIsLoading(true);
	// 	products = await getProducts(currentCategory);
	// 	setIsLoading(false);
	// });
</script>

<div class="flex flex-col items-center justify-center mt-5">
	{#if isLoading}
		<div>
			<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"
				><radialGradient
					id="a11"
					cx=".66"
					fx=".66"
					cy=".3125"
					fy=".3125"
					gradientTransform="scale(1.5)"
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
		</div>
	{:else}
		<section>
			<!-- <a class="create-product" href="/product/create">Create a New Product</a> -->
			<button class="create-product btn" on:click={() => goto('/order/create')}
				>New Order</button
			>
			<ListOfOrders />
		</section>
	{/if}
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
