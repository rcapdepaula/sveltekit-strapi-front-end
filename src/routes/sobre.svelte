<script>
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>NetViews - Sobre</title>
</svelte:head>

<div class="container" in:fly>
	<h1>Sobre</h1>
	<div class="about">
		<img src="images/ricardodepaula.jpg" alt="Ricardo de Paula" />
		<div class="text">
			<h2>Ricardo de Paula</h2>
			<p>
				Vejo o desenvolvimento Web como um universo que está em constante expansão, se mexendo,
				sempre em movimento. Novas tecnologias surgem e orbitam em torno dos mundos já existentes,
				mutáveis, que evoluem de tempos em tempos, em seu ciclo efêmero ou duradouro. Minha busca
				insistente em explorar esses mundos, vem me transformando em um especialista. Sempre à
				procura de conhecimento, desenvolmento profissional e pessoal.
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
		height: auto;
		border-radius: 5px;
	}
</style>
