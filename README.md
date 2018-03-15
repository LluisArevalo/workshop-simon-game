# Simon Game

- Goal: Create the Simon Game JavaScript logic.
- Time: 1 hour 30 minutes.
- Level: Basic

Simon Game is a classic game where the player receives a sequence of colors that she needs to repeat to move forward to the next round of the game. The first sequence has three colors, and every time the player passes to the next round, one color is added to the sequence. The sequence is random, so everytime you play Simon, it's different!

## Technologies

- HTML
- CSS
- JavaScript
- jQuery

## Tools we are going to use

- Text Editor: Visual Studio Code, Atom, Sublime...
- Google Chrome broswer.
- Google Chrome Dev Tools (cmd + alt + J).
- The code base you can find in the following URL: github.com/LluisArevalo/workshop-simon-game
- Replit (instructor) to show small examples of code.

## Start button

First of all, we have an start button at the center of our simon game. The first we are going to do is to paste the following code at the end of the file, that will allow us to start the game:

```
var simon = new SimonGame();

$("#game-info").find("button").on("click", function() {
  simon.init();
});
```

**Don't worry about it, it seems complicated, but it's the only piece of code that we are going to copy-paste, promise :)**

We'll go in deep in this code at the end of the workshop. Open you Google Chrome Dev Tools (cmd + alt + J) to see your Dev Console. It will be very helpful during our work. Right now it has an error, so let's start creating our own code.

## Global variables

- Colors: array with 4 strings

```
**What a variable is**

Item that contains information. There are a few types of variables, here we'll need integer, arrays, strings, and booleans.
```

## Methods

```
**What a method is**

A method, also called function, is a piece of code that is repeated as many times as we want. To execute it, we have to call (execute) the function.
```

### `init` method

The `init` method is the method we need to call to start the game. Here, we set the default values of the different variables we are going to use among the game. Once we created the method, refresh the page and the error in the Console will disappear.

Right now, we have an empty method, let's add some information to start our game.

#### Variables

Every time we start a new game, we need some variables with an specific value. These are:

- `sequence`: array that will contain the sequence that the player needs to repeat. *Default value: empty array*
- `userClickCount`: integer that will contain how many buttons have been pressed by the user to repeat the sequence. *Default value: 0*
- `round`: integer that will indicate the round that is playing the user. *Default value: 1*

#### Actions

Once we have defined all the variables, we need to do some actions to let the player know that the game has started. These actions are:

- Update the counter: We are going to create an `updateRound` method that will update the current round of the user. **New method**
- Generate sequence: We are goign to create a `generateSequence` method that will create the first sequence of colors of the game. **New method**
- Show sequence: Of course, we need to show the player which sequence she needs to repeat. We are going to create a `showSequence` method to do taht. **New method**
- Button click: We are going to create a `checkUserInput` method that will allow us to watch how the user clicks on a button. **New method**
- Start button information: We'll update the Start button, by doing the following:
  - Add the CSS `blocked` class to avoid receiving clicks.
  - Change the button text by `Playing...` to let the user know that the game has started.

```
**Method definition and method execution**

We have to distinguish between define and execute a method:

- Definition: what will do.
- Execute: do it!

We create methods to execute the same code from different places among our code.
```

### `updateRound` method

It will show the current round to the user. To do that, we have to select the span with ID `counter` and update its text. The value we are going to use is the one we have stored in `this.round`.

```
**jQuery**

- $ allows us to execute jQuery.
- jQuery selectors allow us to select an specific element in the HTML.
- jQuery methods are already defined, and help us to do certain actions, like change the item's text.
```

### `generateSequence` method

Next up, we need to generate a sequence to start the game. Without a sequence, this game makes no sense at all. The first sequence that we will generate, will be composed by 3 colors. Everytime the player inserts the sequence correctly, we are going to add a new color to it. To do that, we are going to define a `generateSequence` method that receives one parameter.

```
**What a parameter is?**

A parameter is a variable passed to a method that allow us to execute a method which result will be different, depending on the value of this parameter.
```

So we have to generate a sequence of X colors, which depends on the parameter that we are passing to the method. To do that, we are going to create a loop to execute several times the same action.

```
**What a loop is?**

A loop is a piece of code which helps us execute several times the same code.
```

To finish up this method, we need to pick up a random color from the `colors` global variable. To do that, we are going to create a new `generateRandom` method to generate a random number. Once we generate this random number, we are going to add it inside the `sequence` through `this.sequence`.

```
**What `this` is?**

At this point, the real meaning of the reserved word `this` is difficult to understand, so we are going to keep it super simple (KISS principle in Software Engineering). `this` allow us to share information among the different methods that we have inside our game.
```

### `generateRandom` method

In this method, we are going to generate a random number to pick up a color from the `colors` array we defined as global variable. We can generate a random number with the following code `Math.floor(Math.random() * 4)`.

Once we generate this number, we have to `return` this value.

```
**What `return` is?**

Some methods execute an independent action (like changing a text in the HTML). However, there are other methods that need to return a value that is needed in another method.

🤯 🤯 🤯
```

### `showSequence` method

