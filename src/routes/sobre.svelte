<script>
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>NetViews - Sobre</title>
</svelte:head>

<div class="container" in:fly>
	<h1>Sobre</h1>
	<div class="about">
		<img src="images/ricardodepaula.png" alt="Ricardo de Paula" loading="lazy" />
		<div class="text">
			<h2>Ricardo de Paula</h2>
			<p>
				I'm baby four dollar toast iPhone migas cred everyday carry deep v health goth ethical vape
				four loko. Lomo offal austin pour-over mlkshk, schlitz neutra roof party palo santo vinyl
				literally man braid. Biodiesel bushwick typewriter beard 3 wolf moon pop-up aesthetic. Umami
				photo booth ugh keytar man bun meh migas single-origin coffee put a bird on it lumbersexual
				seitan. Poke listicle biodiesel photo booth unicorn seitan. Chillwave wolf mustache DIY
				iPhone. Farm-to-table craft beer iPhone, marfa street art plaid tumblr pickled before they
				sold out tacos YOLO.
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: var(--max-width);
		margin: 59px auto;
		margin-bottom: 33px;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0px 20px;
			text-align: center;
		}
	}
	h1 {
		display: none;
	}

	.about {
		display: flex;
		align-items: center;
	}
	.about .text {
		padding-left: 20px;
	}

	@media (max-width: 768px) {
		.about {
			flex-direction: column;
			align-items: center;
		}
		.about .text {
			padding-left: 0px;
		}

		h1 {
			display: block;
		}
	}
	.about img {
		width: 450px;
		height: 450px;
		border-radius: 100px;
	}
</style>
