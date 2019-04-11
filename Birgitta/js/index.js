window.addEventListener("load", function () {
document.getElementById('logo').src="img/logo48forweb.gif";

 
var tl_main = new TimelineMax ({delay:1});
tl_main.to(".maintext",2, {opacity: 1, ease: Power2.easeIn})
.to(".name", 3, {opacity: 1, ease: Power2.easeIn},"-=1")
.to(".name", 2, {textShadow: "1px 1px 40px #000", ease: Power2.easeIn},"-=3")
.to(".name", 2, {textShadow: "none", ease: Power2.easeIn})
.to(".main-nav", 2, {opacity: 1, ease: Power2.easeIn},"-=5")
.to(".motto", 2, {opacity: 1, ease: Power2.easeIn},"-=1")
.to(".main-down", 2, {opacity: 1, ease: Power2.easeIn},"-=2")
















}, false);

