import * as Sum from './sumClock.js'
import * as Progress from './progressClock.js'
import * as Binary from './binaryClock.js'
import * as Segment from './segmentClock.js'

let updateTime
let freq

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

// #6 -- Decimal Time

// #7 -- Angles of Hands

// #8 -- Digit Representation

// #9 -- Angles Between the Hands

// #10 - Color Time

// #11 - Angle Sweep

// #12 - Unix

updateTime()
setInterval(updateTime, 1000)
