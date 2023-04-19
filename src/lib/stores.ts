import { writable } from 'svelte/store';

export interface Deck {
	id: number;
	title: string;
	desc: string;
}

function createDecks() {
	const { subscribe, update } = writable<Deck[]>([]);

	return {
		subscribe,
		add: (deck: Deck) => update((decks) => [deck, ...decks])
	};
}

export const decks = createDecks();
