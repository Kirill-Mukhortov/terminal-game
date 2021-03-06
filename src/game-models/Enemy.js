class Enemy {
  constructor({ position }) {
    this.generateSkin();
    this.position = position;
    this.flag = true;
  }

  generateSkin() {
    const skins = ['ðū', 'ð', 'ðđ', 'ðŧ', 'ð―', 'ðŋ', 'ðĐ', 'ðĪĄ', 'ðĪš', 'ð§', 'ð§', 'ð'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    this.position -= 1;
  }

  die() {
    this.flag = false;
  }
}

module.exports = Enemy;
