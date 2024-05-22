import supabase from '$lib/supabase';
import type { Order } from '../../types';

export const createOrder = async ({ customer_id, product_id }: Order) => {
	const { data: orderInfo, error: orderError } = await supabase
		.from('order')
		.insert([{ customer_id }])
		.select('id')
		.single();

	if (orderError) {
		return { isSuccess: false, error: orderError };
	}

	const order_id = orderInfo.id;

	const { error: orderProductError } = await supabase
		.from('order_product')
		.insert([{ order_id, product_id }]);

	if (orderProductError) {
		return { isSuccess: false, error: orderProductError };
	}

	return { isSuccess: true };
};
