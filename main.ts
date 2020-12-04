input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        list[index] = randint(0, 5)
    }
    for (let index = 0; index <= 4; index++) {
        y = 0
        while (y < list[index]) {
            led.plot(index, 4 - y)
            y += 1
            basic.pause(100)
        }
    }
})
let y = 0
let list: number[] = []
list = [0, 0, 0, 0, 0]
