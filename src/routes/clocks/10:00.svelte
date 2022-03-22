<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { map } from 'rxjs';

	const numMap = (num: number, max: number, mapMax: number) => {
		return (num / max) * mapMax;
	};

	const t = time.pipe(
		map((now) => {
			const hour = now.get('hour');
			const mins = now.get('minute');
			const secs = now.get('second');

			const r = Math.floor(numMap(hour, 24, 255)).toString(16).padStart(2, '0');
			const g = Math.floor(numMap(mins, 60, 255)).toString(16).padStart(2, '0');
			const b = Math.floor(numMap(secs, 60, 255)).toString(16).padStart(2, '0');

			return `#${r}${g}${b}`;
		})
	);
</script>

<div id="colorClock" style="background-color: {$t}" />

<Info>
	<h1>Color Time</h1>

	<p>
		A nod to the platform on which these clocks are being made, here I'm taking advantage of the way
		that color is represented in a digital context.
	</p>
	<p>
		Each 'digit' of the time (though in this case, it's mostly irrelevant whether it's analog or
		digital) is fed into one of the color parameters for the clock's face.
	</p>
	<p>
		Color is calculated in 3 bytes, 1 per color. Each measure (hours|minutes|seconds) are mapped
		from their own range (0-24 for hours, 0-60 for the others) to a scale from 0 to 255 (the maximum
		value for any component of a color on the web
	</p>
	<p>
		The 'hours' control the red, the 'minutes' the green, and the 'seconds' the blue. The result is
		a unique color for every time of day, that moves through the whole color space in a jagged,
		seemingly random, but completely organized way.
	</p>
</Info>

<style>
	#colorClock {
		transition: all 0.7s;
		width: 50vh;
		height: 50vh;
		border-radius: 50%;
	}
</style>
