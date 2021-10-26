<script>
	// Script will be here
	export let pagination;
	export let lastPage;
</script>

<!--HTML here-->

<!-- {#if pagination != 1}
	<div>
		<h3>Página {pagination} / {lastPage}</h3>
	</div>
{/if} -->

<div class="container">
	{#if pagination > 1}
		<a class="nav-back" href="?page={pagination - 1}">Previous</a>
	{/if}
	{#if pagination < lastPage}
		<a class="navForward" href="?page={pagination + 1}">Next</a>
	{/if}
</div>

<style>
	/* styles here */
	.container {
		display: flex;
		justify-content: space-between;
		font-family: 'Archivo Black', Arial, Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 700;
		padding: 20px 11px 11px 11px;
		margin-bottom: 52px;
	}

	.nav-back {
		font-family: 'Inter', Arial, Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #fff;
		position: relative;
		width: 120px;
		height: 30px;
		display: block;
		background: #000;
		padding: 3px 10px 0 25px;
		margin-bottom: 10px;
	}

	@media (max-width: 768px) {
		.nav-back {
			margin-left: 20px;
		}
	}

	.nav-back:before {
		display: block;
		position: absolute;
		left: -15px;
		top: 50%;
		margin: 0;
		border: solid;
		content: '';
		pointer-events: none;
		border-right-color: #000;
		border-width: 15px;
		margin-top: -15px;
	}

	.nav-back:hover {
		background: var(--med-grey);
	}
	.nav-back:hover:before {
		border-right-color: var(--med-grey);
	}
	.navForward {
		font-family: 'Inter', Arial, Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #fff;
		position: relative;
		width: 120px;
		height: 30px;
		display: block;
		background: #000;
		padding: 3px 10px 0 5px;
		margin-bottom: 30px;
		text-align: center;
	}

	@media (max-width: 768px) {
		.navForward {
			margin-left: 20px;
		}
	}

	.navForward:after {
		display: block;
		position: absolute;
		left: 90%;
		top: 50%;
		margin: 0;
		border: solid;
		content: '';
		pointer-events: none;
		border-left-color: #000;
		border-width: 15px;
		margin-top: -15px;
	}
	.navForward:hover {
		background: var(--med-grey);
	}
	.navForward:hover:after {
		border-left-color: var(--med-grey);
	}
</style>
