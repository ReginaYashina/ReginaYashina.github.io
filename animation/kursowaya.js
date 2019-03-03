var canvas = document.getElementById('canvas'),
stage = new createjs.Stage(canvas);
//голубые полосы = квадрат
var p1 = {
	x0: 700,
	y0: 700,
	x1: 700,
	y1: 700
}
var pls1 = new createjs.Shape();
stage.addChild(pls1);
pls1.graphics
.beginStroke("#00BFFF")
.setStrokeStyle(100)
.mt(p1.x0, p1.y0).lt(p1.x1, p1.y1)
.endStroke();

var p2 = {
	x0: 600,
	y0: 700,
	x1: 600,
	y1: 700
}
var pls2 = new createjs.Shape();
stage.addChild(pls2);
pls2.graphics
.beginStroke("#00BFFF")
.setStrokeStyle(100)
.mt(p2.x0, p2.y0).lt(p2.x1, p2.y1)
.endStroke();

var p3 = {
	x0: 500,
	y0: 700,
	x1: 500,
	y1: 700
}
var pls3 = new createjs.Shape();
stage.addChild(pls3);
pls3.graphics
.beginStroke("#00BFFF")
.setStrokeStyle(100)
.mt(p3.x0, p3.y0).lt(p3.x1, p3.y1)
.endStroke();

var p4 = {
	x0: 400,
	y0: 700,
	x1: 400,
	y1: 700
}
var pls4 = new createjs.Shape();
stage.addChild(pls4);
pls4.graphics
.beginStroke("#00BFFF")
.setStrokeStyle(100)
.mt(p4.x0, p4.y0).lt(p4.x1, p4.y1)
.endStroke();

//синие полосы = квадрат
var s1 = {
	x0: 700,
	y0: 700,
	x1: 700,
	y1: 700
}
var spls1 = new createjs.Shape();
stage.addChild(spls1);
spls1.graphics
.beginStroke("#0000FF")
.setStrokeStyle(100)
.mt(s1.x0, s1.y0).lt(s1.x1, s1.y1)
.endStroke();

var s2 = {
	x0: 600,
	y0: 700,
	x1: 600,
	y1: 700
}
var spls2 = new createjs.Shape();
stage.addChild(spls2);
spls2.graphics
.beginStroke("#0000FF")
.setStrokeStyle(100)
.mt(s2.x0, s2.y0).lt(s2.x1, s2.y1)
.endStroke();

var s3 = {
	x0: 500,
	y0: 700,
	x1: 500,
	y1: 700
}
var spls3 = new createjs.Shape();
stage.addChild(spls3);
spls3.graphics
.beginStroke("#0000FF")
.setStrokeStyle(100)
.mt(s3.x0, s3.y0).lt(s3.x1, s3.y1)
.endStroke();

var s4 = {
	x0: 400,
	y0: 700,
	x1: 400,
	y1: 700
}
var spls4 = new createjs.Shape();
stage.addChild(spls4);
spls4.graphics
.beginStroke("#0000FF")
.setStrokeStyle(100)
.mt(s4.x0, s4.y0).lt(s4.x1, s4.y1)
.endStroke();

//три полоски верхний левый угол
var polosa_1 = {
	x0: 300,
	y0: 300,
	x1: 300,
	y1: 200
}

var pol_1 = new createjs.Shape();
pol_1.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_1.x0, polosa_1.y0).lt(polosa_1.x1, polosa_1.y1)
.endStroke();

var polosa_2 = {
	x0: 300,
	y0: 300,
	x1: 225,
	y1: 225
}
var pol_2 = new createjs.Shape();
pol_2.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_2.x0, polosa_2.y0).lt(polosa_2.x1, polosa_2.y1)
.endStroke();

var polosa_3 = {
	x0: 300,
	y0: 300,
	x1: 200,
	y1: 300
}

var pol_3 = new createjs.Shape();
pol_3.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_3.x0, polosa_3.y0).lt(polosa_3.x1, polosa_3.y1)
.endStroke();

