import supabase from '$lib/supabase';
import type { Product } from '../../types';

export const createProduct = async (newProduct: Product) => {
	const { name, category_id } = newProduct;
	const { error } = await supabase.from('product').insert([{ name, category_id }]);
	if (error) console.error('Error creating product:', error);
};
