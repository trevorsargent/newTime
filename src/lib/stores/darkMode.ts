import { writable } from 'svelte/store';

const { subscribe, update } = writable(false);

export const darkMode = {
	subscribe,
	set: (val: boolean) => update(() => val),
	toggle: () => {
		update((val) => !val);
	}
};
