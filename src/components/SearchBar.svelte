<script>
	// Script will be here
	import { goto } from '$app/navigation';
	let searchTerm;
	const hanldeSearch = () => {
		// use goto to navigate to the search page
		goto(`/search?term=${searchTerm}`);

		searchTerm = '';
	};
</script>

<!--HTML here-->
<div>
	<div class="search-bar-container">
		<div class="search-bar-container-content">
			<img src="images/magnifying-glass-solid.svg" alt="" />
			<form on:submit|preventDefault={hanldeSearch}>
				<input type="text" placeholder="Pesquisar..." bind:value={searchTerm} />
			</form>
		</div>
	</div>
</div>

<style>
	/* styles here */
	.search-bar-container {
		display: flex;
		align-items: center;
		height: 56px;
		background: var(--purple-light);
		padding: 0 20px;
	}

	.search-bar-container-content {
		position: relative;
		max-width: var(--max-width);
		width: 50%;
		height: 32px;
		background: var(--elegant-grey);
		margin: 0 auto;
		border-radius: 6px;
		color: var(--white);
	}

	@media (max-width: 768px) {
		.search-bar-container-content {
			width: 100%;
		}
	}

	input {
		font-size: 20px;
		position: absolute;
		left: 0px;
		margin: 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		height: 31px;
		color: var(--med-grey);
	}

	input:focus {
		outline: none;
	}

	img {
		position: absolute;
		left: 15px;
		top: 7px;
		width: 19px;
	}
</style>
