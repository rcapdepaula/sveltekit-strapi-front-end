import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte',

		// prerender 
		prerender:{
			enabled: true,
			crawl: true,
			entries:['*']
		}

	}
};