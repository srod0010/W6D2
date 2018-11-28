

class View {
  constructor(game, $el){
    this.game =game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers () {
    this.$el.empty();

    let $tower, $disk;

    for (var i = 0; i < 3; i++) {
      $tower = $('<ul>');
      for (var j = 0; j < 3; j++) {
        $disk = $('<li>');
        $tower.append($disk);
      }
    }

  this.$el.append($tower);
  }


  render() {
    console.log(this.$el);
  }

}
module.exports = View;
