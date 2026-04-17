console.log("game.js is running")

class myGame extends Phaser.Scene {
    constructor() {
        super("myGame")
    }

    preload() {
    }

    create() {
    }

    update() {
    }
}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#000000",
    scene: myGame
}

let game = new Phaser.Game();