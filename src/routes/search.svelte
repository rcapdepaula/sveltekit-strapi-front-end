<script context="module">
	export async function load({ page, fetch }) {
		const term = page.query.get('term');
		const url = 'https://sveltestrapiblog.herokuapp.com/posts';
		const data = await fetch(`${url}?description_contains=${term}`);

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
	import { flip } from 'svelte/animate';
	import PostList from '../components/PostList.svelte';
	export let posts = [];
</script>

<head>
	<title>Resultados</title>
</head>
<div class="container" in:scale>
	<div class="post-card">
		{#each posts as post (post.id)}
			<div animate:flip={{ duration: 500 }}>
				{#if posts.length > 0}
					<PostList {post} />
				{:else}
					<p>No posts found</p>
				{/if}
			</div>
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
