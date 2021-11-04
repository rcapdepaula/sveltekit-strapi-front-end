<script context="module">
	export async function load({ page }) {
		const slug = page.params.slug;
		const url = 'http://localhost:1337/posts';
		const res = await fetch(`${url}?slug=${slug}`);
		const article = await res.json();

		return {
			props: {
				post: article[0]
			}
		};
	}
</script>

<script>
	import BreadCrumb from '../components/BreadCrumb.svelte';
	import AuthorBox from '../components/AuthorBox.svelte';
	import { fly } from 'svelte/transition';
	export let post;

	// output post content markdown to html
	import marked from 'marked';
	export let content = marked(post.content);
</script>

<svelte:head>
	<title>NetViews - {post.title}</title>
	<meta name="description" content={post.description} />
	<meta name="keywords" content={post.keywords} />
</svelte:head>

<article in:fly>
	<div class="mobile-display">
		<BreadCrumb crumb={post} />
		<p class="m-author">Autor: {post.author.username}</p>
		<p class="m-date">Postado em: {new Date(post.created_at).toLocaleDateString()}</p>
		<h1>
			{post.title}
		</h1>
		<!-- // post content here -->
		<div>
			{@html content}
		</div>
		<!-- // post content here -->

		<AuthorBox author={post.writer} />
	</div>
</article>

<style>
	@media (max-width: 768px) {
		.mobile-display {
			padding: 0px 20px;
			text-align: center;
		}
	}
	article {
		max-width: var(--max-width);
		margin: 62px auto;
	}
	.m-author {
		margin: 10px 0px 0px 0px;
	}

	.m-date {
		margin: 10px 0px 30px 0px;
	}
</style>
