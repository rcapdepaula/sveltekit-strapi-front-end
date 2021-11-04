<script>
	// Script will be here
	export let pagination;
	export let lastPage;
</script>

<div class="container">
	{#if pagination > 1}
		<a class="nav-back" href="?page={pagination - 1}">Anterior</a>
	{/if}
	{#if pagination < lastPage}
		<a class="navForward" href="?page={pagination + 1}">Próximo</a>
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
		font-family: 'Arial', Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #fff;
		position: relative;
		width: 120px;
		height: 34px;
		display: block;
		background: #000;
		padding: 3px 10px 0 25px;
		margin-bottom: -14px;
		text-align: end;
	}

	.nav-back:before {
		display: block;
		position: absolute;
		left: -7px;
		top: 45%;
		margin: 0;
		border: solid;
		content: '';
		pointer-events: none;
		border-right-color: #000;
		border-width: 17px;
		margin-top: -15px;
	}

	.nav-back:hover {
		background: var(--med-grey);
	}
	.nav-back:hover:before {
		border-right-color: var(--med-grey);
	}
	.navForward {
		font-family: 'Arial', Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 800;
		color: #fff;
		position: relative;
		width: 120px;
		height: 34px;
		display: block;
		background: #000;
		padding: 3px 10px 0 5px;
		margin-bottom: -14px;
		text-align: start;
	}
	a.navForward {
		padding-left: 10px;
	}

	.navForward:after {
		display: block;
		position: absolute;
		left: 93px;
		top: 45%;
		margin: 0;
		border: solid;
		content: '';
		pointer-events: none;
		border-left-color: #000;
		border-width: 17px;
		margin-top: -15px;
	}
	.navForward:hover {
		background: var(--med-grey);
	}
	.navForward:hover:after {
		border-left-color: var(--med-grey);
	}
</style>
