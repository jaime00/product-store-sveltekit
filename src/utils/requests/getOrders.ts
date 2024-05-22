import supabase from '$lib/supabase';
import type { OrderDetail } from '../../types';

export const getOrders = async (): OrderDetail[] => {
	const { data, error } = await supabase.rpc('get_orders_and_quantity');
	if (error) {
		console.error('Error fetching data:', error);
		return [];
	}

	return data;
};
