<script>
	import { fly } from 'svelte/transition';
</script>

<div class="container" in:fly>
	<h1>ABout</h1>
</div>

<style>
	.container {
		max-width: var(--max-width);
		margin: 62px auto;
	}
</style>