//три полоски верхний правый угол
var polosa_4 = {
	x0: 500,
	y0: 300,
	x1: 500,
	y1: 325
}

var pol_4 = new createjs.Shape();
stage.addChild(pol_4);
pol_4.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_4.x0, polosa_4.y0).lt(polosa_4.x1, polosa_4.y1)
.endStroke();

var polosa_5 = {
	x0: 500,
	y0: 300,
	x1: 550,
	y1: 250
}

var pol_5 = new createjs.Shape();
stage.addChild(pol_5);
pol_5.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_5.x0, polosa_5.y0).lt(polosa_5.x1, polosa_5.y1)
.endStroke();

var polosa_6 = {
	x0: 500,
	y0: 300,
	x1: 575,
	y1: 300
}

var pol_6 = new createjs.Shape();
stage.addChild(pol_6);
pol_6.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_6.x0, polosa_6.y0).lt(polosa_6.x1, polosa_6.y1)
.endStroke();

//три полоски нижний левый угол
var polosa_7 = {
	x0: 300,
	y0: 500,
	x1: 265,
	y1: 500
}

var pol_7 = new createjs.Shape();
stage.addChild(pol_7);
pol_7.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_7.x0, polosa_7.y0).lt(polosa_7.x1, polosa_7.y1)
.endStroke();

var polosa_8 = {
	x0: 300,
	y0: 500,
	x1: 275,
	y1: 525
}

var pol_8 = new createjs.Shape();
stage.addChild(pol_8);
pol_8.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_8.x0, polosa_8.y0).lt(polosa_8.x1, polosa_8.y1)
.endStroke();

var polosa_9 = {
	x0: 300,
	y0: 500,
	x1: 300,
	y1: 535
}

var pol_9 = new createjs.Shape();
stage.addChild(pol_9);
pol_9.graphics
.beginStroke("#ccc")
.clear()
.setStrokeStyle(7)
.mt(polosa_9.x0, polosa_9.y0).lt(polosa_9.x1, polosa_9.y1)
.endStroke();

//синий квадрат
var kwdr = new createjs.Shape();
kwdr.graphics
.clear()
.f("#0000FF")
.rr (0, 0, 400, 400, 0)
kwdr.regX = kwdr.regY = 200;
kwdr.x = 500;
kwdr.y = 500;
kwdr.alpha = 0;
stage.addChild(kwdr);

stage.addChild(pol_1);
stage.addChild(pol_2);
stage.addChild(pol_3);

//круг
var k = {
	a: 0,
	b: 0,
	c: 200,
	d: 0,
	e: 6.28,
	f: false
}

var krug = new createjs.Shape();
krug.graphics
.beginFill("#0000FF")
.arc(k.a,k.b,k.c,k.d,k.e,k.f)
krug.alpha = 0;

var krug_cnt = new createjs.Container();	
krug_cnt.x = 0;
krug_cnt.y = 0;
krug_cnt.addChild(krug);	
stage.addChild(krug_cnt);

var chtw = new createjs.Shape();
 chtw.graphics
.beginFill("#0000FF")
.arc(0, 0, 200, 4.71, 3.14, true)
.lineTo(0, 0)
.closePath()
.endStroke();
chtw.alpha = 0;

var kwadr_cnt = new createjs.Container();	
kwadr_cnt.x = 500;
kwadr_cnt.y = 500;
kwadr_cnt.addChild(chtw);	
kwadr_cnt.addChild(krug_cnt);	
stage.addChild(kwadr_cnt);

// кривая линия
var bl = new createjs.Shape();	
bl.x = 500;
bl.y = 250;		

var a4 = {
	b: 3000
};

//контейнеры для треугольников и сами треугольники
var t = {
	x0: 0,
	y0: 0,
	x1: 200,
	y1: 0,
	x2: 0,
	y2: 200
	
};

var tr_1 = new createjs.Shape();
tr_1.graphics
.beginStroke("#0000FF")
.f("#0000FF")
.setStrokeStyle(1)
.mt(t.x0, t.y0).lt(t.x1, t.y1).lt(t.x2, t.y2).cp()
.endStroke();
tr_1.alpha = 0;

