<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { map } from 'rxjs/operators';

	const t = time.pipe(
		map((time) => {
			const hour = time.get('hour');
			const mins = time.get('minute');
			const secs = time.get('second');

			const minInSecs = 60;
			const hourInSecs = 60 * minInSecs;
			const dayInSecs = 24 * hourInSecs;

			const secTime = secs;
			const minTime = mins * minInSecs + secTime;
			const hourTime = hour * hourInSecs + minTime;

			const secPercent = (secTime / minInSecs) * 100;
			const minPercent = (minTime / hourInSecs) * 100;
			const hourPercent = (hourTime / dayInSecs) * 100;

			return {
				secs: secPercent,
				mins: minPercent,
				hours: hourPercent
			};
		})
	);
</script>

{#if $t}
	<div id="progressClock">
		<div id="h" class="bar" style="width: {$t.hours}%;" />
		<div id="m" class="bar" style="width: {$t.mins}%" />
		<div id="s" class="bar" style="width: {$t.secs}%" />
	</div>
{/if}

<Info>
	<h1>Progress Marches On...</h1>
	<p>Each progress bar represents one 'hand' of a clock.</p>
	<p>The top bar represents the 'hours' - moving from left to right across the whole day</p>
	<p>The middle bar represents the 'minutes' - moving from left to right across the current hour</p>
	<p>
		The bottom bar represents the 'seconds' - moving from left to right across the current minute
	</p>
</Info>

<style>
	#progressClock {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		width: 100%;
	}

	.bar {
		background: var(--fg);
		transition: width 1s linear;
		height: 0.65rem;
	}

	#h {
		grid-row: 2;
	}

	#m {
		grid-row: 3;
	}

	#s {
		grid-row: 4;
	}
</style>
