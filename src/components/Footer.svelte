<script>
	// Script will be here
</script>

<!--HTML here-->
<footer class="container">
	<h4>REDES SOCIAIS</h4>

	<div class="social-media-icons">
		<a href="https://twitter.com/redes_sociais" target="_blank" rel="noreferrer" alt="twitter">
			<img class="icons" src="images/twitter-brands.svg" alt="Twitter" />
		</a>
		<a
			href="https://www.linkedin.com/in/ricardodepaula/"
			target="_blank"
			rel="noreferrer"
			alt="linkedin"
		>
			<img class="icons left-space" src="images/linkedin-in-brands.svg" alt="linkedin" />
		</a>
	</div>
	<div class="sub-footer">
		{new Date().getFullYear()}. Ricardo de Paula. Desenvolvido com
		<img class="svelte-logo" src="images/svelte-logo.com.svg" alt="svelte logo" />
	</div>
</footer>

<style>
	/* styles here */
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: var(--dark-grey);
		color: #fff;
		text-align: center;
		height: 200px;
		padding-top: 10px;
	}

	.social-media-icons {
		display: flex;
		padding-top: 10px;
	}
	.icons {
		filter: invert(100%);
		width: 40px;
		height: 40px;
	}
	.left-space {
		margin-left: 15px;
	}
	.sub-footer {
		display: flex;
		width: 100%;
		background: var(--dark-grey);
		color: #fff;
		justify-content: center;
		text-align: center;
		padding: 8px 0px 8px 0px;
	}

	@media (max-width: 768px) {
		.sub-footer {
			font-size: 12px;
		}
	}
	h4 {
		margin-top: 62px;
	}
	.svelte-logo {
		width: 37px;
		height: 24px;
	}
</style>