var tr_cnt_1 = new createjs.Container();	
tr_cnt_1.regX = 0;
tr_cnt_1.regY = 200;
tr_cnt_1.x = 500;
tr_cnt_1.y = 700;
tr_cnt_1.addChild(tr_1);	
stage.addChild(tr_cnt_1);

var t2 = {
	x0: 0,
	y0: 0,
	x1: -200,
	y1: 0,
	x2: 0,
	y2: -200
	
};

var tr_2 = new createjs.Shape();
tr_2.graphics
.beginStroke("#0000FF")
.f("#0000FF")
.setStrokeStyle(1)
.mt(t2.x0, t2.y0).lt(t2.x1, t2.y1).lt(t2.x2, t2.y2).cp()
.endStroke();
tr_2.alpha = 0;

var tr_cnt_2 = new createjs.Container();	
tr_cnt_2.regX = -200;
tr_cnt_2.regY = 0;
tr_cnt_2.x = 500;
tr_cnt_2.y = 700;
tr_cnt_2.addChild(tr_2);	
stage.addChild(tr_cnt_2);

stage.addChild(bl);//кривая

//голубой круг
var kr = {
	x: 500,
	y: 500,
	r: 0
}

var krg = new createjs.Shape();
krg.graphics
.clear()
.f("#00BFFF")
.dc(kr.x, kr.y, kr.r)

//"звезда"
var pst = {
	x: 500,
	y: 500,
	r:0,
	l: 24,
	s: 0.1,
	a: -90
}

var star = new createjs.Shape();
star.graphics
.clear()
.f("#000")
.dp(pst.x, pst.y, pst.r, pst.l, pst.s, pst.a)

stage.addChild(star);
stage.addChild(krg);

//текст
var txt_1 = new createjs.Text("Y", "90px Calibri", "#000")
txt_1.x = 330;
txt_1.y = -200;

var txt_2 = new createjs.Text("o", "90px Calibri", "#000")
txt_2.x = 360;
txt_2.y = -200;

var txt_3 = new createjs.Text("u", "90px Calibri", "#000")
txt_3.x = 400;
txt_3.y = -200;

var txt_4 = new createjs.Text("r", "90px Calibri", "#000")
txt_4.x = 440;
txt_4.y = -200;

var txt_5 = new createjs.Text("N", "90px Calibri", "#000")
txt_5.x = 467;
txt_5.y = -200;

var txt_6 = new createjs.Text("a", "90px Calibri", "#000")
txt_6.x = 521;
txt_6.y = -200;

var txt_7 = new createjs.Text("m", "90px Calibri", "#000")
txt_7.x = 556;
txt_7.y = -200;

var txt_8 = new createjs.Text("e", "90px Calibri", "#000")
txt_8.x = 620;
txt_8.y = -200;
 
stage.addChild(txt_1);
stage.addChild(txt_2);
stage.addChild(txt_3);
stage.addChild(txt_4);
stage.addChild(txt_5);
stage.addChild(txt_6);
stage.addChild(txt_7);
stage.addChild(txt_8);

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////линия времени////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var tl= new TimelineMax ({delay: 1});
tl.to (p1, 0.3, {
	y1: 300,
	onUpdate: function () {
		pls1.graphics
		.clear()	
		.beginStroke("#00BFFF")
		.setStrokeStyle(100)
		.mt(p1.x0, p1.y0).lt(p1.x1, p1.y1)
		.endStroke();
	}
})

.to (p2, 0.3, {
	y1: 300,
	onUpdate: function () {
		pls2.graphics
		.clear()	
		.beginStroke("#00BFFF")
		.setStrokeStyle(100)
		.mt(p2.x0, p2.y0).lt(p2.x1, p2.y1)
		.endStroke();
	}
},"-=0.15")

