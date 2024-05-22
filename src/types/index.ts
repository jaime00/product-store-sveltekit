export type Product = {
	id?: number;
	name: string;
	category_id?: string;
};

export type ProductWithCategory = {
	id?: number;
	name: string;
	category: Category;
};

export type Category = {
	id?: string;
	name: string;
};

export type Order = {
	product_id: string;
	customer_id: string;
};

export type OrderDetail = {
	order_id: number;
	customer_name: string;
	product_name: string;
	quantity: number;
	created_at: string;
};

export type supabaseResponse = {
	error: string;
	data: unknown[];
};
