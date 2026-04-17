console.log("game.js is running")

class MyGame extends Phaser.Scene {
    constructor() {
        super("myGame");
    }

    preload() {
        this.load.setPath("assets/");
        this.load.image("Character", "CharacterData.png");
        this.load.image("Background", "Background.png");
        this.load.audio("Intro", "Intro.mp3");
        this.load.audio("MainMenu", "MainMenu.mp3");
    }

    create() {
        this.graphics = this.add.graphics();
        let intro = this.sound.add("Intro", { loop: false });
        let mainMenu = this.sound.add("MainMenu", { loop: true });
        let background = this.add.image(400, 300, "Background");
        let character = this.add.image(400, 300, "Character");
        let circle = this.graphics.fillCircle(400, 300, 50, 0x00ffff);

        // intro.play();
    }

    update() {
    }
}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#000000",
    scene: MyGame
}

let game = new Phaser.Game(config);
