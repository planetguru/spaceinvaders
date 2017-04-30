let runner = 0
let invaderPosX = 0
let invaderPosY = 0
let bulletPosY = 0
let rocketPosY = 0
let bulletPosX = 0
let rocketPosX = 0
input.onButtonPressed(Button.B, () => {
    if (rocketPosX < 4) {
        led.unplot(rocketPosX, rocketPosY)
        rocketPosX += 1
        led.plot(rocketPosX, rocketPosY)
    }
})
basic.forever(() => {
    while (invaderPosY <= 4 && runner == 1) {
        while (invaderPosX <= 4 && runner == 1) {
            led.plot(invaderPosX, invaderPosY)
            basic.pause(500)
            led.unplot(invaderPosX, invaderPosY)
            invaderPosX += 1
        }
        invaderPosY += 1
        if (invaderPosY == 4) {
            endLose()
        }
        while (invaderPosX > 0 && runner == 1) {
            invaderPosX += -1
            led.plot(invaderPosX, invaderPosY)
            basic.pause(500)
            led.unplot(invaderPosX, invaderPosY)
        }
        invaderPosY += 1
        if (invaderPosY == 4) {
            endLose()
        }
    }
})
input.onButtonPressed(Button.A, () => {
    if (rocketPosX > 0) {
        led.unplot(rocketPosX, rocketPosY)
        rocketPosX += -1
        led.plot(rocketPosX, rocketPosY)
    }
})
input.onButtonPressed(Button.AB, () => {
    bulletPosX = rocketPosX
    bulletPosY = rocketPosY
    while (bulletPosY >= 0 && runner == 1) {
        led.plot(bulletPosX, bulletPosY)
        if (bulletPosX == invaderPosX && bulletPosY == invaderPosY) {
            endWin()
        }
        basic.pause(100)
        if (bulletPosY != rocketPosY) {
            led.unplot(bulletPosX, bulletPosY)
        }
        bulletPosY += -1
    }
})

function endWin() {
    runner = 0
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
}

function endLose() {
    runner = 0
    basic.clearScreen()
    basic.showIcon(IconNames.Skull)
}

rocketPosX = 0
rocketPosY = 4
led.plot(rocketPosX, rocketPosY)
invaderPosX = 0
invaderPosY = 0
led.plot(invaderPosX, invaderPosY)
bulletPosX = rocketPosX
bulletPosY = rocketPosY
runner = 1
