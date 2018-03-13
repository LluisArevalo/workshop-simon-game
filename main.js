var colors = ["red", "green", "blue", "yellow"];

function SimonGame() {
  this.sequence;
  this.userClickCount = 0;
  var self = this;

  this.init = function() {
    this.sequence = [];
    this.userClickCount = 0;
    this.round = 1;
    this.updateCounter();
    this.generateSequence(3);
    this.showSequence();
    $(".btn").unbind("click");
    $(".btn").bind("click", this.checkUserInput);
    var startButton = $("#game-info").find("button");
    startButton.addClass("blocked");
    startButton.text("Playing...");
  }

  this.generateSequence = function(quantity) {
    for (var i = 0; i < quantity; i++) {
      var generatedColor = colors[this.generateRandom()];
      this.sequence.push(generatedColor);
    }
  }

  this.showSequence = function() {
    var i = 0;
    $("#simon").addClass("blocked");
    var interval = setInterval(function() {
      $(".btn").removeClass("active");

      if (i < self.sequence.length) {
        $(".btn-" + self.sequence[i]).addClass("active");
      } else {
        $("#simon").removeClass("blocked");
        clearInterval(interval);
      }

      setTimeout(function() {
        $(".btn").removeClass("active");
      }, 700);

      i++;
    }, 1000);
  }

  this.checkUserInput = function() {
    var inputColor = $(this).data("color");
    if (self.sequence[self.userClickCount] === inputColor) {
      self.userClickCount++;
    } else {
      self.gameOver();
    }

    if (self.userClickCount === self.sequence.length) {
      self.finishedRound();
    }
  }

  this.gameOver = function() {
    var i = 0;
    var intervalId = setInterval(function() {
      $(".btn").toggleClass("active");
      i++;
      if (i == 6) {
        clearInterval(intervalId);
      }
    }, 300);

    var startButton = $("#game-info").find("button");
    startButton.removeClass("blocked");
    startButton.text("Game Over, Play again");
  }

  this.finishedRound = function() {
    this.generateSequence(1);
    this.showSequence();
    this.userClickCount = 0;
    this.round++;
    this.updateCounter();
  }

  this.updateCounter = function() {
    $("#counter").text(this.round);
  }

  this.generateRandom = function() {
    return Math.floor(Math.random() * 4);
  }
}

var simon = new SimonGame();

$("#game-info").find("button").on("click", function() {
  simon.init();
});
