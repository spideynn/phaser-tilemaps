window.onload = function() {
	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phasergame', {preload: preload, create: create, update: update, render: render });
	var map;
	var layer;

	function preload() {

	    game.load.tilemap('map', '../assets/tilemap/maze.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.image('tiles', '../assets/tilemap/tiles.png');

	}

	function create() {
	    map = game.add.tilemap('map');
	    map.addTilesetImage('tiles', 'tiles');
	    layer = map.createLayer('Tile Layer 1');
	    layer.resizeWorld();
	}

	function update() {}

	function render() {}
};
