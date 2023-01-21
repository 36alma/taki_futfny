input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        RÉSZ()
    }
})
function RÉSZ () {
    for (let index = 0; index < 5; index++) {
        a += 15
        f = a
        led.setBrightness(f)
        led.plot(X, Y)
        basic.pause(100)
        led.unplot(X, Y)
        X += 1
    }
    for (let index = 0; index < 5; index++) {
        a += 15
        f = a
        led.setBrightness(f)
        led.plot(X, Y)
        basic.pause(100)
        led.unplot(X, Y)
        X += -1
    }
}
let a = 0
let f = 0
let X = 0
let Y = 0
Y = 2
X = 0
f = 0
basic.forever(function () {
	
})
