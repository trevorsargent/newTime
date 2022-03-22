<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { hourHandFraction, minHandFraction, secHandFraction } from '$lib/utils/analog';
	import { map } from 'rxjs/operators';

	const t = time.pipe(
		map((now) => {
			const hour = now.get('hour');
			const mins = now.get('minute');
			const secs = now.get('second');
			const mili = now.get('millisecond');

			const hourAngle =
				Math.floor(hourHandFraction(hour, mins, secs) * 360)
					.toString()
					.padStart(3, '0') + '•';
			const minAngle =
				Math.floor(minHandFraction(mins, secs) * 360)
					.toString()
					.padStart(3, '0') + '•';
			const secAngle =
				Math.floor(secHandFraction(secs, mili) * 360)
					.toString()
					.padStart(3, '0') + '•';

			return {
				h: hourAngle,
				m: minAngle,
				s: secAngle
			};
		})
	);
</script>

{#if $t}
	<div id="angleReadoutClock">
		<div class="digit">{$t.h}</div>
		<div class="digit">{$t.m}</div>
		<div class="digit">{$t.s}</div>
	</div>
{/if}
<Info>
	<h1>Protraction</h1>

	<p>
		This is the digitization of the analog clock face. It simply provides a readout of the angle of
		each of the hands on the clock face
	</p>
	<p>
		It occured to me that most adults look at an analog clock face and mostly observe which
		direction the hands are pointing, since the numbers around the perimeter are often implied. This
		takes that to a bit more of an abstract place.
	</p>
</Info>

<style>
	#angleReadoutClock {
		font-weight: 100;
		font-size: 150px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.digit {
		width: 300px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