.to (p3, 0.3, {
	y1: 300,
	onUpdate: function () {
		pls3.graphics
		.clear()	
		.beginStroke("#00BFFF")
		.setStrokeStyle(100)
		.mt(p3.x0, p3.y0).lt(p3.x1, p3.y1)
		.endStroke();
	}
},"-=0.15")  

 .to(s1, 0.3, {
	y1: 300,
	onUpdate: function () {
		spls1.graphics
		.clear()	
		.beginStroke("#0000FF")
		.setStrokeStyle(100)
		.mt(s1.x0, s1.y0).lt(s1.x1, s1.y1)
		.endStroke();
	}
},"-=0.3")

.to (p4, 0.3, {
	y1: 300,
	onUpdate: function () {
		pls4.graphics
		.clear()	
		.beginStroke("#00BFFF")
		.setStrokeStyle(100)
		.mt(p4.x0, p4.y0).lt(p4.x1, p4.y1)
		.endStroke();
	}
},"-=0.15")

.to (s2, 0.3, {
	y1: 300,
	onUpdate: function () {
		spls2.graphics
		.clear()	
		.beginStroke("#0000FF")
		.setStrokeStyle(100)
		.mt(s2.x0, s2.y0).lt(s2.x1, s2.y1)
		.endStroke();
	}
},"-=0.15")

.to (s3, 0.3, {
	y1: 300,
	onUpdate: function () {
		spls3.graphics
		.clear()	
		.beginStroke("#0000FF")
		.setStrokeStyle(100)
		.mt(s3.x0, s3.y0).lt(s3.x1, s3.y1)
		.endStroke();
	}
},"-=0.15")

.to (s4, 0.3, {
	y1: 300,
	onUpdate: function () {
		spls4.graphics
		.clear()	
		.beginStroke("#0000FF")
		.setStrokeStyle(100)
		.mt(s4.x0, s4.y0).lt(s4.x1, s4.y1)
		.endStroke();
	}
},"-=0.15")

.to (polosa_1, 0.1, {
	onUpdate: function () {
		pol_1.graphics
.beginStroke("#ccc")
.setStrokeStyle(7)
.mt(polosa_1.x0, polosa_1.y0).lt(polosa_1.x1, polosa_1.y1)
.endStroke();
	}
})

.to (polosa_2, 0.1, {
	onUpdate: function () {
		pol_2.graphics
.beginStroke("#ccc")
.setStrokeStyle(7)
.mt(polosa_2.x0, polosa_2.y0).lt(polosa_2.x1, polosa_2.y1)
.endStroke();
	}
},"-=0.1")

.to (polosa_3, 0.1, {
	onUpdate: function () {
		pol_3.graphics
.beginStroke("#ccc")
.setStrokeStyle(7)
.mt(polosa_3.x0, polosa_3.y0).lt(polosa_3.x1, polosa_3.y1)
.endStroke();
	}
},"-=0.1")

//полоски чернеют и расползаются
.to (polosa_1, 0.1, {
	x0: 300,
	y0: 200,
	x1: 300,
	y1: 100,
	onUpdate: function () {
		pol_1.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_1.x0, polosa_1.y0).lt(polosa_1.x1, polosa_1.y1)
.endStroke();
	}
})

.to (polosa_2, 0.1, {
	x0: 225,
	y0: 225,
	x1: 175,
	y1: 175,
	onUpdate: function () {
		pol_2.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_2.x0, polosa_2.y0).lt(polosa_2.x1, polosa_2.y1)
.endStroke();
	}
},"-=0.1")

.to (polosa_3, 0.1, {
	x0: 200,
	y0: 300,
	x1: 100,
	y1: 300,
	onUpdate: function () {
		pol_3.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_3.x0, polosa_3.y0).lt(polosa_3.x1, polosa_3.y1)
.endStroke();
	}
},"-=0.1")

//черные полоски расходятся, светлеют 
.to (polosa_1, 0.1, {
	x0: 300,
	y0: 100,
	x1: 300,
	y1: 0,
	onUpdate: function () {
		pol_1.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_1.x0, polosa_1.y0).lt(polosa_1.x1, polosa_1.y1)
.endStroke();
	}
})

