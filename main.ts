input.onButtonPressed(Button.A, function () {
    Start = true
    basic.setLedColor(0x00ff00)
    Startzeit = input.runningTime()
    Schritte = 0
})
input.onButtonPressed(Button.B, function () {
    if (Start == true) {
        Start = false
        basic.setLedColor(0xff0000)
        Zeitdifferenz = input.runningTime() - Startzeit
        basic.showNumber(Math.round(Zeitdifferenz / 1000))
        basic.pause(100)
        basic.showNumber(Schritte)
        basic.pause(100)
        basic.clearScreen()
    }
})
let Zeitdifferenz = 0
let Startzeit = 0
let Beschleunigung = 0
let Start = false
let Schritte = 0
basic.setLedColor(0xff0000)
Schritte = 0
Start = false
basic.showNumber(Beschleunigung)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    Beschleunigung = input.acceleration(Dimension.Z)
    if (Start == true && Beschleunigung > 3000) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        Schritte += 1
    }
})
