class Scene1 extends Phaser.Scene {
    platforms;
    cursors;
    score = 0;
    score_text;

    preload(){
        this.load.image("background" , "assets/sky.jpg")
        this.load.image("ice" , "assets/ice.jpg")
        this.load.image("fish" , "assets/fish.png")
        this.load.spritesheet("player" , "assets/es2.png" , {
            frameWidth: 200,
            frameHeight: 113
        });
    }

    create(){
        this.background = this.add.image(0 , 0 , "background");
        this.background.setOrigin(0,0);

        this.score_text = this.add.text(20 , 20 , "score : " + this.score , {font: "25px Arial" , fill : "red"})      

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(0, config.height - 90 , 'ice').setOrigin(0.0).setScale(0.5).refreshBody();
        this.platforms.create(410 , config.height - 90 , "ice").setOrigin(0.0).setScale(0.5).refreshBody();
        this.platforms.create(820 , config.height - 90 , "ice").setOrigin(0.0).setScale(0.5).refreshBody();
        this.platforms.create(600 , config.height - 300 , "ice").setOrigin(0.0).setScale(0.5).refreshBody();
        this.platforms.create(-100 , config.height - 400 , "ice").setOrigin(0.0).setScale(0.5).refreshBody();
        
        this.player = this.physics.add.sprite(100, 450, 'player');
        this.player.setBounce(0.4);
        this.player.setCollideWorldBounds(true);
        this.player.body.setSize(this.player.body.frameWidth ,this.player.body.height - 70);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.fishes = this.physics.add.group({
            key: 'fish',
            repeat: 9,
            setXY: { x: 12, y: 0, stepX: 100 },
            setScale: { x: 0.05, y: 0.05}
        });

        for (const fish of this.fishes.getChildren())
        {
            fish.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        }

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.fishes, this.platforms);
        this.physics.add.overlap(this.player, this.fishes, this.collectfish, null, this);
    }

    update ()
    {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-430);
        }

        if(this.score == 100){
            alert("you won!")
            this.score = 0 ;
        }
        
    }

    collectfish (player, fish)
    {
        fish.disableBody(true, true);
        this.score += 10;
        this.score_text.text = "score: " + this.score;
    }
}