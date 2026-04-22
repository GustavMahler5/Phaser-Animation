console.log("game.js is running\n")


class Logo extends Phaser.Scene {
    constructor() {
        super({ key: "Logo" });
    }

    clickStep = 0;

    preload() {
        this.load.setPath("assets/");
        this.load.image("Logo", "Logo.png");
    }

    create() {
        // this.graphics = this.add.graphics();
        // let character = this.add.image(400, 300, "Character");
        this.startText = this.add.text(400, 300, "Click to Start", {
            font: "32px Arial",
            fill: "#ffffff"
        }).setOrigin(0.5);
        this.input.on("pointerdown", () => {
            this.clickStep++;
            this.startText.destroy();
            let image = this.add.image(800, 300, 'Logo');

            if (this.clickStep == 1) {
                image.setAlpha(0);
                this.tweens.add({
                    targets: image,
                    alpha: 1, // Fade to opaque
                    duration: 2000,
                    ease: 'Linear'
                });
            }
            this.time.delayedCall(100, () => { // CHANGE TO 4000
                this.tweens.add({
                    targets: image,
                    alpha: 0, // Fade to transparent;
                    duration: 2000,
                    ease: 'Linear'
                });
            });
            this.time.delayedCall(100, () => { // CHANGE TO 10000
                this.scene.start("Intro");
            });
            
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
        // this.input.on("pointerdown", () => {
        //     this.clickStep++;

        //     if (this.clickStep == 1) {
        //         this.add.text(400, 400, "Clicked Once", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //     }
        //     else if (this.clickStep == 2) {
        //         this.add.text(400, 500, "Clicked Twice", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //     }
        //     else if (this.clickStep == 3) {
        //         this.add.text(400, 600, "Transitioning to Dialogue Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //         this.scene.start("Dialogue");
        //     }
        // });
        let character = this.add.image(400, 300, "Character");
        let characterIntro = this.add.text(400, 100, "Introducing this character", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        let characterIntro2 = this.add.text(400, 100, "Introducing this character some more", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //this.sound.play("Intro", { volume: 0.1 });
        character.setAlpha(0);
        characterIntro.setAlpha(0);
        characterIntro2.setAlpha(0);
        this.time.delayedCall(100, () => { // 7500
            this.tweens.add({
                targets: character,
                alpha: 1, // Fade to opaque
                duration: 3000,
                ease: 'Linear'
            });
            this.tweens.add({
                targets: characterIntro,
                alpha: 1, // Fade to opaque
                duration: 3000,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(100, () => { // 15000
            this.tweens.add({
                targets: characterIntro2,
                alpha: 1, // Fade to opaque
                duration: 3000,
                ease: 'Linear'
            });
            this.tweens.add({
                targets: characterIntro,
                alpha: 0, // Fade to transparent
                duration: 3000,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(100, () => { // 23000
            this.tweens.add({
                targets: characterIntro2,
                alpha: 0, // Fade to transparent
                duration: 3000,
                ease: 'Linear'
            });
            this.tweens.add({
                targets: character,
                alpha: 0, // Fade to transparent
                duration: 3000,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(100, () => { // 38000
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
        this.add.text(400, 300, "Dialogue Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        let background = this.add.image(400, 300, "Background");
        let character = this.add.image(400, 300, "Character");
        character.alpha = 0;
        background.alpha = 0;
        // this.input.on("pointerdown", () => {
        //     this.clickStep++;

        //     if (this.clickStep == 1) {
        //         this.add.text(400, 400, "Clicked Once", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //     }
        //     else if (this.clickStep == 2) {
        //         this.add.text(400, 500, "Clicked Twice", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //     }
        //     else if (this.clickStep == 3) {
        //         this.add.text(400, 600, "Transitioning to Dialogue Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //         this.scene.start("MainMenu");
        //     }
        // });
        this.time.delayedCall(100, () => {
            this.tweens.add({
                targets: background,
                alpha: 1, // Fade to opaque
                duration: 3000,
                ease: 'Linear'
            });
            this.tweens.add({
                targets: character,
                alpha: 1, // Fade to opaque
                duration: 3000,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(3000, () => {
            this.scene.start("MainMenu");
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
        let background = this.add.image(400, 300, "Background");
        let selectionText1 = this.add.text(50, 75, "Investigate: Begin Story", { font: "32px Arial", fill: "#ffffff" });
        let selectionText2 = this.add.text(50, 150, "Settings", { font: "32px Arial", fill: "#ffffff" });
        let selectionText3 = this.add.text(50, 225, "Quit", { font: "32px Arial", fill: "#ffffff" });
        // this.selectionText1.setInteractive();
        // this.selectionText2.setInteractive();
        // this.selectionText3.setInteractive();
        background.alpha = 0;
        this.sound.play("MainMenu", { volume: 0.2 }, { loop: true });
        this.add.text(400, 300, "Main Menu Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        this.time.delayedCall(50, () => {
            this.tweens.add({
                targets: background,
                alpha: 0.3, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
        });
        // this.input.on("pointerdown", () => {
        //     this.clickStep++;

        //     if (this.clickStep == 1) {
        //         this.add.text(400, 400, "Clicked Once", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //     }
        //     else if (this.clickStep == 2) {
        //         this.add.text(400, 500, "Clicked Twice", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //     }
        //     else if (this.clickStep == 3) {
        //         this.add.text(400, 600, "Transitioning to Dialogue Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        //         this.scene.start("Intro");
        //     }
        // });
    }

    update() {
        // this.selectionText1.on("pointerover", () => {
        //     this.selectionText1.setColor("#ff0000"); // change to red on hover
        // });

        // this.selectionText1.on("pointerout", () => {
        //     this.selectionText1.setColor("#ffffff"); // back to white
        // });
    }
}

let config = {
    type: Phaser.AUTO,
    width: 950,
    height: 650,
    backgroundColor: "#000000",
    scene: [ Logo, Intro, Dialogue, MainMenu ]
}

let game = new Phaser.Game(config);