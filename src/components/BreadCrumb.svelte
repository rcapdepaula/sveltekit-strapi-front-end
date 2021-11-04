<script>
	// Script will be here
	export let crumb;
</script>

<!--HTML here-->
<div class="breadcrumbs">
	<a href="/">Home</a> <img class="icon" src="images/arrow-left-solid.svg" alt="breadcrumbs" />
	<span class="truncate">{crumb.title}</span>
</div>

<style>
	/* styles here */
	.breadcrumbs {
		display: flex;
		justify-content: baseline;
		align-items: center;
	}
	.icon {
		width: 1em;
		height: 1em;
		margin: 0px 7px 0px 7px;
	}
	.truncate {
		overflow: hidden;
		withe-space: nowrap;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 400px;
	}
	a {
		text-decoration: none;
		color: #000;
		font-weight: 600;
		font-size: 20px;
	}
</style>
