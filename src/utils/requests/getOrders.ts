import supabase from '$lib/supabase';

export const getOrders = async () => {
	const { data, error } = await supabase.rpc('get_orders_and_quantity');
	if (!error) return data;
	console.error('Error fetching data:', error);
	return [];
};
