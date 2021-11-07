<script context="module">
	export const prerender = true;
</script>

<script>
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>NetViews - Contato</title>
</svelte:head>

<div class="container" in:fly>
	<h1>Contato</h1>

	<form name="contact" method="post" netlify netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="contact" />
		<!-- <input type="text" name="bot-field" /> -->
		<div class="form">
			<div class="name">
				<label>Seu Nome: <input type="text" name="name" /></label>
			</div>
			<div class="email">
				<label>Seu Email: <input type="email" class="ml" name="email" /></label>
			</div>
			<div class="message">
				<label>Mensagem: <textarea name="message" /></label>

				<p>
					<button type="submit">Enviar</button>
				</p>
			</div>
		</div>
	</form>
</div>

<style>
	.container {
		max-width: var(--max-width);
		margin: 62px auto;
	}
	.form {
		display: grid;
		grid-template-columns: 300px 300px;
	}
	.name {
		grid-column: 1 / 2;
	}
	.email {
		grid-column: 2 / 3;
	}
	.message {
		grid-column: 1 / 3;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0px 20px;
			text-align: left;
		}

		.form {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.ml {
			margin-left: 3px;
		}
		.email {
			margin-top: 20px;
		}
		.message {
			margin-top: 20px;
		}
	}
</style>
