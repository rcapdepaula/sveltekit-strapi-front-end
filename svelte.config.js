import vercel from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: vercel(), // currently the adapter does not take any options
		target: '#svelte',

	}
};