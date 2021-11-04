<script>
	import { scale } from 'svelte/transition';
	export let showOverlayMenu = false;
</script>

{#if showOverlayMenu}
	<div class="overlay-menu" in:scale out:scale>
		<div class="inner">
			<div class="inverted-logo">
				<img src="images/logo-white.svg" alt="logo" />
			</div>

			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/sobre">Sobre</a>
				</li>
				<li>
					<a href="/contato">Contato</a>
				</li>
			</ul>
		</div>
		<div class="close-button" on:click>
			<img src="images/xmark-solid.svg" alt="botão fechar" />
		</div>
	</div>
{/if}

<style>
	.overlay-menu {
		position: fixed;
		left: 50%;
		transform: translate(-50%, 0);
		width: 86%;
		height: 86%;
		padding: 20px;
		background: var(--dark-grey);
		z-index: 9999;
		/* display: none; */
	}

	.inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--darkGrey);
		width: 100%;
		height: 100%;
		color: #fff;
		padding: 40px;
	}
	.inverted-logo {
		max-width: 250px;
		margin: 0 0 60px 0;
	}

	.close-button {
		position: absolute;
		top: 50px;
		right: 50px;
		color: #fff;
		width: 30px;
		height: unset;
		cursor: pointer;
		transition: all 1s ease;
		outline: none;
		filter: invert(1);
	}
	.close-button:hover {
		transform: rotate(180deg);
	}
	img {
		width: 250px;
		margin: 0;
		padding: 0px 0 0 0;
	}

	ul {
		list-style: none;
		text-align: center;
	}

	a {
		text-decoration: none;
		color: #fff;
		font-size: 1.2rem;
		font-weight: bold;
		transition: all 0.3s ease;
		outline: none;
	}
</style>
