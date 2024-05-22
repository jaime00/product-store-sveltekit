<script lang="ts">
	import ListOfOrders from './ListOfOrders.svelte';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Orders</title>
	<meta name="description" content="Orders" />
</svelte:head>

<div class="flex flex-col items-center justify-center mt-5">
	<section>
		<button class="btn" on:click={() => goto('/order/create')}>New Order</button>
		<ListOfOrders />
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