.to (polosa_2, 0.1, {
	x0: 175,
	y0: 175,
	x1: 75,
	y1: 75,
	onUpdate: function () {
		pol_2.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_2.x0, polosa_2.y0).lt(polosa_2.x1, polosa_2.y1)
.endStroke();
	}
},"-=0.1")

.to (polosa_3, 0.1, {
	x0: 100,
	y0: 300,
	x1: 0,
	y1: 300,
	onUpdate: function () {
		pol_3.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_3.x0, polosa_3.y0).lt(polosa_3.x1, polosa_3.y1)
.endStroke();
	}
},"-=0.1")

//и исчезают
.to (polosa_1, 0.1, {
	onUpdate: function () {
		pol_1.graphics
		.clear()
.endStroke();
}
})

.to (polosa_2, 0.1,{
	onUpdate: function () {
		pol_2.graphics
		.clear()
.endStroke();
	}
},"-=0.1")

.to (polosa_3, 0.1, {
	onUpdate: function () {
		pol_3.graphics
		.clear()
.endStroke();
	}
},"-=0.1")

//убираем синие и голубые полосы
.to (p1, 0.01, {onUpdate: function () {pls1.graphics.clear();}},"-=0.01")
.to (p2, 0.01, {onUpdate: function () {pls2.graphics.clear();}},"-=0.01")
.to (p3, 0.01, {onUpdate: function () {pls3.graphics.clear();}},"-=0.01")
.to (p4, 0.01, {onUpdate: function () {pls4.graphics.clear();}},"-=0.01")
.to (s1, 0.01, {onUpdate: function () {spls1.graphics.clear();}},"-=0.01")
.to (s2, 0.01, {onUpdate: function () {spls2.graphics.clear();}},"-=0.01")
.to (s3, 0.01, {onUpdate: function () {spls3.graphics.clear();}},"-=0.01")
.to (s4, 0.01, {onUpdate: function () {spls4.graphics.clear();}},"-=0.01")
				
//синий квадрат
.to(kwdr, 0.01, {alpha: 1},"-=0.01")
 
 //поворот и превращение в круг
.to(kwdr, 0.5, {rotation: 90},"-=0.01")

var kw = {
	x: 0,
	y: 0,
	w: 400,
	h: 400,
	r: 0
};

tl.to (kw, 0.5, {
	x: 0,
	y: 0,
	w: 400,
	h: 400,
	r: 200,
	onUpdate: function () {
		kwdr.graphics
		.clear()	
		.f("#0000FF")
		.rr (kw.x, kw.y, kw.w, kw.h, kw.r)
		.endStroke();
	}
},"-=0.5")

.to(kwdr, 0.5, {scaleX:0.5,scaleY:0.5},"-=0.5")
.to(kwdr, 0.5, {scaleX:1,scaleY:1})
.to (kwdr, 0.01, {
	onUpdate: function () {
	kwdr.graphics
	.clear();}})

.to(krug,0.01, {alpha: 1},"-=0.01")

.to(k, 0.3, {
	a: 0,
	b: 0,
	c: 200,
	d: 1.57,
	e: 4.71,
	f: false,
	onUpdate: function () {
		krug.graphics
		.clear()	
		.beginFill("#0000FF")
		.arc(k.a, k.b, k.c, k.d, k.e, k.f)
		.endStroke();
	}
})

.to(k, 0.3, {
	a: 0,
	b: 0,
	c: 200,
	d: 1.57,
	e: 3.14,
	f: false,
	onUpdate: function () {
		krug.graphics
		.clear()	
		.beginFill("#0000FF")
		.arc(k.a, k.b, k.c, k.d, k.e, k.f)
		.lineTo(0, 0)
		.closePath()
		.endStroke();
	}
})


.to(krug_cnt, 0.3, {rotation: 90})	
.to (chtw, 0.1,{alpha: 1})

