import supabase from '../../lib/supabase';

export const getCustomers = async () => {
	const { data, error } = await supabase.from('customer').select('id, name');
	if (error) console.error('Error fetching customers:', error.message);
	return data;
};
