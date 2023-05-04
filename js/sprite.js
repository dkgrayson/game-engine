class Sprite {
    constructor(image, x, y, width, height, frameCount) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameCount = frameCount;
        this.currentFrame = 1;
    }

    draw(ctx, x, y) {
        const sourceX = this.x + this.width * this.currentFrame;
        ctx.drawImage(this.image, sourceX, this.y, this.width, this.height, x, y, this.width, this.height);
    }

    update() {
        this.currentFrame = (this.currentFrame + 1) % this.frameCount;
    }
}