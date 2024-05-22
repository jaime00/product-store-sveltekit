import supabase from '../../lib/supabase';

export const getProductsWithCategory = async (categoryId: string) => {
	let query = supabase
		.from('product')
		.select(
			`
			id,
			name,
			category:category_id (name)
		`
		)
		.order('id', { ascending: true });
	if (categoryId) query = query.eq('category_id', categoryId);
	const { data, error } = await query;
	if (error) console.error('Error fetching products:', error.message);
	return data;
};
