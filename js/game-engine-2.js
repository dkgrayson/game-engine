function GameEngine() {
    this.scene = null;
    this.physics = null;
}

GameEngine.prototype.setScene = function(scene) {
    // Set current scene
    this.scene = scene;
};

GameEngine.prototype.init = function() {
    // Initialize game engine
    var gameEngine = this;

    // Initialize update loop
    setInterval(function() {
        gameEngine.update();
    }, 16);
};

GameEngine.prototype.update = function() {
    // Update game engine state
    if (this.scene) {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.scene.draw(ctx);
    }
};

// Export GameEngine as a module
module.exports = GameEngine;
