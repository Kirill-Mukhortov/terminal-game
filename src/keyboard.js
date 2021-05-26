/* eslint-disable no-param-reassign */
const keypress = require('keypress');

function runInteractiveConsole(weapon, game, hero, enemy) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      if (key.name === 'space') {
        game.check();
        if (weapon.flight) {
          weapon.flight = false;
          weapon.fly(hero, enemy);
        }
        if (weapon.position === hero.position) {
          weapon.flight = true;
        }
        weapon.position = hero.position;
      } else if (key.name === 'right') {
        game.check();
        hero.moveRight();
        weapon.position = hero.position;
      } else if (key.name === 'left') {
        game.check();
        hero.moveLeft();
        weapon.position = hero.position;
      }
    }
  });
  process.stdin.setRawMode(true);
}

module.exports = runInteractiveConsole;