//четверть раздваивается и превращается в квадрат	
.to(krug_cnt, 0.3, {x:-200 })
.to(krug_cnt, 0.3, {y:-200 })
.to(krug_cnt, 0.3, {rotation: -90})

//полоски из углов
.to (polosa_4, 0.01, {
	onUpdate: function () {
		pol_4.graphics
.beginStroke("#ccc")
.setStrokeStyle(7)
.mt(polosa_4.x0, polosa_4.y0).lt(polosa_4.x1, polosa_4.y1)
.endStroke();
	}
})

.to (polosa_5, 0.01, {
	onUpdate: function () {
		pol_5.graphics
.beginStroke("#ccc")
.setStrokeStyle(7)
.mt(polosa_5.x0, polosa_5.y0).lt(polosa_5.x1, polosa_5.y1)
.endStroke();
	}
},"-=0.01")

.to (polosa_6, 0.01, {
	onUpdate: function () {
		pol_6.graphics
.beginStroke("#ccc")
.setStrokeStyle(7)
.mt(polosa_6.x0, polosa_6.y0).lt(polosa_6.x1, polosa_6.y1)
.endStroke();
	}
},"-=0.01")

.to (polosa_7, 0.01, {
	onUpdate: function () {
		pol_7.graphics
.beginStroke("#ccc")
.setStrokeStyle(4)
.mt(polosa_7.x0, polosa_7.y0).lt(polosa_7.x1, polosa_7.y1)
.endStroke();
	}
},"-=0.01")

.to (polosa_8, 0.01, {
	onUpdate: function () {
		pol_8.graphics
.beginStroke("#ccc")
.setStrokeStyle(4)
.mt(polosa_8.x0, polosa_8.y0).lt(polosa_8.x1, polosa_8.y1)
.endStroke();
	}
},"-=0.01")

.to (polosa_9, 0.01, {
	onUpdate: function () {
		pol_9.graphics
.beginStroke("#ccc")
.setStrokeStyle(4)
.mt(polosa_9.x0, polosa_9.y0).lt(polosa_9.x1, polosa_9.y1)
.endStroke();
	}
},"-=0.01")		

.to(kwadr_cnt, 0.5, {rotation: 180})

//полоски чернеют и расползаются
.to (polosa_4, 0.01, {
	x0: 500,
	y0: 225,
	x1: 500,
	y1: 100,
	onUpdate: function () {
		pol_4.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_4.x0, polosa_4.y0).lt(polosa_4.x1, polosa_4.y1)
.endStroke();
	}
},"-=0.5")

.to (polosa_5, 0.01, {
	x0: 550,
	y0: 250,
	x1: 625,
	y1: 155,
	onUpdate: function () {
		pol_5.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_5.x0, polosa_5.y0).lt(polosa_5.x1, polosa_5.y1)
.endStroke();
	}
},"-=0.5")

.to (polosa_6, 0.01, {
	x0: 575,
	y0: 300,
	x1: 700,
	y1: 300,
	onUpdate: function () {
		pol_6.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_6.x0, polosa_6.y0).lt(polosa_6.x1, polosa_6.y1)
.endStroke();
	}
},"-=0.5")

.to (polosa_7, 0.01, {
	x0: 265,
	y0: 500,
	x1: 150,
	y1: 500,
	onUpdate: function () {
		pol_7.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_7.x0, polosa_7.y0).lt(polosa_7.x1, polosa_7.y1)
.endStroke();
	}
},"-=0.5")

.to (polosa_8, 0.01, {
	x0: 275,
	y0: 525,
	x1: 175,
	y1: 625,
	onUpdate: function () {
		pol_8.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_8.x0, polosa_8.y0).lt(polosa_8.x1, polosa_8.y1)
.endStroke();
	}
},"-=0.5")

.to (polosa_9, 0.01, {
	x0: 300,
	y0: 535,
	x1: 300,
	y1: 650,
	onUpdate: function () {
		pol_9.graphics
		.clear()
.beginStroke("#000")
.setStrokeStyle(5)
.mt(polosa_9.x0, polosa_9.y0).lt(polosa_9.x1, polosa_9.y1)
.endStroke();
	}
},"-=0.5")

