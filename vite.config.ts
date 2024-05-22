import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL),
		'process.env.SUPABASE_KEY': JSON.stringify(process.env.SUPABASE_KEY)
	}
});
