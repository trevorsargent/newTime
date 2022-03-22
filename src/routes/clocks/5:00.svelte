<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { map } from 'rxjs/operators';

	const t = time.pipe(
		map((now) => {
			const hour = now.get('hour');
			const mins = now.get('minute');
			const secs = now.get('second');

			return {
				h: (23 - hour).toString().padStart(2, '0'),
				m: (59 - mins).toString().padStart(2, '0'),
				s: (59 - secs).toString().padStart(2, '0')
			};
		})
	);
</script>

{#if $t}
	<div id="downClock">
		<div class="digit">{$t.h}</div>
		<div class="marker">:</div>
		<div class="digit">{$t.m}</div>
		<div class="marker">:</div>
		<div class="digit">{$t.s}</div>
	</div>
{/if}

<Info>
	<h1>Anxious Time</h1>

	<p>
		A return to something a bit more familiar, this is a typical 24 hours clock, with the notable
		exception that it counts down from 24:00:00 to 00:00:00 each day.
	</p>
	<p>
		I made this as a reminder not to count down to the ends of things, instead rememebring to enjoy
		the time as it is, and not waste what is left.
	</p>
</Info>

<style>
	#downClock {
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
