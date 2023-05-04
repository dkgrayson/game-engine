class Scene {
    constructor(game) {
        this.game = game;
        this.objects = [];
    }

    addObject(object) {
        this.objects.push(object);

        if (object.physicsObject) {
            this.game.physics.addObject(object.physicsObject);
        }
    }

    init() {
        for (let i = 0; i < this.objects.length; i++) {
            const object = this.objects[i];
            if (object.init) {
                object.init();
            }
        }
    }

    update() {
        for (let i = 0; i < this.objects.length; i++) {
            const object = this.objects[i];
            if (object.update) {
                object.update();
            }
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.objects.length; i++) {
            const object = this.objects[i];
            if (object.draw) {
                object.draw(ctx);
            }
        }
    }
}
