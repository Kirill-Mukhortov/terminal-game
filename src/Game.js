/* eslint-disable max-len */
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 });
    this.enemy = new Enemy({ position: (trackLength) - 1 });
    this.view = new View();
    this.weapon = new Boomerang();
    this.track = [];
    this.lives = [];
    this.score = 0;
    this.startMs = new Date();
    this.start = this.startMs.getSeconds();
    this.regenerateTrack();
  }

  // Сборка всего необходимого (герой, враг(и), оружие)
  // в единую структуру данных
  regenerateTrack() {
    this.track = (new Array(this.trackLength)).fill(' ');
    this.lives = this.hero.lives;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.weapon.position] = this.weapon.skin;
    this.track[this.hero.position] = this.hero.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.lives.splice(-1, 1);
      if (this.lives.length === 1) {
        this.view.render(this.track, this.lives);
        this.hero.die(this.score);
      }
    }
    if (this.weapon.position === this.hero.position && this.weapon.position === this.enemy.position) {
      this.score -= 1;
    }
    if (this.weapon.position === this.enemy.position) {
      this.score += 1;
    }
    if (this.enemy.position <= this.weapon.position) {
      this.enemy.die();
      this.enemy.position = this.track.length - 1;
      this.enemy.generateSkin();
    }
    // if (this.hero.position === this.weapon.position) {
    //   this.weapon.skin = '🤠';
    // } else {
    //   this.weapon.skin = '🌀';
    // }
  }

  // Let's play!
  play() {
    runInteractiveConsole(this.weapon, this, this.hero, this.enemy);
    setInterval(() => {
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.lives, this.score, this.start);
      this.enemy.moveLeft();
      this.check();
    }, 100);
  }
}

module.exports = Game;
