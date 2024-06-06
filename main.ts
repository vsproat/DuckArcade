input.onButtonPressed(Button.A, function () {
    DuckSpeedMinValue1 = 2
    DuckSpeedMax8 = 8
    if (DuckSpeed >= DuckSpeedMinValue1 && DuckSpeed <= DuckSpeedMax8) {
        DuckSpeed += -1
        basic.showNumber(DuckSpeed)
    }
})
input.onButtonPressed(Button.B, function () {
    DuckSpeedMinValue1 = 1
    DuckSpeedMax8 = 7
    if (DuckSpeed >= DuckSpeedMinValue1 && DuckSpeed <= DuckSpeedMax8) {
        DuckSpeed += 1
    }
    basic.showNumber(DuckSpeed)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (duckDirection == DuckDirectionCCW) {
        basic.showArrow(ArrowNames.East)
        duckDirection = 1
    } else {
        basic.showArrow(ArrowNames.West)
        duckDirection = 0
    }
})
let DuckSpeedMax8 = 0
let DuckSpeedMinValue1 = 0
let DuckSpeed = 0
let duckDirection = 0
let DuckDirectionCCW = 0
let DuckDirectionCW = 1
DuckDirectionCCW = 0
duckDirection = 1
DuckSpeed = 1
let duckSpeedInverse = 400
pins.setAudioPinEnabled(false)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.showArrow(ArrowNames.East)
basic.pause(1000)
basic.showNumber(DuckSpeed)
