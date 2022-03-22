<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { time } from '$lib/stores';
	import { map } from 'rxjs/operators';

	const makeTimeHash = (h: number, m: number) => {
		return `${h.toString().padStart(2, '0')}${m.toString().padStart(2, '0')}`;
	};

	const times = new Array(60 * 24)
		.fill(null)
		.map((_, idx) => idx)
		.map((c) => {
			const hour = Math.floor(c / 60);
			const minute = c % 60;
			return makeTimeHash(hour, minute);
		});

	const sumTime = (str: string) =>
		str
			.split('')
			.map((x) => Number.parseInt(x))
			.reduce((sum, n) => {
				return sum + n;
			}, 0);

	const t = time.pipe(
		map((time) => time.toFormat('HHmm')),
		map((str) => ({
			sum: sumTime(str),
			count: times.filter((s) => sumTime(s) === sumTime(str)).findIndex((s) => s === str) + 1
		}))
	);
</script>

{#if $t}
	<h1 id="sum">{$t.sum}</h1>
	<p />
	<h1 id="slash">/</h1>
	<h2 id="num">{$t.count}</h2>
{/if}

<Info>
	<h1>Sum Time Now...</h1>

	<p>
		This two digit representation was born around a lunch table while contemplating the arbitrary
		nature of time. Snobby, I know. It was first created in just a few moments of cross faded flurry
		after only moments of preparation.
	</p>

	<p>
		The larger number represents the sum of the digits of the 24 hour clock (13:45 sums to 13) and
		the smaller number represents the number of times that the larger number has appeared so far
		today.
	</p>
</Info>

<style>
	#sum,
	#slash,
	#num {
		font-weight: 200;
		margin: 0;
		padding: 0;
	}

	#sum {
		font-size: 250px;
		margin-bottom: 50px;
	}

	#slash {
		font-size: 65px;
		margin-top: 180px;
		margin-left: -10px;
	}

	#num {
		margin-top: 198px;
		margin-left: 10px;
		font-size: 45px;
	}
</style>
