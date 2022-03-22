<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { map } from 'rxjs/operators';

	const t = time.pipe(
		map((now) => {
			const hour = now.get('hour');
			const mins = now.get('minute');
			const secs = now.get('second');
			const mili = now.get('millisecond');

			let miliCount = mili + secs * 1000 + mins * 60 * 1000 + hour * 60 * 60 * 1000;

			const miliTotal = 24 * 60 * 60 * 1000;
			const decHour = miliTotal / 10;
			const decMin = decHour / 100;
			const decSec = decMin / 100;

			const dHour = Math.floor(miliCount / decHour);
			miliCount = miliCount % decHour;
			const dMins = Math.floor(miliCount / decMin);
			miliCount = miliCount % decMin;
			const dSecs = Math.floor(miliCount / decSec);

			return {
				h: dHour.toString().padStart(2, '0'),
				m: dMins.toString().padStart(2, '0'),
				s: dSecs.toString().padStart(2, '0')
			};
		})
	);
</script>

{#if $t}
	<div id="decimalClock">
		<div class="digit">{$t.h}</div>
		<div class="marker">:</div>
		<div class="digit">{$t.m}</div>
		<div class="marker">:</div>
		<div class="digit">{$t.s}</div>
	</div>
{/if}

<Info>
	<h1>Base 10</h1>
	<p>
		While some argue that we should move to a base 12 approach in the rest of our daily life, the
		digital clock remains one of the only international measures not calculated in a base 10 system.
	</p>
	<p>This clock counts 10 hours to a day, 100 minutes to an hour, 100 seconds to a minute.</p>
	<p>
		The most surprising thing to me was the fact that the rhythm of seconds ticking by was only
		slightly different from their current rate. Additionally, our day to day notions of would also
		not change drastically, with 15 base 10 minutes lasting about 21 base 12 minutes, and a new hour
		lasting about 85 old minutes
	</p>
</Info>

<style>
	#decimalClock {
		font-weight: 100;
		font-size: 300px;
		display: flex;
		flex-direction: row;
	}

	.digit {
		width: 304px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
