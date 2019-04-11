window.addEventListener("load", function () {
/////////////////////
/////карта shops/////
/////////////////////
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
/// группа ///
	var group = new YMaps.GeoObjectCollection();
	group.add(createPlacemark(new YMaps.GeoPoint(30.219191, 55.206863), 'г. Витебск, ул. Гагарина, 11','Магазин одежды «Birgitta». Розничная торговля женской одеждой. Оптовая торговля.'));
	group.add(createPlacemark(new YMaps.GeoPoint(30.203812, 55.191269),'г. Витебск, Ул. Ленина 26А, Торговый центр «Марко-Сити»,  Уровень 0','Фирменный магазин одежды «Birgitta». Розничная торговля женской одеждой.'));
	group.add(createPlacemark(new YMaps.GeoPoint(29.224253, 53.141163),'г. Бобруйск, ул. Советская, 95' ,'Фирменный магазин одежды «Birgitta».  Розничная торговля женской одеждой.'));
	map.addOverlay(group);
// Создание управляющего элемента "Путеводитель по магазинам"
  map.addControl(new OfficeNavigator(group));
// Функия создания метки
  function createPlacemark (geoPoint, name, description) {
      var placemark = new YMaps.Placemark(geoPoint);
      placemark.name = name;
      placemark.description = description;
      return placemark;
  }
// Управляющий элемент "Путеводитель по магазинам", реализиует интерфейс YMaps.IControl
  function OfficeNavigator (shops) {
    // Добавление на карту
    this.onAddToMap = function (map, position) {
    this.container = YMaps.jQuery("<ul></ul>");
    this.map = map;
    this.position = position || new YMaps.ControlPosition(YMaps.ControlPosition.TOP_RIGHT, new YMaps.Size(10, 10));
// Выставление необходимых CSS-свойств
    this.container.css({            
      background: 'rgba(250,250,250, 0)',
      listStyle: 'none',
      padding: '10% 5%',
      margin: 0,
		});
// Формирование списка офисов
    this._generateList();
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
      shops.forEach(function (obj) {
          // Создание ссылки на объект
          var li = YMaps.jQuery("<li><a href=\"#\">" + obj.name + "</a></li>"),
          a = li.find("a"); 
          a.css({
            textDecoration: 'none',
            color: '#000',
            fontFamily: 'eurofurence light'                
          }),
          li.css({
            marginTop: '7%'
          }),
          li.hover(function(){
            li.css({backgroundColor: "rgba(250,250,250)"});
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
// Добавление ссылки на объект в общий список
li.appendTo(_this.container);
     });
    };
  }
});

}, false);

