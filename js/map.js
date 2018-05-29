ymaps.ready(function(){
    var map = new ymaps.Map("custom_map", {
            center: [55.81507878952877,38.98680249999998],
            zoom: 7.5            
        });
    map.behaviors
        // Отключаем часть включенных по умолчанию поведений:
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        .disable(['drag', 'rightMouseButtonMagnifier'])
        .disable('scrollZoom');      
    // Изменяем свойство поведения с помощью опции:
    // изменение масштаба колесом прокрутки будет происходить медленно,
    // на 1/2 уровня масштабирования в секунду.
    // map.options.set('scrollZoomSpeed', 0.5);
    var sichi = new ymaps.Placemark(
        [55.30064414570878,39.980074499999986], {
            // hintContent: 'Московская область, городской округ Шатура, деревня Сычи',
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],           
            iconLayout: 'default#image'
        }
    );

        var aksenovo = new ymaps.Placemark(
        [55.67669687297133,38.24293449999995], {
            // hintContent: 'Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново',
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],                   
            iconLayout: 'default#image'
        }
    );

    var zagornovo = new ymaps.Placemark(
        [55.53230150728862,38.32682349999995], {
            // hintContent: 'Московская область, Раменский район, сельское поселение Сафоновское, село Загорново, Советская улица',
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],                   
            iconLayout: 'default#image'
        }
    );


    var zhirovo = new ymaps.Placemark(
        [55.596579186574324,38.525795999999985], {
            // hintContent: 'Московская область, Раменский район, сельское поселение Новохаритоновское, деревня Жирово',
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],                   
            iconLayout: 'default#image'
        }
    );

    var chirikovo = new ymaps.Placemark(
        [55.3951820633286,37.23516399999998], {
            // hintContent: 'Москва, поселение Краснопахорское, деревня Чириково',
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],                   
            iconLayout: 'default#image'
        }
    );

    var cholmi = new ymaps.Placemark(
        [56.09773117685886,37.2703375], {
            // hintContent: 'Московская область, Солнечногорский район, деревня Холмы',
        },
        {
           iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],                 
            iconLayout: 'default#image'
        }
    );

    var kochina_gora = new ymaps.Placemark(
        [55.41275809821715,38.17040449999995], {
            // hintContent: 'Московская область, Раменский район, сельское поселение Константиновское, деревня Кочина Гора',
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],                    
            iconLayout: 'default#image'
        }
    );  

    var bulatnikovo = new ymaps.Placemark(
        [55.560555522032516,37.62538349999993], {
            // hintContent: 'Московская область, Ленинский район, деревня Жабкино, жилой квартал Булатниково',
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],                   
            iconLayout: 'default#image'
        }
    );

    var yasnoe = new ymaps.Placemark(
        [56.49909359123222,36.92874], {
            // hintContent: 'Московская область, городской округ Клин, СНТ Ясное'
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],        
            iconLayout: 'default#image'
        }
    );

    var yasnaya_polyna = new ymaps.Placemark(
        [55.345856801130104,38.34416099999997], {
            // hintContent: 'Московская область, Раменский район, сельское поселение Рыболовское, коттеджный посёлок Ясная Поляна',
        },
        {
            iconImageHref: 'img/blacklogo.png', 
            iconImageSize: [40, 40],                    
            iconLayout: 'default#image'
        }
    );

    map.geoObjects
    .add(sichi)
    .add(aksenovo)
    .add(zagornovo)
    .add(zhirovo)
    .add(chirikovo)
    .add(cholmi)
    .add(kochina_gora)
    .add(bulatnikovo)
    .add(yasnoe)
    .add(yasnaya_polyna);

 zhirovo.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/1.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     });
    
  
sichi.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/2.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     }); 

aksenovo.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/3.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     }); 
 zagornovo.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/4.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     });
cholmi.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/5.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     }); 

bulatnikovo.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/6.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     }); 

 chirikovo.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/7.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     });   
  
kochina_gora.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/8.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     }); 

yasnoe.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/9.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     }); 
yasnaya_polyna.events.add('mouseenter', function () {
       var a= document.getElementById('map_content');
       a.innerHTML= '<img class="map_picture" src="jobs/5.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
     }); 


});






