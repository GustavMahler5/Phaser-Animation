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

        this.startText = this.add.text(475, 325, "Refresh the page once and click to start", {
            font: "32px Arial",
            fill: "#ffffff"
        }).setOrigin(0.5);
        this.input.once("pointerdown", () => {
            this.startText.destroy();
            
            let studioName = this.add.text(475, 250, "Platynum Studios", {
                font: "64px Cinzel",
                fill: "#ffffff",
                stroke: "#525252",
                strokeThickness: 4,
            }).setOrigin(0.5);

            let star = this.add.star(850, 250, 10, 20, 40, 0xcecece).setOrigin(0.5);
            let image = this.add.image(475, 450, 'Logo').setOrigin(0.5);
            image.setAlpha(0);
            studioName.setAlpha(0);
            star.setAlpha(0);

            this.tweens.add({
                targets: image,
                alpha: 1, // Fade to opaque
                duration: 2000,
                ease: 'Linear'
            });

            this.tweens.add({
                targets: star,
                alpha: 1,
                duration: 2000,
                ease: 'Linear'
            });

            this.tweens.add({
                targets: studioName,
                alpha: 1, // Fade to opaque
                duration: 2000,
                ease: 'Linear'
            });

            this.time.delayedCall(4000, () => { // CHANGE TO 4000
                this.tweens.add({
                    targets: image,
                    alpha: 0, // Fade to transparent;
                    duration: 2000,
                    ease: 'Linear'
                });
                this.tweens.add({
                    targets: studioName,
                    alpha: 0, // Fade to transparent;
                    duration: 2000,
                    ease: 'Linear'
                });
                this.tweens.add({
                    targets: star,
                    alpha: 0, // Fade to opaque
                    duration: 2000,
                    ease: 'Linear'
                });
            });
            this.time.delayedCall(8000, () => { // CHANGE TO 8000
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

    preload() {
        this.load.setPath("assets/");
        this.load.audio("Intro", "Intro.mp3");
        this.load.image("Character", "Character.png");
    }

    create() {
        //this.add.text(400, 300, "Intro Scene", { font: "32px Arial", fill: "#ffffff" }).setOrigin(0.5);
        let character = this.add.image(500, 325, "Character");
        this.sound.play("Intro", { volume: 0.2 }, { loop: false });
        let characterIntro = this.add.text(20, 550, 
            "King Wobblebeak III: The True Great and Supreme Legendary \nGenius Ruler of \“The Slightly Damp Lands\”", 
            { font: "32px Arial", 
                backgroundColor: '#d6d6d6', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#000000" 
            });
        let characterIntro2 = this.add.text(20, 555, 
            "Rarely is he away from the \“Puddle of Royalty\”. \nBut now he investigates a concern at the \“River of Heroes\”", 
            { font: "32px Arial", 
                backgroundColor: '#d6d6d6', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#000000" 
            });
        character.setAlpha(0);
        characterIntro.setAlpha(0);
        characterIntro2.setAlpha(0);

        this.time.delayedCall(7500, () => { // 7500
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
        this.time.delayedCall(15000, () => { // 15000
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
        this.time.delayedCall(23000, () => { // 23000
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
        this.time.delayedCall(28000, () => { // 28000
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

    preload() {
        this.load.setPath("assets/");
        this.load.image("Character", "Character.png");
        this.load.image("Background", "Background.PNG");
    }

    create() {
        //this.add.text(400, 300, "Dialogue Scene", { font: "32px Arial", fill: "#ffffff" });
        let background = this.add.image(400, 300, "Background");
        let character = this.add.image(500, 325, "Character");

        let dialogue1 = this.add.text(20, 575, "King Wobblebeak: General Quacksalot? What tidings bring you?", 
            { font: "32px Arial", 
                backgroundColor: '#d6d6d6', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#000000" 
            });

        let dialogue2 = this.add.text(20, 575, "….", 
            { font: "32px Arial", 
                backgroundColor: '#d6d6d6', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#000000" 
            });

        let dialogue3 = this.add.text(20, 575, "King Wobblebeak: So they return to plague us once more…", 
            { font: "32px Arial", 
                backgroundColor: '#d6d6d6', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#000000" 
            });

        let dialogue4 = this.add.text(20, 575, "King Wobblebeak: Then we must make haste!", 
            { font: "32px Arial", 
                backgroundColor: '#d6d6d6', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#000000" 
            });   

        character.alpha = 0;
        background.alpha = 0;
        dialogue1.alpha = 0;
        dialogue2.alpha = 0;
        dialogue3.alpha = 0;
        dialogue4.alpha = 0;

        this.time.delayedCall(100, () => {
            this.tweens.add({
                targets: background,
                alpha: 1, // Fade to opaque
                duration: 3000,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(100, () => {
            this.tweens.add({
                targets: character,
                alpha: 1, // Fade to opaque
                duration: 3000,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(4000, () => {
            this.tweens.add({
                targets: dialogue1,
                alpha: 1, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(8000, () => {
            this.tweens.add({
                targets: dialogue2,
                alpha: 1, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
            this.tweens.add({
                targets: dialogue1,
                alpha: 0, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(12000, () => {
            this.tweens.add({
                targets: dialogue3,
                alpha: 1, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
            this.tweens.add({
                targets: dialogue2,
                alpha: 0, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(16000, () => {
            this.tweens.add({
                targets: dialogue4,
                alpha: 1, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
            this.tweens.add({
                targets: dialogue3,
                alpha: 0, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(20000, () => {
            this.tweens.add({
                targets: dialogue4,
                alpha: 0, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
            this.tweens.add({
                targets: character,
                x: -200, // Tween off the screen to the left
                duration: 2000,
                ease: 'Linear'
            });

        });
        this.time.delayedCall(23000, () => {
            this.tweens.add({
                targets: background,
                alpha: 0, // Fade to opaque
                duration: 2000,
                ease: 'Linear'
            });
        });
        this.time.delayedCall(25000, () => { // 25000
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

    preload() {
        this.load.setPath("assets/");
        this.load.image("Background", "Background.png");
        this.load.audio("MainMenu", "MainMenu.mp3");
    }

    create() {
        let background = this.add.image(400, 300, "Background");
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillCircle(430, 99, 9, 0xffffff);
        let selectionText1 = this.add.text(50, 75, "Investigate: Begin Story", 
            { font: "32px Arial", 
                //backgroundColor: '#a3a3a3', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#ffffff" 
            });
        let selectionText2 = this.add.text(50, 150, "Settings", 
            { font: "32px Arial", 
                //backgroundColor: '#a3a3a3', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#ffffff" 
            });
        let selectionText3 = this.add.text(50, 225, "Quit", 
            { font: "32px Arial", 
                //backgroundColor: '#a3a3a3', 
                padding: { left: 10, right: 10, top: 5, bottom: 5 }, 
                fill: "#ffffff" 
            });

        background.alpha = 0;
        this.sound.play("MainMenu", { volume: 0.3 }, { loop: true });
        this.time.delayedCall(50, () => {
            this.tweens.add({
                targets: background,
                alpha: 0.3, // Fade to opaque
                duration: 500,
                ease: 'Linear'
            });
        });
    }

    update() {
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