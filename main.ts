let xcounter = 0
// Function called various times throughout code, clears whole microbit matrix within Turtle, not just clear screen command
function clear () {
    turtle.setSpeed(50)
    turtle.pen(TurtlePenMode.Down)
    turtle.home()
    while (xcounter != 5) {
        turtle.setBrightness(0)
        turtle.setPosition(xcounter, 0)
        turtle.forward(5)
        xcounter += 1
    }
    turtle.setBrightness(128)
    turtle.home()
    turtle.pen(TurtlePenMode.Up)
    xcounter = 0
    turtle.setSpeed(3)
}
input.onGesture(Gesture.Shake, function () {
    clear()
})
basic.forever(function () {
	
})
