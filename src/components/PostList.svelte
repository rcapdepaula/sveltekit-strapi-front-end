<script>
	// Script will be here
	export let post;
</script>

<!--HTML here-->
<div>
	<!-- display posts images -->
	{#if post.image}
		<!--check if image is not empty -->
		<img
			src={post.image.formats.medium.url}
			alt={post.title}
			loading={post.id < 3 ? 'lazy' : 'eager'}
		/>
	{:else}
		<!-- if no images then placeholder -->
		<img src="images/900x600.png" alt={post.title} loading="lazy" />
	{/if}

	<div class="mobile-display">
		<h3>
			<a sveltekit:prefetch href={post.slug}>
				{post.title}
			</a>
		</h3>
		<p class="fade-truncate">
			{post.description}
		</p>
		<span class="categories">
			<img src="images/folder-open-solid.svg" alt="categorias" class="icon-categories" />
			{#each post.categories as category (category.id)}
				<span class="category">
					<a sveltekit:prefetch class="item" href={`/category?term=${category.name}`}>
						{category.name}
					</a>
				</span>
			{/each}

			<div class="category">
				<span class="date">
					<img src="images/calendar-check-solid.svg" alt="date" class="icon-categories" />
					<span style="margin-left: 10px;"> {new Date(post.created_at).toLocaleDateString()}</span>
				</span>
			</div>
		</span>
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

	.item {
		font-family: 'Arial', sans-serif;
		line-height: 2rem;
	}

	img {
		margin: 0;
		width: 580px;
		height: 386.66px;
	}

	.fade-truncate {
		margin-top: 20px;
		font-size: 20px;
		overflow: hidden;
		position: relative;
		letter-spacing: 1.5px;
		height: 57px;
	}
	.fade-truncate:after {
		position: absolute;
		content: '';
		bottom: 0;
		right: 0;
		width: 150px;
		height: 1.4em;
		background: linear-gradient(to right, transparent, var(--white) 50%);
	}
	p.fade-truncate {
		font-family: 'Poppins', sans-serif;
	}
	.categories {
		display: flex;
		align-items: center;
	}

	@media (max-width: 836px) {
		.categories {
			justify-content: center;
		}

		img {
			margin: 0;
			width: 486px;
			height: 322px;
		}
	}
	.category {
		margin-left: 10px;
	}
	@media (max-width: 768px) {
		.icon-categories {
			margin-left: 20px;
		}
	}
	.icon-categories {
		width: 20px;
		height: 20px;
	}
	.date {
		display: flex;
		align-items: center;
	}
</style>
