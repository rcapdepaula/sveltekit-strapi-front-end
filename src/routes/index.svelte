<script context="module">
	export async function load({ page, fetch }) {
		const pagination = page.query.get('page') ?? 1;

		// calculate start page
		const startPage = pagination ? parseInt(pagination) : 1;
		// let startPage = +pagination === 1 ? 0 : (+pagination - 1) * 2;
		console.log(pagination);

		// fetch total/count
		const totalUrl = `http://localhost:1337/posts/count`;
		const totalRes = await fetch(totalUrl);
		// // calculate last pages

		// fecth articles
		const url = `http://localhost:1337/posts?=_sort=date:DESC&_start=${startPage}&_limit=3`;

		const articelRes = await fetch(url);

		if (articelRes.ok && totalRes.ok) {
			return {
				props: {
					posts: await articelRes.json(),
					total: await totalRes.json(),
					pagination: +pagination
				}
			};
		}

		return {
			status: articelRes.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { scale } from 'svelte/transition';
	import PostList from '../components/PostList.svelte';
	import Pagination from '../components/Pagination.svelte';
	export let posts = [];
	export let pagination;
	export let total;
	let lastPage = Math.ceil(total / 3);
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="keywords" content="blog, svelte, sveltejs, svelte.dev, sveltejs.com," />
</svelte:head>

<div class="container" in:scale>
	<!-- posts list component -->
	<div class="post-card">
		{#each posts as post (post.id)}
			{#if posts.length > 0}
				<PostList {post} />
			{:else}
				<p>No posts found</p>
			{/if}
		{/each}
	</div>
	<!-- pagination -->
	<Pagination {pagination} {lastPage} />
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
