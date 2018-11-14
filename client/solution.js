console.log('%c       ', 'font-size: 230px; background: url(https://media.giphy.com/media/snA2OVsg9sMRW/giphy.gif) no-repeat;');
console.log("Welcome to the robot dance party! 💃🤖🕺")

const fetchRobots = async () => {
  const response = await fetch('/robots')
  const robots = await response.json()
  console.log(robots)
  return robots
}
fetchRobots()
const inviteButton = document.getElementById('invite-robots')
inviteButton.addEventListener('click', async () => {
  const content = document.getElementById('content')
  const robotList = document.createElement('ul')
  const robots = await fetchRobots()
  robots.forEach(robot => {
    const robotItem = document.createElement('li')
    robotItem.innerHTML = `
      <h2>${robot.name}</h2>
      <img src="${robot.imageUrl}">
    `
    robotList.appendChild(robotItem)
  })
  content.appendChild(robotList)
})
