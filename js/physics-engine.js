class PhysicsObject {
    constructor(x, y, width, height, options) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
        this.width = width;
        this.height = height;
        this.options = options;
    }
}

class PhysicsEngine {
    constructor() {
        this.objects = [];
    }

    addObject(object) {
        this.objects.push(object);
    }

    init() {

    }

    update() {
        for (let i = 0; i < this.objects.length; i++) {
            const object1 = this.objects[i];

            for (let j = i + 1; j < this.objects.length; j++) {
                const object2 = this.objects[j];

                // Check collision between objects
                if (object1.position.x < object2.position.x + object2.width &&
                    object1.position.x + object1.width > object2.position.x &&
                    object1.position.y < object2.position.y + object2.height &&
                    object1.position.y + object1.height > object2.position.y) {

                    // Apply collision physics to objects
                    const overlapX = (object1.width + object2.width) / 2 - Math.abs(object1.position.x - object2.position.x);
                    const overlapY = (object1.height + object2.height) / 2 - Math.abs(object1.position.y - object2.position.y);

                    if (overlapX < overlapY) {
                        if (object1.position.x < object2.position.x) {
                            object1.position.x -= overlapX / 2;
                            object2.position.x += overlapX / 2;
                        } else {
                            object1.position.x += overlapX / 2;
                            object2.position.x -= overlapX / 2;
                        }
                        object1.velocity.x = -object1.velocity.x * 1;
                    } else {
                        if (object1.position.y < object2.position.y) {
                            object1.position.y -= overlapY / 2;
                            object2.position.y += overlapY / 2;
                        } else {
                            object1.position.y += overlapY / 2;
                            object2.position.y -= overlapY / 2;
                        }
                            object1.velocity.y = -object1.velocity.y * 1;
                            object2.velocity.y = -object2.velocity.y * 1;
                    }
                    }
                    }
                            // Update object position based on velocity
        object1.position.x += object1.velocity.x;
        object1.position.y += object1.velocity.y;

        // Apply friction to object velocity
        if (object1.options.friction) {
            object1.velocity.x *= object1.options.friction;
            object1.velocity.y *= object1.options.friction;
        }
    }
    }
}
