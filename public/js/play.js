//Global Variables
var player;
var arrow;
var goal;
var goal2;
var catchFlag = false;
var launchVelocity = 0;
var platforms;
var enemy;

var username;
var leaders;
var score = 0;
var text = 0;
var scoreText;
var endText;
var counter = 60;
var music;

//===================GAMEPLAY FUNCTIONS========================//

function updateCounter() {

        counter--;

        text.setText('Time Left: ' + counter);
}

function set(player,pointer) {

        catchFlag = true;
        game.camera.follow(null);
        
        player.body.moves = false;
        player.body.velocity.setTo(0, 0);
        arrow.reset(player.x, player.y);
        analog.reset(player.x, player.y);

}

function launch() {

        catchFlag = false;
        player.body.moves = true;
        
        arrow.alpha = 0;
        analog.alpha = 0;

        Xvector = (arrow.x - player.x) * 3;
        Yvector = (arrow.y - player.y) * 3;

        player.body.velocity.setTo(Xvector, Yvector);

}

function goalScore(player, goal2) {

        // Removes the ball from the screen
        player.kill();

        // Update the score
        score += 1;
        scoreText.text = 'Goals: ' + score;

        restartBall();
}

function ownGoal(player, goal) {

        // Removes the ball from the screen
        player.kill();

        // Update the score
        score -= 1;
        scoreText.text = 'Goals: ' + score;

        restartBall();
}

function restartBall() {

        // Puts the ball back in the middle mark to restart the game
        player = game.add.sprite(633, 300, 'player');

        game.physics.enable([player], Phaser.Physics.ARCADE);

        player.anchor.set(0.5);
        player.body.collideWorldBounds = true;
        player.body.bounce.set(0.9);
        player.body.drag.set(50, 50);

        player.inputEnabled = true;
        player.input.start(0, true);
        player.events.onInputDown.add(set);
        player.events.onInputUp.add(launch);
}

//===================PLAYSTATE OBJECT========================//

