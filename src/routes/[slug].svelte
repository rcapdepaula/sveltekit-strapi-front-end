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
	import { fly } from 'svelte/transition';
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article in:fly>
	<div class="mobile-display">
		<h1>
			{post.title}
		</h1>
		<div>
			{@html post.content}
		</div>

		<div class="author-box">
			<img
				src={post.writer.image.formats.thumbnail.url}
				alt={post.writer.name}
				class="author-box-img"
			/>
			<div class="author-info">
				<span class="author-name">
					{post.writer.name}
				</span>
				<p class="author-bio">
					{post.writer.bio}
				</p>
			</div>
		</div>
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

	.author-box {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		box-shadow: rgb(149 157 165 / 20%) -4px -4px 24px;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		width: fit-content;
		padding: 20px 42px 20px 42px;
		max-width: 906px;
	}

	.author-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin-left: 20px;
	}

	@media (max-width: 768px) {
		.author-box {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.author-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-left: 0px;
		}
	}

	.author-box-img {
		border-radius: 100%;
		margin: 0;
	}

	.author-name {
		margin-top: 20px;
		font-weight: 700;
	}

	.author-bio {
		margin-top: 10px;
		font-size: 1rem;
		max-width: 726px;
		margin-bottom: 0;
	}
</style>
