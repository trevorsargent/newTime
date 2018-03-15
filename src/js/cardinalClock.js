import { hourHandFraction, minHandFraction, secHandFraction } from './analog.js'

const cardinalize = (angle) => {
	const t = 360 / 32;
	if (angle >= 0 && angle < t * 0 + t / 2) {
		return "N"
	} else if (angle < t * 1 + t / 2) {
		return "NbE"
	} else if (angle < t * 2 + t / 2) {
		return "NNE"
	} else if (angle < t * 3 + t / 2) {
		return "NEbN"
	} else if (angle < t * 4 + t / 2) {
		return "NE"
	} else if (angle < t * 5 + t / 2) {
		return "NEbE"
	} else if (angle < t * 6 + t / 2) {
		return "ENE"
	} else if (angle < t * 7 + t / 2) {
		return "EbN"
	} else if (angle < t * 8 + t / 2) {
		return "E"
	} else if (angle < t * 9 + t / 2) {
		return "EbS"
	} else if (angle < t * 10 + t / 2) {
		return "ESE"
	} else if (angle < t * 11 + t / 2) {
		return "SEbE"
	} else if (angle < t * 12 + t / 2) {
		return "SE"
	} else if (angle < t * 13 + t / 2) {
		return "SEbS"
	} else if (angle < t * 14 + t / 2) {
		return "SSE"
	} else if (angle < t * 15 + t / 2) {
		return "SbE"
	} else if (angle < t * 16 + t / 2) {
		return "S"
	} else if (angle < t * 17 + t / 2) {
		return "SbW"
	} else if (angle < t * 18 + t / 2) {
		return "SSW"
	} else if (angle < t * 19 + t / 2) {
		return "SWbS"
	} else if (angle < t * 20 + t / 2) {
		return "SW"
	} else if (angle < t * 21 + t / 2) {
		return "SWbW"
	} else if (angle < t * 22 + t / 2) {
		return "WSW"
	} else if (angle < t * 23 + t / 2) {
		return "WbS"
	} else if (angle < t * 24 + t / 2) {
		return "W"
	} else if (angle < t * 25 + t / 2) {
		return "WbN"
	} else if (angle < t * 26 + t / 2) {
		return "WNW"
	} else if (angle < t * 27 + t / 2) {
		return "NWbW"
	} else if (angle < t * 28 + t / 2) {
		return "NW"
	} else if (angle < t * 29 + t / 2) {
		return "NWbN"
	} else if (angle < t * 30 + t / 2) {
		return "NNW"
	} else if (angle < t * 31 + t / 2) {
		return "NbW"
	} else if (angle <= 360) {
		return "N"
	}
}

export const makeUpdateTime = (h, m, s) => () => {

	const now = new Date()
	const hour = now.getHours()
	const mins = now.getMinutes()
	const secs = now.getSeconds()
	const mili = now.getMilliseconds()

	const hourDirection = cardinalize(hourHandFraction(hour, mins, secs) * 360)
	const minDirection = cardinalize(minHandFraction(mins, secs) * 360)
	const secDirection = cardinalize(secHandFraction(secs, mili) * 360)

	h.innerText = hourDirection;
	m.innerText = minDirection;
	s.innerText = secDirection;
	if (secDirection === undefined) {
		console.log(secs * 360)
	}

}