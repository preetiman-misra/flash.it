<script lang="ts">
	import NewDeck from '../components/Deck/NewDeck.svelte';
	import Deck from '../components/Deck/Deck.svelte';
	import { decks } from '$lib/stores';

	// Modal
	import { Modal, type ModalSettings } from '@skeletonlabs/skeleton';
	const prompt: ModalSettings = {
		type: 'prompt',
		title: 'Enter Deck Name',
		valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
		response: (title: string) => createDeck(title)
	};

	function createDeck(title: string) {
		const newDeck = {
			id: $decks.length + 1,
			title,
			desc: ''
		};

		decks.add(newDeck);
	}
</script>

<Modal />
<h2 class="mb-4">All Decks &rarr;</h2>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
	<!-- Create new Deck -->
	<NewDeck {prompt} />

	<!-- List of Decks -->
	{#each $decks as deck}
		<Deck title={deck.title} desc={deck.desc} />
	{/each}
</div>
