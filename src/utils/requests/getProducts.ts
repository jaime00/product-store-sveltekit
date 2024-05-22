import supabase from '../../lib/supabase';

export const getProducts = async () => {
	const { data, error } = await supabase.from('product').select('id, name');
	if (error) console.error('Error fetching products:', error.message);
	return data;
};
