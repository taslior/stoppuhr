input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0x00ff00)
    Startzeit = input.runningTime()
    Schritte = 0
    Agedrückt = true
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0xff0000)
    Zeitdifferenz = input.runningTime() - Startzeit
    basic.showNumber(Math.round(Zeitdifferenz / 1000))
    basic.pause(2000)
    basic.clearScreen()
    Agedrückt = false
})
let Beschleunigung = 0
let Zeitdifferenz = 0
let Agedrückt = false
let Startzeit = 0
let Schritte = 0
basic.setLedColor(0xff0000)
Schritte = 0
basic.forever(function () {
    Beschleunigung = input.acceleration(Dimension.Strength)
    if (Agedrückt == true && Beschleunigung > 1200) {
        basic.showNumber(Beschleunigung)
        basic.pause(100)
        basic.clearScreen()
        Schritte += 1
    }
})
