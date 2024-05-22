import supabase from '../../lib/supabase';
import type { Product } from '../../types';

export const getProducts = async (): Promise<Product[]>=> {
	const { data, error } = await supabase.from('product').select('id, name');
	if (error) console.error('Error fetching products:', error.message);
	return data;
};
