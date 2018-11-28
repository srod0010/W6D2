const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js');

console.log('working');
$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  console.log('working');
  new HanoiView(game, rootEl);
});
