import * as Sum from './sumClock.js'

const dispSum = document.getElementById('sum-clock-sum')
const dispNum = document.getElementById('sum-clock-num')

Sum.setup()
const updateTime = Sum.makeUpdateTime(dispSum, dispNum)
updateTime()
setInterval(updateTime, 1000)
