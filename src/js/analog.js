export const hourHandFraction = (h, m, s) => {
	return (h % 12 + m / 60 + s / 60 / 60) / 12
}

export const minHandFraction = (m, s) => {
	return (m / 60 + s / 60 / 60)
}

export const secHandFraction = (s, m) => {
	return s / 60 + m / 1000 / 60
}

export const secHandFractionRough = (s) => {
	return s / 60
}
