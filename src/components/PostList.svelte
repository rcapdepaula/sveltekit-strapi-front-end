<script>
	// Script will be here
	export let post;
</script>

<!--HTML here-->
<div>
	<img src={post.image.formats.medium.url} alt={post.title} />
	<div class="mobile-display">
		<h3>
			<a href={post.slug}>
				{post.title}
			</a>
		</h3>
		<p class="fade-truncate">
			{post.description}
		</p>
		{#each post.categories as category (category.id)}
			<a href={`search?term=${category.name}`}>
				{category.name}
			</a>
		{/each}
	</div>
</div>

<style>
	/* styles here */
	@media (max-width: 768px) {
		.mobile-display {
			padding: 20px;
			text-align: center;
		}
	}

	a {
		font-family: 'Archivo Black', sans-serif;
		line-height: 2rem;
	}

	img {
		margin: 0;
	}

	.fade-truncate {
		margin-top: 20px;
		font-size: 20px;
		overflow: hidden;
		position: relative;
		letter-spacing: 1.5px;
		height: 53px;
	}
	.fade-truncate:after {
		position: absolute;
		content: '';
		bottom: 0;
		right: 0;
		width: 150px;
		height: 1em;
		background: linear-gradient(to right, transparent, var(--white) 50%);
	}
	p.fade-truncate {
		font-family: 'Poppins', sans-serif;
	}
</style>
