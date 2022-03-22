<script lang="ts">
	import Info from '$lib/components/Info.svelte';

	import { time } from '$lib/stores';
</script>

{#if $time}
	<div id="unixClock">
		{$time.toMillis()}
	</div>
{/if}

<Info>
	<h1>Unix</h1>

	<p>
		There's the classic joke that says if you want to find all the computer scientists in the room,
		you stand up and yell "January 1st, 1970!" It's not that there was a significant invention or
		event on this day, but rather that is Unix Zero - The point in time that is zero (for time
		calculation purposes).
	</p>
	<p>
		It's a completely ludicrous way to think about time as a human person, but when you're a
		computer and can compare very large numbers very easily, measuing time in
		<em>the total number of miliseconds since 00:00:00:0000 on January 1st, 1970</em> is just as reasonable
		if not much simpler than representing our completely arbitary gregorian calendar in memory.
	</p>
	<p>
		Y2K is very famous for having almost destroyed the functions of every enterprise system all over
		the world when the 2 digit year baked into the time calculation of most systems was going to
		roll over to 00, placing every new computation 100 years in the past. Without the tireless work
		from developers throughout the years leading up to the new millenium, and indeed the creation of
		this unix time system, the catalysm that was so drummed up in the media would have taken place.
	</p>
	<p>
		It's actually a rather elegant solution that provides it's on host of problems (i.e. problems to
		tackle, not flaws) surrounding time zones, and daylight saving time and the like, but for the
		time being, this will do nicely.
	</p>
</Info>

<style>
	#unixClock {
		font-family: 'Oswald', sans-serif;
		font-weight: 100;
		font-size: 150px;
		width: 930px;
		text-align: left;
	}
</style>
