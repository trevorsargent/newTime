export const makeUpdateTime = (h, m, s) => () => {

  const now = new Date()
  const hour = now.getHours()
  const mins = now.getMinutes()
  const secs = now.getSeconds()
  const mili = now.getMilliseconds()

  let miliCount = mili +
    (secs * 1000) +
    (mins * 60 * 1000) +
    (hour * 60 * 60 * 1000)

  const miliTotal = 24 * 60 * 60 * 1000
  const decHour = miliTotal / 10
  const decMin = decHour / 100
  const decSec = decMin / 100

  const dHour = Math.floor(miliCount / decHour)
  miliCount = miliCount % decHour
  const dMins = Math.floor(miliCount / decMin)
  miliCount = miliCount % decMin
  const dSecs = Math.floor(miliCount / decSec)

  h.innerText = (dHour).toString().padStart(2, '0')
  m.innerText = (dMins).toString().padStart(2, '0')
  s.innerText = (dSecs).toString().padStart(2, '0')
}
