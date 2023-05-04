class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.color = '#00FF00';
        this.speed = 5;

        this.physicsObject = new PhysicsObject(x, y, this.width, this.height, { friction: 0.5 });
    }

    update() {
        this.physicsObject.velocity.x = 0;
        this.physicsObject.velocity.y = 0;

        if (input.isDown('LEFT')) {
            this.physicsObject.velocity.x = -this.speed;
        } else if (input.isDown('RIGHT')) {
            this.physicsObject.velocity.x = this.speed;
        }

        if (input.isDown('UP')) {
            this.physicsObject.velocity.y = -this.speed;
        } else if (input.isDown('DOWN')) {
            this.physicsObject.velocity.y = this.speed;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}