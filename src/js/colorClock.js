const numMap = (num, max, mapMax) => {
	return num / max * mapMax;
}

export const makeUpdateTime = (c) => () => {
	const now = new Date()
	const hour = now.getHours()
	const mins = now.getMinutes()
	const secs = now.getSeconds()

	const r = Math.floor(numMap(hour, 24, 255)).toString(16).padStart(2, "0")
	const g = Math.floor(numMap(mins, 60, 255)).toString(16).padStart(2, "0")
	const b = Math.floor(numMap(secs, 60, 255)).toString(16).padStart(2, "0")

	const colorString = '#' + r + g + b

	c.style.backgroundColor = colorString;
}