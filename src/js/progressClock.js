export const makeUpdateTime = (h, m, s) => () => {

  const now = new Date()
  const hour = now.getHours()
  const mins = now.getMinutes()
  const secs = now.getSeconds()
  const mili = now.getMilliseconds()

  const secInMilis = 1000
  const minInMilis = 60 * secInMilis
  const hourInMilis = 60 * minInMilis
  const dayInMilis = 24 * hourInMilis

  const secTime = secs * secInMilis + mili
  const minTime = mins * minInMilis + secTime
  const hourTime = hour * hourInMilis + minTime

  const secFrac = secTime / minInMilis * 100
  const minFrac = minTime / hourInMilis * 100
  const hourFrac = hourTime / dayInMilis * 100

  h.style.width = hourFrac + '%'
  m.style.width = minFrac + '%'
  s.style.width = secFrac + '%'
}
