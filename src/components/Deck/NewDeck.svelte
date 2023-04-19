<script lang="ts">
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	export let prompt: ModalSettings = {
		type: 'prompt'
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={() => modalStore.trigger(prompt)}
	class="group border-4 border-dashed border-zinc-600 hover:border-primary-500 w-full min-h-[240px] card card-hover transition duration-500 hover:variant-glass-secondary cursor-pointer flex flex-col justify-center items-center p-4 shadow-lg"
>
	<button class="btn variant-filled group-hover:variant-filled-primary">
		&plus; Create New Deck</button
	>
</div>
