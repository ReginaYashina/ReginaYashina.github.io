
var canvas = document.getElementById('canvas'),
  stage = new createjs.Stage(canvas);

logo_left = "img/logo_left.png",
logo = new createjs.Bitmap(logo_left);
logo.x = 0;
logo.y = 0;
logo.scaleX = 0.6;
logo.scaleY = 0.6;


var g = new createjs.Graphics();
//g.beginFill(createjs.Graphics.getRGB(255,255,255,.1))
g.rr (0, 0, 15, 15, 0);

// var mask = new createjs.Shape(g);//платье , самая короткая линия
// mask.x = 115;
// mask.y = 300;
// mask.rotation = -65;
// mask.scaleX = -7;

var mask_1 = new createjs.Shape(g);//прическа справа
mask_1.x = 195;
mask_1.y = 10;
//mask_1.scaleY = 12;

var mask_2 = new createjs.Shape(g);//прическа справа (еще правее)
mask_2.x = 210;
mask_2.y = 10;
//mask_2.scaleY = 11;

var mask_3 = new createjs.Shape(g);//подбородок?
mask_3.x = 195;
mask_3.y = 95;
mask_3.rotation = -35;
//mask_3.scaleX = -3;

var mask_4 = new createjs.Shape(g);//челка (самая длинная прядь)
mask_4.x = 195;
mask_4.y = 52;
mask_4.rotation = -33;
//mask_4.scaleX = -6;

var mask_5 = new createjs.Shape(g);//кончик челки
mask_5.x = 120;
mask_5.y = 110;
//mask_5.scaleY = 1.5;

var mask_6 = new createjs.Shape(g);//челка 
mask_6.x = 195;
mask_6.y = 35;
mask_6.rotation = -33;
//mask_6.scaleX = -5;

var mask_7 = new createjs.Shape(g);//челка 
mask_7.x = 195;
mask_7.y = 20;
mask_7.rotation = -33;
//mask_7.scaleX = -6;



var mask_8= new createjs.Shape(g);//челка (самая верхняя прядь)
mask_8.x = 200;
mask_8.y = 15;
//mask_8.scaleX = -6;

var mask_9 = new createjs.Shape(g);//челка 
mask_9.x = 140;
mask_9.y = 55;
mask_9.rotation = 33;
//mask_9.scaleY = -3;



// logo.mask = mask;
// 2z\z\a
stage.addChild(logo);
//stage.addChild(mask);
stage.addChild(mask_1);
stage.addChild(mask_2);
stage.addChild(mask_3);
stage.addChild(mask_4);
stage.addChild(mask_5);
stage.addChild(mask_6);
stage.addChild(mask_7);
stage.addChild(mask_8);
stage.addChild(mask_9);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);
// stage.addChild(mask_7);





var tl= new TimelineMax ({delay: 1});
tl.to(mask_1, 0.5, {scaleY: 12})
.to(mask_2, 0.5,{scaleY: 12})
.to(mask_3, 0.5,{scaleX: -3})
.to(mask_4, 0.5,{scaleX: -6})
.to(mask_5, 0.5,{scaleY: 1.5})
.to(mask_6, 0.5,{scaleX: -5})
.to(mask_7, 0.5,{scaleX: -6})
.to(mask_8, 0.5,{scaleX: -6})
.to(mask_9, 0.5,{scaleY: -3})


TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(60);