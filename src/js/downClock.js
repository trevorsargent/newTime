export const makeUpdateTime = (h, m, s) => () => {

  const now = new Date()
  const hour = now.getHours()
  const mins = now.getMinutes()
  const secs = now.getSeconds()

  h.innerText = (24 - hour).toString().padStart(2, '0')
  m.innerText = (60 - mins).toString().padStart(2, '0')
  s.innerText = (60 - secs).toString().padStart(2, '0')
}
