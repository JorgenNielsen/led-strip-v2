input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    for (let indeks = 0; indeks <= 60; indeks++) {
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
        for (let indeks2 = 0; indeks2 <= 59; indeks2++) {
            strip.setPixelColor(indeks2, valA)
            strip.show()
            strip.setPixelColor(indeks2 + 1, valB)
            strip.show()
            basic.pause(5)
            strip.clear()
        }
        strip.clear()
        strip.setPixelColor(59, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    for (let indeks3 = 0; indeks3 <= 60; indeks3++) {
        counter = 59 - indeks3
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(2)
        strip.clear()
    }
})
let valB = 0
let valA = 0
let liste: number[] = []
let liste1: number[] = []
let counter = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 60, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
