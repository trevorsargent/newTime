export const makeUpdateTime = (unix) => () => {
	const now = new Date
	unix.innerText = now.getTime().toString()
}