class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // $("pos").click(function () {
    //   this.game.playMove();
    // })

    // install a handler on the `li` elements inside the board.
    this.$el.on("click", "li", ( (event) => {
      const $square = $(event.target);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    this.counter += 1;
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;


    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("This " + e.msg.toLowerCase());
      return;
    }

    $square.removeClass(currentPlayer).addClass(currentPlayer); // x or y in css

    if (this.game.isOver()) {
      // cleanup click handlers.
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`You win, ${winner}!`);
      } else {
        $figcaption.html("It's a draw!");
      }

      this.$el.append($figcaption);
    }
  }

  setupBoard() {
    let $ul = $('<ul>');

    $ul.css("display","flex").css("width","320px").css("flex-wrap","wrap");
    for(let i =0; i<3;i++){
      for(let j =0; j<3;j++){
        let $li = $('<li>');
        $li.addClass('li-class');


        $li.data("pos", [i,j]);

        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
