export const makeUpdateTime = (places) => () => {

  const now = new Date()
  const hour = now.getHours().toString().padStart(2, '0')
  const mins = now.getMinutes().toString().padStart(2, '0')
  const secs = now.getSeconds().toString().padStart(2, '0')

  let nums = new Array(6)

  let img = document.createElement('div')
  img.className = 'segment'
  let fill = document.createElement('div')
  fill.className = 'segment-fill'
  img.appendChild(fill)

  nums[0] = parseInt(hour.substr(0, 1))
  nums[1] = parseInt(hour.substr(1, 2))

  nums[2] = parseInt(mins.substr(0, 1))
  nums[3] = parseInt(mins.substr(1, 2))

  nums[4] = parseInt(secs.substr(0, 1))
  nums[5] = parseInt(secs.substr(1, 2))

  for (let j = 0; j < 6; j++) {
    const y = countSegments(nums[j])
    while (places[j].firstChild) {
      places[j].removeChild(places[j].firstChild)
    }
    for (let z = 0; z < y; z++) {
      places[j].appendChild(img.cloneNode(true))
    }
  }
}

const countSegments = (time) => {
  switch (time) {
    case 1:
      return 2
    case 2:
      return 5
    case 3:
      return 5
    case 4:
      return 4
    case 5:
      return 5
    case 6:
      return 5
    case 7:
      return 3
    case 8:
      return 7
    case 9:
      return 5
    case 0:
      return 6
    default:
      return 10
      break
  }
}
