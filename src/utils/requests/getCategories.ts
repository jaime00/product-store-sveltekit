import supabase from '../../lib/supabase';

export const getCategories = async () => {
	const { data = [], error } = await supabase.from('category').select('id, name');
	if (error) console.error('Error fetching products:', error.message);
	return data;
};
