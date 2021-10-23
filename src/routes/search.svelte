<script context="module">
	export async function load({ page, fetch }) {
		const term = page.params.term;
		const url = 'http://localhost:1337/posts';
		const data = await fetch(`${url}?categories.name_contains=${term}`);

		if (data.ok) {
			return { props: { posts: await data.json() } };
		}

		return {
			status: data.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { scale } from 'svelte/transition';
	import PostList from '../components/PostList.svelte';
	let posts = [];
</script>

<head>
	<title>Resultados</title>
</head>
<div class="container" in:scale>
	<p>Resultados para <mark>xxxx</mark></p>
	<div class="post-card">
		{#each posts as post (post.id)}
			<PostList {post} />
		{/each}
	</div>
</div>

<style>
	.container {
		margin: 62px auto;

		max-width: var(--max-width);
	}
	.post-card {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-gap: 20px;
	}
</style>
