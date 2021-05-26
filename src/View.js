/* eslint-disable class-methods-use-this */
class View {
  render(track, lives, score, start) {
    const author = 'Кирилл';

    // Тут всё рисуем.
    console.clear();
    console.log(`
    
    ${track.join('')}`);

    console.log(`
    
    Жизни: ${lives.join('')}`);
    console.log(`

    Ваши очки: ${score}`);
    console.log(`
    Время в игре: ${(new Date()).getSeconds() - start} сек.`);

    console.log('\n\n');
    console.log(`Created by "${author}" with love`);
  }
}

module.exports = View;
