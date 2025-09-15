
    // Координаты (Москва, ул. Липецкая 40)
    var coordinates = [55.730568, 37.429006]; 

    // Создаём карту и центрируем на наших координатах
    var map = L.map('map').setView(coordinates, 15); 

    // Добавляем слой OpenStreetMap (бесплатный)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Создаём кастомную иконку с логотипом
    var customIcon = L.icon({
        iconUrl: 'img/logo.jpg',  // Путь к иконке (замени на свой)
        iconSize: [50, 50],  // Размер иконки
        iconAnchor: [25, 50],  // Точка, где иконка будет "стоять" на карте
        popupAnchor: [0, -50]  // Сдвиг всплывающего окна (чтобы не закрывало иконку)
    });

    // Добавляем метку с кастомной иконкой
    L.marker(coordinates, { icon: customIcon }).addTo(map)
        .bindPopup('📍 Наш офис: Москва, ул. Коцюбинского 8 К 1')
        .openPopup();