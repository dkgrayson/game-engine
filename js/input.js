class Input {
    constructor() {
        this.keys = {};

        window.addEventListener('keydown', this.keyDown.bind(this));
        window.addEventListener('keyup', this.keyUp.bind(this));
    }

    keyDown(event) {
        this.keys[event.keyCode] = true;
    }

    keyUp(event) {
        this.keys[event.keyCode] = false;
    }

    isDown(keyCode) {
        return this.keys[keyCode];
    }
}
