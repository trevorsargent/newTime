import * as Sum from './sumClock.js'
import * as Progress from './progressClock.js'
import * as Binary from './binaryClock.js'
import * as Segment from './segmentClock.js'
import * as Down from './downClock.js'
import * as Decimal from './decimalClock.js'
import * as AngleReadout from './angleReadoutClock.js'
import * as Digit from './digitClock.js'
import * as AngleSweep from './angleSweepClock.js'
import * as Color from './colorClock.js'

let updateTime
let freq = 1000

// #1 -- SumClock
const sumClock = document.getElementById('sumClock')
if (sumClock) {
	const dispSum = document.getElementById('sum')
	const dispNum = document.getElementById('num')

	Sum.setup()
	updateTime = Sum.makeUpdateTime(dispSum, dispNum)
}

// #2 -- Progress (Bars)
const progress = document.getElementById('progressClock')
if (progress) {
	const h = document.getElementById('h')
	const m = document.getElementById('m')
	const s = document.getElementById('s')

	updateTime = Progress.makeUpdateTime(h, m, s)
}

// #3 -- Vertical Binary
const binary = document.getElementById('binaryClock')
if (binary) {
	const h = document.getElementById('h')
	const m = document.getElementById('m')
	const s = document.getElementById('s')

	updateTime = Binary.makeUpdateTime(h, m, s)
}

// #4 -- Segmented
const segment = document.getElementById('segmentClock')
if (segment) {
	const h1 = document.getElementById('h1')
	const h2 = document.getElementById('h2')
	const m1 = document.getElementById('m1')
	const m2 = document.getElementById('m2')
	const s1 = document.getElementById('s1')
	const s2 = document.getElementById('s2')
	const arr = [h1, h2, m1, m2, s1, s2]

	updateTime = Segment.makeUpdateTime(arr)
}

// #5 -- Count Down
const down = document.getElementById('downClock')
if (down) {
	const h = document.getElementById('h')
	const m = document.getElementById('m')
	const s = document.getElementById('s')

	updateTime = Down.makeUpdateTime(h, m, s)
}
// #6 -- Decimal Time
const decimal = document.getElementById('decimalClock')
if (decimal) {
	const h = document.getElementById('h')
	const m = document.getElementById('m')
	const s = document.getElementById('s')

	updateTime = Decimal.makeUpdateTime(h, m, s)
	freq = 10
}

// #7 -- Angles Of Hands
const angleReadout = document.getElementById('angleReadoutClock')
if (angleReadout) {
	const h = document.getElementById('h')
	const m = document.getElementById('m')
	const s = document.getElementById('s')

	updateTime = AngleReadout.makeUpdateTime(h, m, s)
}

// #8 -- Digit Representation
const digit = document.getElementById('digitClock')
if (digit) {
	const arr = document.getElementsByClassName('digit')
	console.log(arr)
	updateTime = Digit.makeUpdateTime(arr)
}

// #9 -- Angles between Hands
const angleSweep = document.getElementById('angleSweepClock')
if (angleSweep) {
	updateTime = AngleSweep.makeUpdateTime(angleSweep)
	freq = 10
}

// #10 - Color Time
const color = document.getElementById('colorClock')
if (color) {
	updateTime = Color.makeUpdateTime(color)
}
// #11 - 

// #12 - Unix

updateTime()
setInterval(updateTime, freq)
