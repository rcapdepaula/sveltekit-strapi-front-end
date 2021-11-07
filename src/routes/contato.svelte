<script context="module">
	export const prerender = true;
</script>

<script>
	import { fly } from 'svelte/transition';
	let fields = {
		name: '',
		message: ''
	};
	let errors = {
		name: '',
		message: ''
	};
	let valid = false;

	const submitHandler = () => {
		valid = true;
		// validade name
		if (fields.name.trim().length < 3) {
			valid = false;
			errors.name = 'O nome deve ter pelo menos 3 caracteres';
		} else {
			errors.name = '';
		}
		// validate email

		// validate message
		if (fields.message.trim().length < 20) {
			valid = false;
			errors.message = 'O nome deve ter pelo menos 20 caracteres';
		} else {
			errors.message = '';
		}

		// submit form
		if (valid) {
			document.forms['contact'].submit();
		}
	};
</script>

<svelte:head>
	<title>NetViews - Contato</title>
</svelte:head>

<div class="container" in:fly>
	<h1>Contato</h1>

	<form
		on:submit|preventDefault={submitHandler}
		name="contact"
		method="post"
		netlify
		netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value="contact" />
		<!-- <input type="text" name="bot-field" /> -->
		<div class="form">
			<div class="name">
				<label for="name"
					>Seu Nome: <input
						type="text"
						name="name"
						id="name"
						placeholder="nome..."
						bind:value={fields.name}
					/></label
				>
				<div>
					{errors.name}
				</div>
			</div>
			<div class="email">
				<label for="email"
					>Seu Email: <input type="email" class="ml" name="email" placeholder="email..." /></label
				>
			</div>
			<div class="message">
				<label for="message"
					>Mensagem: <textarea
						name="message"
						placeholder="mensagem..."
						id="message"
						bind:value={fields.message}
					/></label
				>
				<div>
					{errors.message}
				</div>

				<p>
					<button>Enviar</button>
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
