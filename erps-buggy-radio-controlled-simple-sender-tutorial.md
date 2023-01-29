### @activities true
### @explicitHints true

# ERPS STEM WEEK :: Motorised Buggy - Radio Controlled Simple Movement

## Introduction
### Introduction Step @unplugged
Making our buggy move is awesome, but having to press the buttons on the buggy itself is a bit of a pain.  

Plus we have to run after it when we want it to stop! What if there were another solution?!  

Well, there is! Let's use our radio skills to *remote control* our buggy! This tutorial starts off simple, letting is code our
*forwards* and *backwards* motion using a game controller!

![Motorised Buggy](https://raw.githubusercontent.com/niaxotim/erps-buggy-simple-radio-controlled-sender/master/assets/buggy_controller.png)

## Putting our buggy together!
### Assembling the pieces @unplugged
Before we start, make sure your buggy has been assembled. There are lots of sensors we *can* connect, but for now, just make
sure that the tyres are on the wheels, and that the wheels are connected to the motors.  
    
Oh, and don't forget some AA batteries too!

![Buggy Key Features](https://raw.githubusercontent.com/niaxotim/erps-buggy-simple-radio-controlled-sender/master/assets/features.png)


## Setting up our radio
### Step 1
First, we have to set which channel we want to use to transmit.  

Let's set our radio channel using a ``||radio:radio set group||`` block - make sure you set it to the channel assigned to you!  

#### ~ tutorialhint
```blocks
radio.setGroup(255)
```

## Sending commands
### Step 2
Once we have our radio channel set up, we want to make sure that whenever we press a button on our game pad,
that a message is sent to our buggy. This is *conditionally* based on what button we press.  

This means we need an ``||logic:if-else||`` block - drag one inside the ``||basic:forever||`` block.  

Click on the '+' to add an 'else-if' statement too.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (true) {
    } else if (false) {
    } else {
    }
})
```

### Step 3
In place of the 'true' inside our 'if' statement, drag a ``||Kitronik_Game_Controller:button Fire 1 (P15) is pressed||`` block.  

You can choose any button you like, but in this example we use the top 'fire' button on our controller.  

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
    } else if (false) {
    } else {
    }
})
```

### Step 4
When we press the button on our controller, we want to send a command over the radio to the buggy.  

Let's use a ``||radio:send value "name" = "0"||`` block, which lets us send 'key:value' pairs over our radio channel.  

The left-hand-side, (key) will be the direction of travel, and the right-hand-side (value) will be the speed. Change the block to send
the key:value pair "forwards" and "50".  

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        radio.sendValue("forwards", 50)
    } else if (false) {
    } else {
    }
})
```

### Step 5
In our 'else-if' part of our conditional block, choose another button on the controller to be pressed
when we want the buggy to travel backwards.

Then, drag another radio block to send the key "back", and the valye "50". This will be for telling our buggy to move in reverse.  

Check out the hint if you get stuck!

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        radio.sendValue("forwards", 50)
    } else if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
        radio.sendValue("back", 50)
    } else {
    }
})
```

### Step 5
If we stopped here, our buggy would keep moving even once we've stopped pressing the buttons on our controller!  

To prevent this, we can send a 'stop' signal over the radio. In the 'else' part of our conditional statement, put
another ``||radio:send value "name" = "0"||`` block in, this time setting the key to "stop", but leaving the key as 0.  

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        radio.sendValue("forwards", 50)
    } else if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
        radio.sendValue("back", 50)
    } else {
        radio.sendValue("stop", 0)
    }
})
```

### Step 6
Connect your BBC micro:bit and click ``|Download|`` to transfer your code.  

Put your micro:bit in to your game controller, making sure it faces forwards. Also put some AA batteries in the back!  

The next thing we need to do is write the code to receive the signals from our controller...

### Barrier Basic Tutorial Complete @unplugged
Great work! You should now have a working radio controller for your buggy. But you'll need to complete
the matching tutorial to code the receiver!

![Great job](https://raw.githubusercontent.com/niaxotim/erps-buggy-simple-radio-controlled-sender/master/assets/great_job.png)
