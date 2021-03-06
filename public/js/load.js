var loadState = {

	preload: function() {

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.refresh();

		var loadingLabel = game.add.text(80, 150, 'LOADING...', {font: '30px Arial', fill: '#ffffff'});

		//Load GameImages
    	game.load.image('futebol', '../images/football-field.jpg');
        game.load.image('futebol-clean', '../images/football-field-clean.jpg');
        game.load.image('stadium', '../images/stadium.jpg');
    	game.load.image('enemy', '../images/footballer-yellow.png');
    	game.load.image('enemy-white', '../images/footballer-white.png');
    	game.load.image('goal', '../images/goal.png');
    	game.load.image('goal-two', '../images/goal-two.png');
    	game.load.image('player','../images/bola.png');
    	game.load.image('analog', '../images/arrow.png');
    	game.load.image('arrow', '../images/arrow.png');
        game.load.image('button', '../images/bola-button.png');
        game.load.image('submit', '../images/submit-button.png');
        game.load.image('play-again', '../images/play-again.png');

        game.load.audio('musica', ['../audio/som-futebol.mp3', 'assets/audio/som-futebol.ogg']);

	},

	create: function() {

		game.state.start('menu');
	}

};