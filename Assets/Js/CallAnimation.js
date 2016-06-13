
var canvas1,
	canvas2,
	canvas3,
	canvas4,
	stage,
	exportRoot;

function init() {
	canvas = document.getElementById("canvas1");
	exportRoot = new lib.Animation1();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	canvas = document.getElementById("canvas2");
	exportRoot = new lib.Animation2();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	createjs.MotionGuidePlugin.install();

	canvas = document.getElementById("canvas3");
	exportRoot = new lib.Animation3();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	canvas = document.getElementById("canvas4");
	exportRoot = new lib.Animation4();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	canvas = document.getElementById("canvas5");
	exportRoot = new lib.Animation5();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
//Logo Menu

	canvas = document.getElementById("LogoSpin");
	exportRoot = new lib.LogoSpin();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

//parallax 
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
}

// setTimeout(function() {
//   	jQuery('#canvas1, #canvas2, #canvas3, #canvas4, #canvas5').addClass('layer');
// }, 3300);