//черные полоски расходятся, светлеют 
.to (polosa_4, 0.01, {
	x0: 500,
	y0: 100,
	x1: 500,
	y1: 0,
	onUpdate: function () {
		pol_4.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_4.x0, polosa_4.y0).lt(polosa_4.x1, polosa_4.y1)
.endStroke();
	}
},"-=0.4")

.to (polosa_5, 0.01, {
	x0: 625,
	y0: 155,
	x1: 700,
	y1: 100,
	onUpdate: function () {
		pol_5.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_5.x0, polosa_5.y0).lt(polosa_5.x1, polosa_5.y1)
.endStroke();
	}
},"-=0.4")

.to (polosa_6, 0.01, {
	x0: 650,
	y0: 300,
	x1: 750,
	y1: 300,
	onUpdate: function () {
		pol_6.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_6.x0, polosa_6.y0).lt(polosa_6.x1, polosa_6.y1)
.endStroke();
	}
},"-=0.4")

.to (polosa_7, 0.01, {
	x0: 150,
	y0: 500,
	x1: 75,
	y1: 500,
	onUpdate: function () {
		pol_7.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_7.x0, polosa_7.y0).lt(polosa_7.x1, polosa_7.y1)
.endStroke();
	}
},"-=0.4")

.to (polosa_8, 0.01, {
	x0: 175,
	y0: 625,
	x1: 125,
	y1: 675,
	onUpdate: function () {
		pol_8.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_8.x0, polosa_8.y0).lt(polosa_8.x1, polosa_8.y1)
.endStroke();
	}
},"-=0.4")

.to (polosa_9, 0.01, {
	x0: 300,
	y0: 650,
	x1: 300,
	y1: 725,
	onUpdate: function () {
		pol_9.graphics
		.clear()
.beginStroke("#ccc")
.setStrokeStyle(5)
.mt(polosa_9.x0, polosa_9.y0).lt(polosa_9.x1, polosa_9.y1)
.endStroke();
	}
},"-=0.4")

//и исчезают
.to (polosa_4, 0.01, {
	onUpdate: function () {
		pol_4.graphics
		.clear()
.endStroke();
}
})

.to (polosa_5, 0.01,{
	onUpdate: function () {
		pol_5.graphics
		.clear()
.endStroke();
	}
},"-=0.01")

.to (polosa_6, 0.01, {
	onUpdate: function () {
		pol_6.graphics
		.clear()
.endStroke();
	}
},"-=0.01")

.to (polosa_7, 0.01, {
	onUpdate: function () {
		pol_7.graphics
		.clear()
.endStroke();
}
},"-=0.01")

.to (polosa_8, 0.01,{
	onUpdate: function () {
		pol_8.graphics
		.clear()
.endStroke();
	}
},"-=0.01")

.to (polosa_9, 0.01, {
	onUpdate: function () {
		pol_9.graphics
		.clear()
.endStroke();
	}
},"-=0.01")

.to (chtw, 0.01,{alpha: 0},"-=0.01")
.to (krug, 0.01,{alpha: 0},"-=0.01")

.to (tr_1, 0.01,{alpha: 1},"-=0.01")
.to (tr_2, 0.01,{alpha: 1},"-=0.01")

