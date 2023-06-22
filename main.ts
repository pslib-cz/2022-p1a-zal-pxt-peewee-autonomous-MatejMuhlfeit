pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)

const left: DigitalPin = DigitalPin.P14
const right: DigitalPin = DigitalPin.P13

let left1
let right1

function control1(left: number = 0, right: number = 0) {
    let leftMotor = (Math.map(left, -100, 100, -255, 255)) * -1
    let rightMotor = (Math.map(right, -100, 100, -200, 200)) * -1
    PCAmotor.MotorRun(PCAmotor.Motors.M4, rightMotor)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, leftMotor)


}


basic.forever(function () {
    basic.pause(5)
    left1 = pins.digitalReadPin(left)
    right1 = pins.digitalReadPin(right)

    if (left1) {
        control1(100, -30)

    } else if (right1) {
        control1(-30, 100)

    } else {
        control1(100, 100)
    }
})