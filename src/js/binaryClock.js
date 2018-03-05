export const makeUpdateTime = (h, m, s) => () => {

  const now = new Date()
  const hour = now.getHours()
  const mins = now.getMinutes()
  const secs = now.getSeconds()

  const hourStr = hour.toString(2).padStart(5, '0')
  const minsStr = mins.toString(2).padStart(6, '0')
  const secsStr = secs.toString(2).padStart(6, '0')

  setDigitHeights(hourStr, 'h')
  setDigitHeights(minsStr, 'm')
  setDigitHeights(secsStr, 's')
}

const setDigitHeights = (str, elCode) => {
  for (let i = 0; i < str.length; i++) {
    let x = document.getElementById(elCode + i)
    if (str.substring(i, i + 1) == '1') {
      x.style.height = '100%'
    } else {
      x.style.height = '0%'
    }
  }
}
