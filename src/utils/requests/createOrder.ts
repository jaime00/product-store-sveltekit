import supabase from '$lib/supabase';
import type { Order } from '../../types';

export const createOrder = async ({ customer_id, product_id }: Order): Promise<void> => {
	const { data: orderInfo, error: orderError } = await supabase
		.from('order')
		.insert([{ customer_id }])
		.select('id')
		.single();

	if (orderError) {
		console.log('Error creating order:', orderError);
		return;
	}

	const order_id = orderInfo.id;

	const { error: orderProductError } = await supabase
		.from('order_product')
		.insert([{ order_id, product_id }]);

	if (orderProductError) console.log('Error creating order:', orderProductError);
};
