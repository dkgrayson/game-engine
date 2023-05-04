class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.color = '#FF0000';

        this.physicsObject = new PhysicsObject(x, y, this.width, this.height, { friction: 0.5 });
    }

    update() {

    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
