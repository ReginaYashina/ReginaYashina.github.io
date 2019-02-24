//длина вертикальной линии
var about = document.querySelectorAll(".about")[0];
var body = document.querySelectorAll("body")[0];
ah = window.getComputedStyle(about).height; //высота блока .about (строковое значение)
var line_height_nmbr = parseInt(ah); //высота блока .about (числовое значение)
bd = window.getComputedStyle(body).height; //высота блока body (строковое значение)
var body_height_number = parseInt(bd); //высота блока body (числовое значение)
var line_height = line_height_nmbr + body_height_number/100*11; //высота вертикальной линии
 console.log (bd);
var tl = new TimelineMax ({delay:1});
tl.to ("#L_1", 1, {height: line_height})//линия сверху-вниз
.to ("#L_2", 1, {width: 3000})//линия слева-направо
.to(".about-header",1, {opacity: 1, ease: Power2.easeIn},"-=2")
.to(".about", 1, {opacity: 1, ease: Power2.easeIn},"-=1")