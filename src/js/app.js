const n = (n) => {
  return n > 9 ? '' + n : '0' + n
}

const assembleTime = (h, m) => {
  return n(h) + ':' + n(m)
}

const makeTimesArray = () => {
  let times = []
  for (let i = 0; i < 1440; i++) {
    const c = i
    const hour = Math.floor(c / 60)
    const minute = c % 60
    times.push(assembleTime(hour, minute))
  }
  return times
}

const sumTime = (str) => {
  let arr = str.split('')
  arr.splice(2, 1)
  return arr.map(x => Number.parseInt(x))
    .reduce((sum, n) => {
      return sum + n
    }, 0)
}

const updateTime = () => {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()

  const str = assembleTime(hour, minute)
  const sum = sumTime(str)

  const num = A[sum].findIndex(x => x === str) + 1

  dispSum.innerText = sum
  dispNum.innerText = num
}

let A = new Array(26)

for (let i = 0; i < A.length; i++) {
  A[i] = []
}

const times = makeTimesArray()

times.map(x => {
  A[sumTime(x)].push(x)
})

console.log(A)

const dispSum = document.getElementById('sum')
const dispNum = document.getElementById('num')

updateTime()
setInterval(updateTime, 1000)
