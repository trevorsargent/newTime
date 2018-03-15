import { hourHandFraction, minHandFraction, secHandFraction } from './analog.js'

export const makeUpdateTime = (a) => () => {

	const w = 500
	const h = 500
	const r = 225
	const outerBandWidth = 35
	const innerBandWidth = 35
	const bandGap = 15

	const now = new Date()
	const hour = now.getHours()
	const mins = now.getMinutes()
	const secs = now.getSeconds()
	const mili = now.getMilliseconds()

	a.width = 500
	a.height = 500
	const c = a.getContext('2d')
	c.translate(w / 2, h / 2)
	c.rotate(Math.PI / -2)

	let hourAngle = hourHandFraction(hour, mins, secs) * 2 * Math.PI
	let minAngle = minHandFraction(mins, secs) * 2 * Math.PI
	let secAngle = secHandFraction(secs, mili) * 2 * Math.PI

	while (minAngle < hourAngle) {
		minAngle += 2 * Math.PI
	}

	while (secAngle < minAngle) {
		secAngle += 2 * Math.PI
	}

	// draw hour / min hand
	drawArcBand(c, minAngle, secAngle, r, r - outerBandWidth)
	drawArcBand(c, hourAngle, minAngle, r - (outerBandWidth + bandGap), r - (outerBandWidth + innerBandWidth + bandGap))
}

const drawArcBand = (c, start, end, rOuter, rInner) => {
	c.beginPath()
	c.arc(0, 0, rOuter, start, end)
	c.lineTo(0, 0)
	c.closePath()
	c.fillStyle = 'black'
	c.fill()
	c.beginPath()
	c.arc(0, 0, rInner, 0, 2 * Math.PI)
	c.closePath()
	c.fillStyle = 'white'
	c.fill()
}
