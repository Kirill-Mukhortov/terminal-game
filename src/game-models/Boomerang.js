class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = undefined;
  }

  fly(hero, enemy) {
    const moveRightInterval = setInterval(() => {
      this.moveRight();
      if (this.position >= enemy.position - 1) {
        clearInterval(moveRightInterval);
        const moveLeftInteval = setInterval(() => {
          this.moveLeft();
          if (this.position <= hero.position) {
            clearInterval(moveLeftInteval);
          }
        }, 100);
      }
    }, 100);
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }
}

module.exports = Boomerang;
