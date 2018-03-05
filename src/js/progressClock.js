export const makeUpdateTime = (h, m, s) => () => {

  const now = new Date()
  const hour = now.getHours()
  const mins = now.getMinutes()
  const secs = now.getSeconds()

  const minInSecs = 60
  const hourInSecs = 60 * minInSecs
  const dayInSecs = 24 * hourInSecs

  const secTime = secs
  const minTime = mins * minInSecs + secTime
  const hourTime = hour * hourInSecs + minTime

  const secFrac = secTime / minInSecs * 100
  const minFrac = minTime / hourInSecs * 100
  const hourFrac = hourTime / dayInSecs * 100

  h.style.width = hourFrac + '%'
  m.style.width = minFrac + '%'
  s.style.width = secFrac + '%'
}
