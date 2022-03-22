<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { hourHandFraction, minHandFraction, secHandFraction } from '$lib/utils/analog';
	import { map } from 'rxjs';

	const dirs = [
		'N',
		'NbE',
		'NNE',
		'NEbN',
		'NE',
		'NEbE',
		'ENE',
		'EbN',
		'E',
		'EbS',
		'ESE',
		'SEbE',
		'SE',
		'SEbS',
		'SSE',
		'SbE',
		'S',
		'SbW',
		'SSW',
		'SWbS',
		'SW',
		'SWbW',
		'WSW',
		'WbS',
		'W',
		'WbN',
		'WNW',
		'NWbW',
		'NW',
		'NWbN',
		'NNW',
		'NbW'
	];

	const cardinalize = (angle: number) => {
		const step = 360 / dirs.length;
		const slot = Math.round(angle / step - 0.5);
		return dirs[slot];
	};

	const t = time.pipe(
		map((now) => {
			const hour = now.get('hour');
			const mins = now.get('minute');
			const secs = now.get('second');
			const mili = now.get('millisecond');

			const hourDirection = cardinalize(hourHandFraction(hour, mins, secs) * 360);
			const minDirection = cardinalize(minHandFraction(mins, secs) * 360);
			const secDirection = cardinalize(secHandFraction(secs, mili) * 360);
			return {
				h: hourDirection,
				m: minDirection,
				s: secDirection
			};
		})
	);
</script>

{#if $t}
	<div id="cardinalClock">
		<div class="digitHolder">
			<div class="digit">{$t.h}</div>
		</div>
		<div class="digitHolder">
			<div class="digit">{$t.m}</div>
		</div>
		<div class="digitHolder">
			<div class="digit">{$t.s}</div>
		</div>
	</div>
{/if}

<Info>
	<h1>Cardinal Numbers</h1>

	<p>
		Analog can never be analog enough I guess. This clock recontextualizes the hands of a clock onto
		another famous circular measuring device. Each digit is represented by the closest 32 point
		compass direction.
	</p>
</Info>

<style>
	#cardinalClock {
		font-weight: 100;
		font-size: 150px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;
	}

	.digit {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.digitHolder {
		width: 320px;
		display: flex;
		flex: row;
		justify-content: center;
	}
</style>
