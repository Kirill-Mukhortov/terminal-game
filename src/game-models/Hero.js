/* eslint-disable class-methods-use-this */
class Hero {
  constructor({ position }) {
    this.skin = '🤠';
    this.position = position;
    this.lives = ['', '💙', '💙', '💙'];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  die() {
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
