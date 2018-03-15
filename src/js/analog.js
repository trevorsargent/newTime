export const hourHandAngle = (h, m, s) => {
  return (h % 12 + m / 60 + s / 60 / 60) / 12
}

export const minHandAngle = (m, s) => {
  return (m / 60 + s / 60 / 60)
}

export const secHandAngle = (s, m) => {
  return s / 60 + m / 1000 / 60
}
