class GameEngine {
    constructor(canvas) {
        this.scenes = [];
        this.currentScene = null;
        this.physics = new PhysicsEngine();
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.init();
    }

    setScene(scene) {
        this.scenes.push(scene);
        this.currentScene = scene;
    }

    init() {
        // Load game assets here, such as images or sounds
        this.physics.init();
    }

    update() {
        this.currentScene.update();
        this.physics.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.currentScene.draw(this.ctx);
    }

    start() {
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / 60);
    }
}
