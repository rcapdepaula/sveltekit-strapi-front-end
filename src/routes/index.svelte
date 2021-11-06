<script context="module">
	export async function load({ page, fetch }) {
		const pagination = page.query.get('page') ?? 1;

		let PER_PAGE = 2;
		// calculate start page
		let startPage = +pagination === 1 ? 0 : (+pagination - 1) * PER_PAGE;

		// fetch total/count
		const totalUrl = `https://sveltestrapiblog.herokuapp.com/posts/count`;
		const totalRes = await fetch(totalUrl);

		// fecth articles
		const url = `https://sveltestrapiblog.herokuapp.com/posts?_sort=created_at:DESC&_start=${startPage}&_limit=${PER_PAGE}`;

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
	import PostList from '../components/PostList.svelte';
	import Pagination from '../components/Pagination.svelte';
	export let posts = [];
	export let pagination;
	export let total;
	// change number of posts per page if change limit in query
	let lastPage = Math.ceil(total / 2); // change num);
</script>

<svelte:head>
	<title>NetViews</title>
	<meta name="keywords" content="blog, svelte, sveltejs, svelte.dev, sveltejs.com," />
</svelte:head>

<div class="container">
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
