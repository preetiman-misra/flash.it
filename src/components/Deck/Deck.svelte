<script lang="ts">
	export let title = '';
	export let desc = '';
</script>

<div
	class="w-full min-h-[240px] card card-hover cursor-pointer flex flex-col justify-between items-end p-4 shadow-lg"
>
	<div class="spacer" />
	<div class="text-center w-full">
		<header class="card-header font-bold text-3xl text-primary-500">{title.toUpperCase()}</header>
		<span class="text-zinc-500">{desc}</span>
	</div>
	<footer class="card-footer">
		<button class="btn variant-filled-primary">View &rarr;</button>
	</footer>
</div>
