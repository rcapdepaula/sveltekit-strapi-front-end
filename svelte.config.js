/** @type {import('@sveltejs/kit').Config} */
import adpter from '@sveltejs/adapter-netlify'
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adpter: adpter()
	}
};

export default config;

