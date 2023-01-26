radio.setGroup(255)
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        radio.sendValue("forwards", 30)
    } else if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
        radio.sendValue("back", 30)
    }
})
