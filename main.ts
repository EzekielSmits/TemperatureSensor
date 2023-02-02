input.onPinReleased(TouchPin.P0, function () {
    basic.showNumber(randint(0, 99))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Celcuis: " + input.temperature())
})
input.onGesture(Gesture.ScreenUp, function () {
    if (input.magneticForce(Dimension.Strength) > 100) {
        basic.showString("Magnet Detected")
    }
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
            . . . # .
            # . # . .
            . # . . .
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
input.onButtonPressed(Button.AB, function () {
    if (showTemp == 1) {
        showTemp += -1
    } else {
        showTemp += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Light: " + input.lightLevel())
})
let showTemp = 0
showTemp = 0
basic.forever(function () {
    if (showTemp == 1) {
        basic.showNumber(input.temperature())
    }
})
