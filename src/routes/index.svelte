<script context="module">
	export async function load({ fetch }) {
		const url = `/posts`;
		const data = await fetch(url);

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
	export let posts = [];
</script>

{#each posts as post}
	<h4>{post.title}</h4>
	<p>{post.description}</p>
	<p>{post.content}</p>
{/each}
