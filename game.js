console.log("game.js is running\n")

class Logo extends Phaser.Scene {
    constructor() {
        super({ key: "Logo" });
    }

    preload() {
        this.load.setPath("assets/");
        this.load.image("Logo", "Logo.png");
    }

    create() {
        // this.graphics = this.add.graphics();
        // let character = this.add.image(400, 300, "Character");
        this.add.text(400, 300, "Logo Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        this.add.image(800, 300, "Logo");
        this.input.once("pointerdown", () => {
            this.scene.start("Intro");
        });
    }

    update() {
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super({ key: "Intro" });
    }

    clickStep = 0;

    preload() {
        this.load.setPath("assets/");
        this.load.audio("Intro", "Intro.mp3");
        this.load.image("Character", "Character.png");
    }

    create() {
        // let character = this.add.image(400, 300, "Character");
        this.add.text(400, 300, "Intro Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        this.input.on("pointerdown", () => {
            this.clickStep++;

            if (this.clickStep == 1) {
                this.add.text(400, 400, "Clicked Once", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
            }
            else if (this.clickStep == 2) {
                this.add.text(400, 500, "Clicked Twice", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
            }
            else if (this.clickStep == 3) {
                this.add.text(400, 600, "Transitioning to Dialogue Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
                this.scene.start("Dialogue");
            }
        });
        this.time.delayedCall(5000, () => {
            this.scene.start("Dialogue");
        });
    }

    update() {
    }
}

class Dialogue extends Phaser.Scene {
    constructor() {
        super({ key: "Dialogue" });
    }

    clickStep = 0;

    preload() {
        this.load.setPath("assets/");
        this.load.image("Character", "Character.png");
        this.load.image("Background", "Background.png");
    }

    create() {
        // let background = this.add.image(400, 300, "Background");
        // let character = this.add.image(400, 300, "Character");
        this.add.text(400, 300, "Dialogue Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        this.input.on("pointerdown", () => {
            this.clickStep++;

            if (this.clickStep == 1) {
                this.add.text(400, 400, "Clicked Once", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
            }
            else if (this.clickStep == 2) {
                this.add.text(400, 500, "Clicked Twice", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
            }
            else if (this.clickStep == 3) {
                this.add.text(400, 600, "Transitioning to Dialogue Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
                this.scene.start("MainMenu");
            }
        });
    }

    update() {
    }
}

class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MainMenu" });
    }

    clickStep = 0;


    preload() {
        this.load.setPath("assets/");
        this.load.image("Background", "Background.png");
        this.load.audio("MainMenu", "MainMenu.mp3");
    }

    create() {
        // let mainMenu = this.sound.add("MainMenu", { loop: true });
        // let background = this.add.image(400, 300, "Background");
        this.add.text(400, 300, "Main Menu Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        this.input.on("pointerdown", () => {
            this.clickStep++;

            if (this.clickStep == 1) {
                this.add.text(400, 400, "Clicked Once", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
            }
            else if (this.clickStep == 2) {
                this.add.text(400, 500, "Clicked Twice", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
            }
            else if (this.clickStep == 3) {
                this.add.text(400, 600, "Transitioning to Dialogue Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
                this.scene.start("Intro");
            }
        });
    }

    update() {
    }
}

let config = {
    type: Phaser.AUTO,
    width: 1179,
    height: 699,
    backgroundColor: "#000000",
    scene: [ Logo, Intro, Dialogue, MainMenu ]
}

let game = new Phaser.Game(config);