Are you ready for this? This is going to be the most difficult method we are going to create. This method will show to the player the current sequence in the screen to let him know what she needs to repeat.

First of all, we need to prevent the user to click any button while showing the sequence. To do that, we have to add the `blocked` class to the `#simon` HTML element.

The next thing we need to do is to create a `setInterval` that we are going to use to show, during 1 second, each color in the sequence. To show all the colors, we need to define a counter variable, `i`, that we'll increment after showing each element in the sequence.

Once we have shown all the elements in the sequence, we are going to finish the interval by calling the `clearInterval` method, and we'll remove the `blocked` class form the `#simon` HTML element.

```
**What a `setInterval` is?**

A `setInterval` allow us to execute, for a certain amount of milliseconds, the same code.
```

We are going to use a conditional to execute different code, based on the current element of the sequence that we are showing. We are going to stop the interval when the current item, `i`, has the same value than the sequence's length.

```
**What a coinditional is?**

A conditional (`if...else`) allow us to compare two values and execute a certain code depending on the value of this comparisson, which can be `true` or `false`.
```

But how can we show the element of the sequence in the screen? We need to add the `active` class to the correct button, depending on the sequence color. We have four different buttons in our HTML:

- `btn-red`
- `btn-yellow`
- `btn-blue`
- `btn-green`

We will concatenate the sequence element with the `.btn-` string to compose the jQuery selector that we are going to need.

```
**What does concatenate mean?**

We can concatenate different strings to compose dynamic elements, usually composed by an static string, `btn-` and a dynamic part, the current color in the sequence.
```

We are almost done with this method. Right now, we are showing the sequence without any gap between colors. To add an small gap between colors, we need to remove the `active` class before showing the next color in the sequence. How can we do that?

Right now, we are showing each color during 1 second. Let's remove the class after 700 miliseconds, so we'll create a gap of 300 milliseconds between each color. We do that by executing, inside the `setTimeout` a `setInterval` that will execute 700 milliseconds after the `setTimeout`.

Again, 🤯 🤯 🤯

```
**What a `setTimeout` is?**

A `setTimeout` allow us to execute a code just once after a certain amount of time.
```

If we have survived to this method, nothing will scare us. From now on, things are much more easier, so congratulations for being here 🎉 🎉

### `checkUserInput` method

We are going to create a `checkUserInput` method, and we are going to bind it to all the buttons with the `btn` class. We are going to do that inside the `init` method, by adding the following code:

```
$(".btn").unbind("click");
$(".btn").bind("click", this.checkUserInput);
```

`click` is an event. It means that it will be executed when the player does a certain action, `click` over the button in this case. Sooo... maybe there's something else we should worry about. Inside this method, `this` is not `this` anymore.

Inside an event, `this` references the event that is executing this method, and not the game anymore. Thanks God, we can define inside our game definition, just before the `init` method, the following:

```
var self = this;
```

Problem solved, from now on, inside the `checkUserInput` method, `self` references our old `this`, which allow us to access all the information inside the event. It means that our sequence is not in `this.sequence` but in `self.sequence`. This is called Scope.

Once we have understood this, we can proceed with the behaviour. This method will be called every time the user clicks on a button. We have to capture the clicked button and check out its value with the current element of the sequence (remember we have a `userClickCount` element that allow us know which element of the sequence we have to compare it with).

If the player clicks in the correct button, we have to increment the `userClickCount` value by one. If the players click the wrong button, we need to call the `gameOver` method, which is not created yet.

If the player inserts the full sequence correctly, we need to execute the `finishedRound` method, which we are going to create right now.

### `finishedRound` method

Once the player has finished one round, we need to do a couple of things:

- Add a new element to the sequence, so the next round will have one more element in the sequence.
- Show the sequence again, to let the player know which is the new element on it.
- Reset the `userClickCount` value to 0, so the user can play again after showing her the sequence.
- Increase the round of the game.
- Show the new round on the screen.

You may be thinking why we have been creating all these methods among the game. A method allow us to reuse code, so now we can take profit of all this methods by calling all of them as follows:

```
this.generateSequence(1);
this.showSequence();
this.userClickCount = 0;
this.round++;
this.updateRound();
```

**How easy is to generate a new round with all our methods!! 😍 😍 😍**

### `gameOver` method

To finish our game, we just need one more method, the Game Over. Once the player clicks on a wrong button, the game is over. To show that to the player, we are going to change the Start button text by a "Game Over, Play again" text. Remember we added a `blocked` class that we have to remove if we want to allow the player to click on it.

#### BONUS

If you think it's super easy to change the text, we can give a chance to another way to show the game over. Let's make all the buttons to turn on and off a few times to let user know he has failed.

To do that, we need to create a `setInterval` that will be triggered 6 times every 300 miliseconds, and we are going to toggle the `active` class to the buttons. Once the `setInterval` has been executed 6 times, we are going to stop it.

```
**What does toggle mean?**

If we toggle a CSS class to an element, it will:

- add the class, if it doesn't exist.
- remove the class, if it exists.
```

I hope you have had fun and you have learned some of the basics of coding with JavaScript.

Thanks!

Made with <3 by @Lluisarevalo
