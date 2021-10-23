<script>
	// Script will be here
</script>

<!--HTML here-->
<nav>
	<div class="container">
		<a href="/" class="logo-padding">
			<h1>LOGO</h1>
		</a>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Contact</a></li>
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
	a h1 {
		color: var(--white);
		display: flex;
		align-items: end;
	}

	nav ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		height: 62px;
		align-items: end;
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
	}
</style>
