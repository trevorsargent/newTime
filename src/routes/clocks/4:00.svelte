<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { map } from 'rxjs/operators';

	const t = time.pipe(
		map((now) => {
			const hour = now.get('hour').toString().padStart(2, '0');
			const mins = now.get('minute').toString().padStart(2, '0');
			const secs = now.get('second').toString().padStart(2, '0');
			return `${hour}${mins}${secs}`
				.split('')
				.map((x) => Number.parseInt(x))
				.map(countSegments)
				.map((segs) => new Array(segs).fill(null));
		})
	);

	const countSegments = (digit: number) => {
		switch (digit) {
			case 1:
				return 2;
			case 2:
				return 5;
			case 3:
				return 5;
			case 4:
				return 4;
			case 5:
				return 5;
			case 6:
				return 5;
			case 7:
				return 3;
			case 8:
				return 7;
			case 9:
				return 5;
			case 0:
				return 6;
			default:
				return 0;
		}
	};
</script>

{#if $t}
	<div id="segmentClock">
		{#each $t as place}
			<div class="place">
				{#each place as seg}
					<div class="segment">
						<div class="segment-fill" />
					</div>
				{/each}
			</div>
		{/each}
	</div>
{/if}

<Info>
	<h1>Segments</h1>

	<p>
		Here we take a dip into the absurd, with an almost 'constructivist' represenation of a typical
		'7-segment' display.
	</p>
	<p>
		Each stack of 'segments' represents how many lighted lines each cell of a typical segmented
		display would require to display the 24 hour time. 1 requires 2 segments, 2 requires 5, 3 as
		well etc.
	</p>
	<p>
		Each cell is shown with all its required segments simply stacked. It is possible to read this
		clock with some careful plotting of the patterns of segments that each digit requires. Once the
		pattern is known, each digit can be deciphered and the time read off.
	</p>
</Info>

<style>
	#segmentClock {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-end;
		box-sizing: border-box;
		width: 100%;
		height: 7rem;
	}

	.place {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.segment {
		height: 10px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 150px;
		margin-bottom: 3px;
	}

	.segment-fill {
		background: var(--fg);
		width: 100px;
		height: 100px;
		transform: rotateZ(45deg);
	}
</style>
