input.onPinReleased(TouchPin.P0, function () {
    basic.showNumber(randint(0, 99))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Celcuis: " + input.temperature())
})
function CheckTemp () {
    if (input.temperature() < 18) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (input.temperature() >= 18 && input.temperature() <= 24) {
        basic.showLeds(`
            . . . . .
            . . . . #
            # . . # .
            . # # . .
            . . . . .
            `)
    }
    if (input.temperature() > 24) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showString("LI: " + input.lightLevel())
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
