console.log('%c       ', 'font-size: 230px; background: url(https://media.giphy.com/media/snA2OVsg9sMRW/giphy.gif) no-repeat;');
console.log("Welcome to the robot dance party! 💃🤖🕺")

const button = document.getElementById('invite-robots')
const content = document.getElementById('content')
button.addEventListener('click', async () => {
  const response = await fetch('/robots')
  const robots = await response.json()
  const robotsList = document.createElement('ul')
  robots.forEach(robot => {
    const robotLi = document.createElement('li')
    robotLi.innerHTML = `
      <div>${robot.name}</div>
      <img src="${robot.imageUrl}" />
    `
    robotsList.appendChild(robotLi)
  })
  content.appendChild(robotsList)
})
