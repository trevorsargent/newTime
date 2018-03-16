import { hourHandFraction, minHandFraction, secHandFraction } from './analog.js'

export const makeUpdateTime = (h, m, s) => () => {

  const now = new Date()
  const hour = now.getHours()
  const mins = now.getMinutes()
  const secs = now.getSeconds()
  const mili = now.getMilliseconds()

  const hourAngle = Math.floor(hourHandFraction(hour, mins, secs) * 360).toString().padStart(3, '0') + '•'
  const minAngle = Math.floor(minHandFraction(mins, secs) * 360).toString().padStart(3, '0') + '•'
  const secAngle = Math.floor(secHandFraction(secs, mili) * 360).toString().padStart(3, '0') + '•'

  h.innerText = hourAngle
  m.innerText = minAngle
  s.innerText = secAngle
}
