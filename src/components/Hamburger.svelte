<script>
	// Script will be here
</script>

<!--HTML here-->

<img src="images/bars-solid.svg" alt="hamburger icon" class="img" />

<style>
	/* styles here */

	img {
		width: 40px;
		height: 40px;
		position: absolute;
		top: 31px;
		right: 26px;
		cursor: pointer;
	}

	@media screen and (min-width: 1214px) {
		img {
			display: none;
		}
	}

	.img {
		filter: invert(100%);
	}

	.img:hover {
		transform: scale(1.1);
		transition: all 0.3s ease-in-out;
	}
</style>
