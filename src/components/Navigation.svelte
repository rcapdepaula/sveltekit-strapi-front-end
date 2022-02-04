<script>
	// Script will be here
</script>

<!--HTML here-->
<nav>
	<div class="container">
		<a sveltekit:prefetch href="/" class="logo-padding" alt="home">
			<img src="images/logo-white.svg" alt="" class="logo" />
		</a>
		<ul>
			<li><a sveltekit:prefetch href="/sobre">Sobre</a></li>
			<li><a sveltekit:prefetch href="/contato">Contato</a></li>
		</ul>
	</div>
</nav>

<style>
	/* styles here */
	@media (max-width: 768px) {
		.logo-padding {
			padding-left: 20px;
		}
	}
	.logo {
		width: 220px;
		height: 51.45px;
		max-width: 100%;
		margin: 13px;
	}
	nav ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		height: 21px;
		align-items: center;
	}
	nav ul li {
		margin-left: 20px;
		align-items: center;
		font-size: 1.2em;
	}

	nav ul li a {
		color: var(--white);
		text-decoration: none;
	}

	@media screen and (max-width: 1214px) {
		nav ul {
			display: none;
		}
	}
	.container {
		display: flex;
		width: var(--max-width);
		margin: 0 auto;
		justify-content: space-between;
		height: 92px;
		align-items: end;
	}
</style>
