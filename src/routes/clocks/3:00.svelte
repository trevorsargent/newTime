<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { map } from 'rxjs/operators';

	const t = time.pipe(
		map((time) => {
			const hour = time.get('hour');
			const mins = time.get('minute');
			const secs = time.get('second');

			const hourStrs = hour.toString(2).padStart(6, '0').split('');
			const minsStrs = mins.toString(2).padStart(6, '0').split('');
			const secsStrs = secs.toString(2).padStart(6, '0').split('');

			return {
				hourStrs,
				minsStrs,
				secsStrs
			};
		})
	);
</script>

{#if $t}
	<div id="binaryClock">
		<div id="h" class="timePlace">
			{#each $t.hourStrs as str}
				<div class="binaryDigit" style="height: {str === '0' ? '0' : '100'}%" />
			{/each}
		</div>
		<div class="mark" />
		<div id="m" class="timePlace">
			{#each $t.minsStrs as str}
				<div class="binaryDigit" style="height: {str === '0' ? '0' : '100'}%" />
			{/each}
		</div>
		<div class="mark" />
		<div id="s" class="timePlace">
			{#each $t.secsStrs as str}
				<div class="binaryDigit" style="height: {str === '0' ? '0' : '100'}%" />
			{/each}
		</div>
	</div>
{/if}

<Info>
	<h1>Binary Time</h1>

	<p>
		This is a fairly strict binary representation of a digital clock face, with an artistic
		rendering of the bits.
	</p>
	<p>
		Each section of the face (hours|minutes|seconds) is broken down into it's binary representaiton
		of 6 digits (10 -> 001010)
	</p>
	<p>Those binary digits are then depicted with a tall bar for a [1] and a short bar for a [0]</p>
	<p>They are animated for visual effect.</p>
</Info>

<style lang="scss">
	#binaryClock {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.timePlace {
		flex: 1;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
		padding: 30px;
	}

	.binaryDigit {
		background: var(--fg);
		width: 7px;
		min-height: 8px;
		transition: all 0.25s ease-in-out;
	}

	.mark {
		width: 2px;
		background: var(--fg);
		height: 100%;
		margin: 0 30px;
	}
</style>
