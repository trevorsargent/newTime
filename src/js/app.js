import * as Sum from './sumClock.js'
import * as Progress from './progressClock.js'

let updateTime
let freq

// #1 -- SumClock
const sumClock = document.getElementById('sumClock')
if (sumClock) {
  const dispSum = document.getElementById('sum')
  const dispNum = document.getElementById('num')

  Sum.setup()

  updateTime = Sum.makeUpdateTime(dispSum, dispNum)
  freq = 1000
}

// #2 -- Progress (Bars)
const progress = document.getElementById('progressClock')
if (progress) {
  const h = document.getElementById('h')
  const m = document.getElementById('m')
  const s = document.getElementById('s')

  updateTime = Progress.makeUpdateTime(h, m, s)
  freq = 10
}

// #3 -- Vertical Binary

// #4 -- Segmented

// #5 -- Count Down

// #6 -- Decimal Time

// #7 -- Angles of Hands

// #8 -- Digit Representation

// #9 -- Angles Between the Hands

// #10 - Color Time

// #11 - Angle Sweep

// #12 - Unix

updateTime()

setInterval(updateTime, freq)
