window.addEventListener("load", function () {
//длина вертикальной линии
//var about = document.querySelectorAll(".about")[0];
//var foot = document.querySelectorAll(".about-foot")[0];
//var body = document.querySelectorAll("body")[0];
//ah = window.getComputedStyle(about).height; //высота блока .about (строковое значение)
//var about_height_nmbr = parseInt(ah); //высота блока .about (числовое значение)
//var body_height_nmbr = parseInt(bd); //высота блока body (числовое значение)
//fh = window.getComputedStyle(foot).height; //высота блока footer (строковое значение)
//var footer_height_nmbr = parseInt(fh); //высота блока footer (числовое значение)
//var line_height = document.body.scrollHeight;//высота вертикальной линии ????????? 

var body = document.body,
    html = document.documentElement;

var line = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var line_height = line + line*0.75/100;
console.log(line_height);

var tl = new TimelineMax ({delay:1});
tl.to ("#L_1", 1, {height: line_height})//линия сверху-вниз
.to ("#L_2", 1, {width: 3000})//линия слева-направо
.to(".about-header",1, {opacity: 1, ease: Power2.easeIn},"-=2")
.to(".about", 1, {opacity: 1, ease: Power2.easeIn},"-=1")

 // console.log (about_height_nmbr);
 // console.log (body_height_nmbr);
 // console.log (footer_height_nmbr);
 // console.log (line_height);
 


///////////////
/////карта/////
///////////////
YMaps.jQuery(function () {
// Создает экземпляр карты и привязывает его к созданному контейнеру
  var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
// Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
  map.setCenter(new YMaps.GeoPoint(28, 53.6), 7);
//добавляет элементы управления   	
  map.addControl(new YMaps.TypeControl());
	map.addControl(new YMaps.ToolBar());
	map.addControl(new YMaps.Zoom());
	map.addControl(new YMaps.ScaleLine());
	//map.enableScrollZoom(); //масштабирование колесиком мыши
// // Создает метку 
// 	var gagarina = new YMaps.Placemark(new YMaps.GeoPoint(30.219191, 55.206863));
// // Устанавливает содержимое балуна
// 	gagarina.name = "Магазин одежды «Birgitta»";
// 	gagarina.description = "Розничная торговля женской одеждой. Оптовая торговля.";
// // Добавляет метку на карту
// 	map.addOverlay(gagarina); 

// 	var marco_city = new YMaps.Placemark(new YMaps.GeoPoint(30.203812, 55.191269));
// 	marco_city.name = "Фирменный магазин одежды «Birgitta»";
// 	marco_city.description = "Розничная торговля женской одеждой.";
// 	map.addOverlay(marco_city); 
   

// 	var bobruisk = new YMaps.Placemark(new YMaps.GeoPoint(29.224253, 53.141163));
// 	bobruisk.name = "Фирменный магазин одежды «Birgitta»";
// 	bobruisk.description = "Розничная торговля женской одеждой.";
// 	map.addOverlay(bobruisk); 

/// группа ///
var group = new YMaps.GeoObjectCollection();
group.add(createPlacemark(new YMaps.GeoPoint(30.219191, 55.206863), 'Магазин одежды «Birgitta»', 'г. Витебск, ул. Гагарина, 11. Розничная торговля женской одеждой. Оптовая торговля.'));
group.add(createPlacemark(new YMaps.GeoPoint(30.203812, 55.191269), 'Фирменный магазин одежды «Birgitta»', 'г. Витебск, Ул. Ленина 26А, Торговый центр «Марко-Сити»,  Уровень 0. Розничная торговля женской одеждой.'));
group.add(createPlacemark(new YMaps.GeoPoint(29.224253, 53.141163), 'Фирменный магазин одежды «Birgitta»', 'г. Бобруйск, ул. Советская, 95. Розничная торговля женской одеждой.'));
map.addOverlay(group);

// Создание управляющего элемента "Путеводитель по офисам"
            map.addControl(new OfficeNavigator(group));
       

        // Функия создания метки
        function createPlacemark (geoPoint, name, description) {
            var placemark = new YMaps.Placemark(geoPoint);
            placemark.name = name;
            placemark.description = description;

            return placemark;
        }

        // Управляющий элемент "Путеводитель по офисам", реализиует интерфейс YMaps.IControl
        function OfficeNavigator (offices) {

            // Добавление на карту
            this.onAddToMap = function (map, position) {
                    this.container = YMaps.jQuery("<ul></ul>");
                    this.map = map;
                    this.position = position || new YMaps.ControlPosition(YMaps.ControlPosition.TOP_RIGHT, new YMaps.Size(10, 10));

                    // Выставление необходимых CSS-свойств
                    this.container.css({            
                        //zIndex: YMaps.ZIndex.CONTROL,
                        background: 'rgba(250,250,250, 0)',
                        listStyle: 'none',
                        padding: '10% 5%',
                        margin: 0,

                    });
                    
                    
                    // Формирование списка офисов
                    this._generateList();
                    
                    // Применение позиции к управляющему элементу
                    //this.position.apply(this.container);
                    
                    // Добавление на карту
                    this.container.appendTo('#shops');
            }

            // Удаление с карты
            this.onRemoveFromMap = function () {
                this.container.remove();
                this.container = this.map = null;
            };

            // Пока "летим" игнорируем клики по ссылкам
            this.isFlying = 0;

            // Формирование списка офисов
            this._generateList = function () {
                var _this = this;
                
                // Для каждого объекта вызываем функцию-обработчик
                offices.forEach(function (obj) {
                    // Создание ссылки на объект
                    var li = YMaps.jQuery("<li><a href=\"#\">" + obj.name + "</a></li>"),
                        a = li.find("a"); 
                        a.css({
                        	textDecoration: 'none',
                        	color: '#000',
                        	fontFamily: 'eurofurence light',                     
                        }),

                        li.css({
                        	marginTop: '7%',
                        }),

                        li.hover(function(){
                        	li.css({backgroundColor: "rgba(250,250,250, 1)"});
                        },
                        function (){
                        	li.css({backgroundColor: "rgba(250,250,250, 0)"});
                        });
                    
                    // Создание обработчика щелчка по ссылке
                    li.bind("click", function () {
                        if (!_this.isFlying) {
                            _this.isFlying = 1;
                            _this.map.panTo(obj.getGeoPoint(), {
                                flying: 1,
                                callback: function () {
                                    obj.openBalloon();
                                    _this.isFlying = 0;
                                }
                            });
                        }
                        return false;
                    });
                    
                    // // Слушатели событий на открытие и закрытие балуна у объекта
                    // YMaps.Events.observe(obj, obj.Events.BalloonOpen, function () {
                    //     //a.css("text-decoration", "none");
                    //     li.css({backgroundColor: "pink"})

                    // });
                    
                    // YMaps.Events.observe(obj, obj.Events.BalloonClose, function () {
                    //     li.css({backgroundColor: "rgba(250,250,250, 0)"})

                    // });
                    
                    // Добавление ссылки на объект в общий список
                    li.appendTo(_this.container);
                });
            };
        }

















































});
}, false);

