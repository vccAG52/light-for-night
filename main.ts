input.onGesture(Gesture.Shake, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showString("Hello, Violet.")
    for (let index = 0; index < 4; index++) {
        images.createBigImage(`
            . . # . . . . . # .
            . # # # . . . # # #
            # # # # # . # # # #
            . . # . . . . . # .
            . . # . . . . . # .
            `).scrollImage(1, 200)
        images.createBigImage(`
            . . . . # . . . . .
            . . . # # # . . . #
            # . # # # # # . # #
            . . . . # . . . . .
            . . . . # . . . . .
            `).scrollImage(1, 200)
        images.createBigImage(`
            # . . . . . # . . .
            # # . . . # # # . .
            # # # . # # # # # .
            # . . . . . # . . .
            # . . . . . # . . .
            `).scrollImage(1, 200)
        basic.clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showString("Good night!")
})
