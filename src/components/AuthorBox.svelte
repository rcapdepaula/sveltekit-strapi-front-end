<script>
	// Script will be here
	export let author;
</script>

<!--HTML here-->
<div class="author-box">
	<img src={author.image.formats.thumbnail.url} alt={author.name} class="author-box-img" />
	<div class="author-info">
		<span class="author-name">
			{author.name}
		</span>
		<p class="author-bio">
			{author.bio}
		</p>
	</div>
</div>

<style>
	/* styles here */
	.author-box {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
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
