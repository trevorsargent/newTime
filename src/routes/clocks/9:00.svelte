<script lang="ts">
	import Info from '$lib/components/Info.svelte';
	import { hourHandFraction, minHandFraction, secHandFraction } from '$lib/utils/analog';
	import { DateTime } from 'luxon';
	import { Canvas, Layer, t } from 'svelte-canvas';

	const w = 500;
	const h = 500;
	const r = 500;

	const outerBandWidth = 70;
	const innerBandWidth = 70;
	const bandGap = 30;

	$: render = ({ context: c }: { context: CanvasRenderingContext2D }) => {
		const _ = $t;
		const now = DateTime.local();
		const hour = now.get('hour');
		const mins = now.get('minute');
		const secs = now.get('second');
		const mili = now.get('millisecond');

		c.resetTransform();
		c.clearRect(0, 0, h * 2, w * 2);

		c.translate(h, w);
		c.rotate(Math.PI / -2);

		let hourAngle = hourHandFraction(hour, mins, secs) * 2 * Math.PI;
		let minAngle = minHandFraction(mins, secs) * 2 * Math.PI;
		let secAngle = secHandFraction(secs, mili) * 2 * Math.PI;

		while (minAngle < hourAngle) {
			minAngle += 2 * Math.PI;
		}

		while (secAngle < minAngle) {
			secAngle += 2 * Math.PI;
		}

		// draw hour / min hand
		drawArcBand(c, minAngle, secAngle, r, r - outerBandWidth);
		drawArcBand(
			c,
			hourAngle,
			minAngle,
			r - (outerBandWidth + bandGap),
			r - (outerBandWidth + innerBandWidth + bandGap)
		);
	};

	const drawArcBand = (
		c: CanvasRenderingContext2D,
		start: number,
		end: number,
		rOuter: number,
		rInner: number
	) => {
		var sourceElement = document.documentElement;

		var color = window.getComputedStyle(sourceElement, null).getPropertyValue('--fg');
		var bk = window.getComputedStyle(sourceElement, null).getPropertyValue('--bg');

		c.beginPath();
		c.arc(0, 0, rOuter, start, end);
		c.lineTo(0, 0);
		c.closePath();
		c.fillStyle = color;
		c.fill();
		c.beginPath();
		c.arc(0, 0, rInner, 0, 2 * Math.PI);
		c.closePath();
		c.fillStyle = bk;
		c.fill();
	};
</script>

declare module 'svelte-canvas';
<Canvas width={w} height={h} autoclear={false}>
	<Layer {render} />
</Canvas>

<Info>
	<h1>Sweep</h1>

	<p>These arcs represent the visual space between the hands of the analog clock face.</p>
	<p>
		It takes care to always sweep
		<em>forward</em> from the hour hand to the minute hand, and similarly
		<em>forward</em> from the minute hand to the second hand.
	</p>
</Info>
