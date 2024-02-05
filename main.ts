input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    for (let indeks = 0; indeks <= top; indeks++) {
        counter = indeks
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(20)
        strip.clear()
    }
})
input.onButtonPressed(Button.B, function () {
    liste1 = [
    neopixel.colors(NeoPixelColors.White),
    neopixel.colors(NeoPixelColors.Indigo),
    neopixel.colors(NeoPixelColors.Orange),
    neopixel.colors(NeoPixelColors.Yellow),
    neopixel.colors(NeoPixelColors.Green),
    neopixel.colors(NeoPixelColors.Red)
    ]
    liste = [
    neopixel.colors(NeoPixelColors.Red),
    neopixel.colors(NeoPixelColors.Orange),
    neopixel.colors(NeoPixelColors.Yellow),
    neopixel.colors(NeoPixelColors.Green),
    neopixel.colors(NeoPixelColors.Indigo),
    neopixel.colors(NeoPixelColors.White)
    ]
    for (let index = 0; index <= liste1.length - 1; index++) {
        valA = liste[index]
        valB = liste1[index]
        serial.writeValue("x", index)
        for (let indeks2 = 0; indeks2 <= top; indeks2++) {
            strip.setPixelColor(indeks2, valA)
            strip.show()
            strip.setPixelColor(indeks2 + 1, valB)
            strip.show()
            basic.pause(5)
            strip.clear()
        }
        strip.clear()
        strip.setPixelColor(top - 1, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    for (let indeks3 = 0; indeks3 <= top; indeks3++) {
        counter = top - indeks3
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(2)
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
})
let valB = 0
let valA = 0
let liste: number[] = []
let liste1: number[] = []
let counter = 0
let strip: neopixel.Strip = null
let top = 0
top = 180
music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
strip = neopixel.create(DigitalPin.P1, top, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
