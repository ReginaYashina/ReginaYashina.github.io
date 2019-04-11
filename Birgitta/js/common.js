window.addEventListener("load", function () {
var body = document.body,
    html = document.documentElement;

var line = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var line_height = line + line*0.75/100;






console.log(line_height);

var tl = new TimelineMax ({delay:1});
tl.to ("#L_1", 1, {height: line_height})//линия сверху-вниз
.to ("#L_2", 1, {width: 3000})//линия слева-направо
.to(".top-nav",1, {opacity: 1, ease: Power2.easeIn},"-=2")
.to(".contacts-bcg", 1, {opacity: 1, ease: Power2.easeIn},"-=1")

 

















}, false);

