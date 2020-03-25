const keypress = require('keypress')
keypress(process.stdin)

const totalOfLamp = 10 // change this
let totalClickOfSwitch = 1 // change this

let lightsOn = 0

let lights = []

const switchLamp = () => {
  if (totalOfLamp < 1) { return console.log(`Amount of lamp can't be ${totalOfLamp}`) }

  // initial lamp
  if (lights.length < totalOfLamp) {
    for (let i = 1; i < totalOfLamp + 1; i++) {
      if (i % totalClickOfSwitch == 0) {
        lights.push('off')
      } else {
        lights.push('on')
      }
    }
  }

  console.log("Pencet sepasi untuk mengaktifkan saklar")
  console.log(`Pencetan ke : ${totalClickOfSwitch}`)

  lights.forEach((item, index) => {
    if ((index + 1) % totalClickOfSwitch == 0) {
      lights[index] = lights[index] == 'off' ? 'on' : 'off'
    }
    console.log(`${index + 1}. ${lights[index]}`)
  })

  console.log(`Total lampu hidup: ${lights.filter(i => {return i == 'on'}).length}`)

  totalClickOfSwitch += 1
  // console.log(lights)
}

process.stdin.on('keypress', function (ch, key) {
  if (key.name == 'space') {
    switchLamp()
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
})

process.stdin.setRawMode(true);
process.stdin.resume()

switchLamp()