var playState = {

create: function() {

    // Soccer Field Background
    game.add.sprite(0, 0, 'futebol');

    //Add and play background music
    music = game.add.audio('musica');

    music.play();
   
//======================PLAYERS===========================//

    //enemy
    enemy = game.add.sprite(1150, game.world.height - 410, 'enemy');
    enemy.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy);
    enemy.body.immovable = true;
    enemy.body.collideWorldBounds = true;
    game.add.tween(enemy).to({ y: 315 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy1
    enemy1 = game.add.sprite(980, game.world.height - 510, 'enemy');
    enemy1.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy1);
    enemy1.body.immovable = true;
    enemy1.body.collideWorldBounds = true;
    game.add.tween(enemy1).to({ y: 10 }, 2800, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy2
    enemy2 = game.add.sprite(980, game.world.height - 100, 'enemy');
    enemy2.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy2);
    enemy2.body.immovable = true;
    enemy2.body.collideWorldBounds = true;
    game.add.tween(enemy2).to({ y: 400 }, 3150, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy3
    enemy3 = game.add.sprite(980, game.world.height - 440, 'enemy');
    enemy3.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(enemy3);
    enemy3.body.immovable = true;
    enemy3.body.collideWorldBounds = true;
    game.add.tween(enemy3).to({ y: 330 }, 3750, Phaser.Easing.Quadratic.InOut, true, 0, 3000, true);

    //enemy5
    enemy5 = game.add.sprite(820, game.world.height - 150, 'enemy');
    enemy5.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy5);
    enemy5.body.immovable = true;
    enemy5.body.collideWorldBounds = true;
    game.add.tween(enemy5).to({ y: 300 }, 3200, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy7
    enemy7 = game.add.sprite(820, game.world.height - 575, 'enemy');
    enemy7.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy7);
    enemy7.body.immovable = true;
    enemy7.body.collideWorldBounds = true;
    game.add.tween(enemy7).to({ y: 230 }, 4100, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy8
    enemy8 = game.add.sprite(700, game.world.height - 300, 'enemy');
    enemy8.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy8);
    enemy8.body.immovable = true;
    enemy8.body.collideWorldBounds = true;
    game.add.tween(enemy8).to({ y: 500 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy9
    enemy9 = game.add.sprite(700, game.world.height - 370, 'enemy');
    enemy9.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy9);
    enemy9.body.immovable = true;
    enemy9.body.collideWorldBounds = true;
    game.add.tween(enemy9).to({ y: 40 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

//-----------------------RedTeam----------------------//

    //enemy10
    enemy10 = game.add.sprite(100, game.world.height - 410, 'enemy-white');
    enemy10.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy10);
    enemy10.body.immovable = true;
    enemy10.body.collideWorldBounds = true;
    game.add.tween(enemy10).to({ y: 320 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy11
    enemy11 = game.add.sprite(270, game.world.height - 580, 'enemy-white');
    enemy11.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy11);
    enemy11.body.immovable = true;
    enemy11.body.collideWorldBounds = true;
    game.add.tween(enemy11).to({ y: 80 }, 3300, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy12
    enemy12 = game.add.sprite(270, game.world.height - 100, 'enemy-white');
    enemy12.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy12);
    enemy12.body.immovable = true;
    enemy12.body.collideWorldBounds = true;
    game.add.tween(enemy12).to({ y: 400 }, 3800, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy13
    enemy13 = game.add.sprite(270, game.world.height - 270, 'enemy-white');
    enemy13.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy13);
    enemy13.body.immovable = true;
    enemy13.body.collideWorldBounds = true;
    game.add.tween(enemy13).to({ y: 180 }, 3000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy15
    enemy15 = game.add.sprite(440, game.world.height - 280, 'enemy-white');
    enemy15.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy15);
    enemy15.body.immovable = true;
    enemy15.body.collideWorldBounds = true;
    game.add.tween(enemy15).to({ y: 500 }, 3200, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy17
    enemy17 = game.add.sprite(440, game.world.height - 400, 'enemy-white');
    enemy17.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy17);
    enemy17.body.immovable = true;
    enemy17.body.collideWorldBounds = true;
    game.add.tween(enemy17).to({ y: 50 }, 3800, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy18
    enemy18 = game.add.sprite(540, game.world.height - 100, 'enemy-white');
    enemy18.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy18);
    enemy18.body.immovable = true;
    enemy18.body.collideWorldBounds = true;
    game.add.tween(enemy18).to({ y: 320 }, 3700, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //enemy19
    enemy19 = game.add.sprite(540, game.world.height - 575, 'enemy-white');
    enemy19.scale.setTo(0.6, 0.6)
    game.physics.arcade.enable(enemy19);
    enemy19.body.immovable = true;
    enemy19.body.collideWorldBounds = true;
    game.add.tween(enemy19).to({ y: 230 }, 3250, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    //  GAME SCORE
    scoreText = game.add.text(580, 25, 'Goals: 0', { fontSize: '28px', fill: '#FFF' });

    // TIMER
    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);

    text = game.add.text(game.world.centerX, game.world.centerY, 'Time Left: 60', { font: "26px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, -7.0);

    // GOALS
    goal = game.add.sprite(12, 252, 'goal');

    game.physics.enable([goal], Phaser.Physics.ARCADE);

    goal.body.collideWorldBounds = true;

    goal.body.immovable = true;
    //------------------------------------------------//
    goal2 = game.add.sprite(1215, 252, 'goal-two');

    game.physics.enable([goal2], Phaser.Physics.ARCADE);

    goal2.body.collideWorldBounds = true;

    goal2.body.immovable = true;

//===============BALL EFFECTS==================//

    analog = game.add.sprite(200, 450, 'analog');
    analog.width = 8;
    analog.rotation = 220;
    analog.alpha = 0;
    analog.anchor.setTo(0.5, 0.0);
    
    arrow = game.add.sprite(200, 450, 'arrow');
    arrow.anchor.setTo(0.1, 0.5);
    arrow.alpha = 0;

    player = game.add.sprite(633, 300, 'player');

    game.physics.enable([player], Phaser.Physics.ARCADE);

    player.anchor.set(0.5);
    player.body.collideWorldBounds = true;
    player.body.bounce.set(0.9);
    player.body.drag.set(50, 50);

    // Enable input
    player.inputEnabled = true;
    player.input.start(0, true);
    player.events.onInputDown.add(set);
    player.events.onInputUp.add(launch);

},

update: function() {

    //  Set collision between game sprites
    game.physics.arcade.collide(player, platforms);
    
    // Overlap function to compute goals
    game.physics.arcade.overlap(player, goal, ownGoal, null, this);
    game.physics.arcade.overlap(player, goal2, goalScore, null, this);
//=================================================//
    game.physics.arcade.collide(enemy, platforms);
    game.physics.arcade.collide(enemy, player);
//=================================================//
    game.physics.arcade.collide(enemy1, platforms);
    game.physics.arcade.collide(enemy1, player);
//=================================================//
    game.physics.arcade.collide(enemy2, platforms);
    game.physics.arcade.collide(enemy2, player);
//=================================================//
    game.physics.arcade.collide(enemy3, platforms);
    game.physics.arcade.collide(enemy3, player);
//=================================================//
    game.physics.arcade.collide(enemy5, platforms);
    game.physics.arcade.collide(enemy5, player);
//=================================================//
    game.physics.arcade.collide(enemy7, platforms);
    game.physics.arcade.collide(enemy7, player);
//=================================================//
    game.physics.arcade.collide(enemy8, platforms);
    game.physics.arcade.collide(enemy8, player);
//=================================================//
    game.physics.arcade.collide(enemy9, platforms);
    game.physics.arcade.collide(enemy9, player);
//=================================================//
    game.physics.arcade.collide(enemy10, platforms);
    game.physics.arcade.collide(enemy10, player);
//=================================================//
    game.physics.arcade.collide(enemy11, platforms);
    game.physics.arcade.collide(enemy11, player);
//=================================================//
    game.physics.arcade.collide(enemy12, platforms);
    game.physics.arcade.collide(enemy12, player);
//=================================================//
    game.physics.arcade.collide(enemy13, platforms);
    game.physics.arcade.collide(enemy13, player);
//=================================================//
    game.physics.arcade.collide(enemy15, platforms);
    game.physics.arcade.collide(enemy15, player);
//=================================================//
    game.physics.arcade.collide(enemy17, platforms);
    game.physics.arcade.collide(enemy17, player);
//=================================================//
    game.physics.arcade.collide(enemy18, platforms);
    game.physics.arcade.collide(enemy18, player);
//=================================================//
    game.physics.arcade.collide(enemy19, platforms);
    game.physics.arcade.collide(enemy19, player);

//======================BALL EFECT==============//
    arrow.rotation = game.physics.arcade.angleBetween(arrow, player);
    
    if (catchFlag == true)
    {
        //  Track the ball sprite to the mouse  
        player.x = game.input.activePointer.worldX; 
        player.y = game.input.activePointer.worldY;
        
        arrow.alpha = 1;    
        analog.alpha = 0.5;
        analog.rotation = arrow.rotation - 3.14 / 2;
        analog.height = game.physics.arcade.distanceBetween(arrow, player);    
        launchVelocity = analog.height;
    }

    if (counter === 0) {

        game.state.start('win');

        }

},
    //Next Game State
    Win: function() {
            
        game.state.start('win');

    }

}