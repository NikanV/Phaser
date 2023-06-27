
const config = {
    width: 1024,
    height: 700,
    backgroundColor: 0x000000,
    scene: [Scene1],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
}

const game = new Phaser.Game(config);