//кривая
.to(a4, 4, {
	b: 0,
	onUpdate: function () {
		bl.graphics
		.clear()
		.setStrokeStyle(3)
		.beginStroke("#000")
		.setStrokeDash([300, 2500], a4.b)
		.mt(201.641380, 449.418180)
	.bt(253.368630, 450.231080, 305.094760, 451.043970, 338.258420, 427.333990)
	.bt(371.422090, 403.624020, 386.023690, 355.390450, 387.123510, 316.843930)
	.bt(388.223340, 278.297420, 375.821580, 249.435320, 363.398680, 223.816870)
	.bt(350.975780, 198, 338.531080, 175, 314.160940, 158)
	.bt(289.790810, 140, 253.493910, 127, 221.864070, 121)
	.bt(190.234230, 115, 163.271330, 115, 143.740240, 119)
	.bt(124.209140, 123, 112.110570, 133, 101.912640, 144)
	.bt(91.714700, 155, 83.418820, 168, 82.815720, 178)
	.bt(82.212610, 188, 89.640610, 196, 108.922600, 201.875950)
	.bt(128.204590, 207.248770, 159.508150, 210.196650, 180.201360, 216.239290)
	.bt(200.894570, 222.281930, 210.977180, 231.419290, 208.577370, 243.885040)
	.bt(206.177570, 256.350780, 191.295660, 272.144620, 175.054250, 289.910220)
	.bt(158.812850, 307.675810, 141.214660, 327.410210, 118.628800, 347.373560)
	.bt(96.042940, 367.336920, 68.471990, 387.526760, 41.444500, 410.022550)
	.bt(14.417000, 432.518340, -13, 457.318460, -29, 478.316490)
	.bt(-45, 499.314520, -51, 516.508250, -47, 530.383240)
	.bt(-42, 544.258230, -28, 554.811760, -5, 556.971890)
	.bt(19.394930, 559.132030, 51.814730, 552.898580, 83.797350, 548.814550)
	.bt(115.779970, 544.730520, 147.326280, 542.795860, 168.276400, 543.030930)
	.bt(189.226530, 543.266000, 199.582450, 545.670770, 227.401850, 552.636460)
	.bt(255.221260, 559.602160, 300.506630, 571.129400, 335.022580, 578.805400)
	.bt(369.538530, 586.481400, 393.286360, 590.306510, 415.353230, 581.266700)
	.bt(437.420090, 572.226890, 457.806620, 550.321970, 474.512350, 528.098300)
	.bt(491.218080, 505.874640, 504.244400, 483.330490, 519.125500, 456.763150)
	.bt(534.006600, 430.195810, 550.743700, 399.603160, 567.480000, 369.011880)
	.endStroke();
	}
},"-=0.1")

.to(bl, 0.5, {alpha: 0},"-=2.5")
.to(tr_cnt_1, 0.5, {rotation: -150, x: 480},"-=3.2")
.to(tr_cnt_2, 0.5, {rotation: 100, x: 510},"-=3.2")

.to(tr_cnt_1, 0.5, {y: 1200},"-=3")
.to(tr_cnt_2, 0.5, {y: 1200},"-=3")

.to (kr, 0.5, {
	x: 500,
	y:500,
	r:200,
	onUpdate: function () {
		krg.graphics
		//.clear()	
		
		.dc(kr.x, kr.y, kr.r)
		.endStroke();
	}
},"-=3")

.to (pst, 0.1, {
	x: 500,
	y: 500,
	r:250,
	l: 24,
	s: 0.1,
	a: -90,
	onUpdate: function () {
		star.graphics
		.dp(pst.x, pst.y, pst.r, pst.l, pst.s, pst.a)
		.endStroke();
	}
},"-=2")

.to (pst, 0.1, {
	x: 500,
	y: 500,
	r: 220,
	l: 24,
	s: 0.1,
	a: -90,
	onUpdate: function () {
		star.graphics
		.clear()
.f("#000")
.dp(pst.x, pst.y, pst.r, pst.l, pst.s, pst.a)
		.endStroke();
	}
},"-=1.9")

.to(txt_1, 0.1 ,{y: 455},"-=1.8")
.to(txt_2, 0.1 ,{y: 455},"-=1.7")
.to(txt_3, 0.1 ,{y: 455},"-=1.6")
.to(txt_4, 0.1 ,{y: 455},"-=1.5")
.to(txt_5, 0.1 ,{y: 455},"-=1.4")
.to(txt_6, 0.1 ,{y: 455},"-=1.3")
.to(txt_7, 0.1 ,{y: 455},"-=1.2")
.to(txt_8, 0.1 ,{y: 455},"-=1.1")




TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(60);
