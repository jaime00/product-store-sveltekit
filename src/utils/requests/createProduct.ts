import supabase from '$lib/supabase';
import type { Product } from '../../types';

export const createProduct = async (newProduct: Product) => {
	const { name, category_id } = newProduct;
	const { error: supabaseError } = await supabase
		.from('product')
		.insert([{ name, category_id }]);
	return { isSuccess: !!supabaseError, supabaseError };
};
