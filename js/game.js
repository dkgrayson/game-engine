const spriteSheet = new Image();
spriteSheet.src = 'spritesheet.png';

const canvas = document.getElementById('canvas');

const game = new GameEngine(canvas);

const input = new Input();

const scene = new Scene(game);
game.setScene(scene);

const playerSprite = new Sprite(spriteSheet, 0, 0, 32, 32, 8);
const player = new Player(50, 50, this.input, playerSprite);
scene.addObject(player);

const enemy1 = new Enemy(200, 100);
scene.addObject(enemy1);

const enemy2 = new Enemy(400, 200);
scene.addObject(enemy2);

game.start();
