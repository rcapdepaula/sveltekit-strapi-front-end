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
		<input type="hidden" name="contact" value="contact" />
		<!-- <input type="text" name="bot-field" /> -->
		<p>
			<label>Seu Nome: <input type="text" name="name" /></label>
		</p>
		<p>
			<label>Seu Email: <input type="email" name="email" /></label>
		</p>
		<p>
			<label>Mensagem: <textarea name="message" /></label>
		</p>
		<p>
			<button type="submit">Send</button>
		</p>
	</form>
</div>

<style>
	.container {
		max-width: var(--max-width);
		margin: 62px auto;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0px 20px;
			text-align: center;
		}
	}
</style>
