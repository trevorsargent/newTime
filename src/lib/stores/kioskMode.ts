import { writable } from 'svelte/store';

const { subscribe, update } = writable(false);

export const kioskMode = {
	subscribe,
	set: (val: boolean) => update(() => val),
	toggle: () => {
		update((val) => !val);
	}
};
