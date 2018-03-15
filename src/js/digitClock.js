

export const makeUpdateTime = () => () => {

	const now = new Date()
	const hour = now.getHours().toString().padStart(2, '0')
	const mins = now.getMinutes().toString().padStart(2, '0')
	const secs = now.getSeconds().toString().padStart(2, '0')

	let nums = new Array(6)
	let count = new Array(10)

	nums[0] = parseInt(hour.substr(0, 1))
	nums[1] = parseInt(hour.substr(1, 2))

	nums[2] = parseInt(mins.substr(0, 1))
	nums[3] = parseInt(mins.substr(1, 2))

	nums[4] = parseInt(secs.substr(0, 1))
	nums[5] = parseInt(secs.substr(1, 2))

	for (let i = 0; i < 10; i++) {
		count[i] = 0;
	}

	nums.map(x => {
		count[x]++
	})

	for (let i = 0; i < 10; i++) {
		document.getElementById(i + 1).innerText = count[i]
	}

}