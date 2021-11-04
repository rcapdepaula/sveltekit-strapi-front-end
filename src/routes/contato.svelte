<script>
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>NetViews - Contato</title>
</svelte:head>

<div class="container" in:fly>
	<h1>Contato</h1>
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
