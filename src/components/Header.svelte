<script>
	// Script will be here

	import Navigation from './Navigation.svelte';
	import Hamburger from './Hamburger.svelte';
	import OverlayMenu from './OverlayMenu.svelte';
	import SearchBar from './SearchBar.svelte';

	let showOverlayMenu = false;

	const toggleOverlayMenu = () => {
		showOverlayMenu = !showOverlayMenu;
	};
</script>

<!--HTML here-->
<header class="container">
	<span class="content">
		<Navigation />
		<span on:click={toggleOverlayMenu}>
			<Hamburger />
		</span>

		<OverlayMenu {showOverlayMenu} on:click={toggleOverlayMenu} />
	</span>
</header>

<SearchBar />

<style>
	/* styles here */

	.container {
		position: relative;
		display: flex;
		align-items: center;
		height: 100px;
		list-style-type: none;
		margin: 0;
		padding: 0;
		background-color: var(--purple);
		overflow: hidden;
		align-items: start;
	}

	.content {
		width: var(--max-width);
		margin: 0 auto;
	}
</style>
