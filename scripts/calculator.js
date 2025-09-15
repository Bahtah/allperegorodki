document.addEventListener('DOMContentLoaded', function () {
    // Инициализация EmailJS
    emailjs.init('lRKjRzakGdg2KQHXm');

    // Калькулятор
    document.getElementById('calculateBtn').addEventListener('click', function () {
        let length = parseFloat(document.getElementById('length').value);
        let width = parseFloat(document.getElementById('width').value);
        let materialSelect = document.getElementById('material');
        let material = materialSelect.options[materialSelect.selectedIndex].text;
        let pricePerSqMeter = parseFloat(materialSelect.options[materialSelect.selectedIndex].getAttribute('data-price'));

        if (!length || !width || length <= 0 || width <= 0) {
            alert('Пожалуйста, введите корректные значения!');
            return;
        }

        let price = length * width * pricePerSqMeter;
        document.getElementById('price').textContent = price.toFixed(2);
        document.getElementById('result').style.display = 'block';
        document.getElementById('sendEmailBtn').style.display = 'inline-block';
    });

    // Показ формы для отправки email
    document.getElementById('sendEmailBtn').addEventListener('click', function () {
        let length = parseFloat(document.getElementById('length').value);
        let width = parseFloat(document.getElementById('width').value);
        let materialSelect = document.getElementById('material');
        let material = materialSelect.options[materialSelect.selectedIndex].text;
        let pricePerSqMeter = parseFloat(materialSelect.options[materialSelect.selectedIndex].getAttribute('data-price'));
        let price = length * width * pricePerSqMeter;

        let emailMessage = `📊 Данные расчета:\n\nМатериал: ${material}\nДлина: ${length} м\nШирина: ${width} м\nСтоимость: ${price.toFixed(2)} руб.`;

        document.getElementById('emailMessage').value = emailMessage;
        document.getElementById('emailForm').style.display = 'block';

        // Прокрутка к форме
        document.getElementById('emailForm').scrollIntoView({ behavior: 'smooth' });
    });

    // Отправка email через EmailJS
    document.getElementById('emailForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let userName = document.getElementById('userName').value.trim();
        let userEmail = document.getElementById('userEmail').value.trim();
        let userPhone = document.getElementById('userPhone').value.trim();

        if (!userName || !userEmail || !userPhone) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        emailjs.sendForm('service_w3xkkkf', 'template_kl3wrl5', this)
            .then(function () {
                alert('Вы успешно отправили письмо! Мы вам скоро перезвоним!');
                console.log('Email успешно отправлен');
                document.getElementById('emailForm').reset();
                document.getElementById('emailForm').style.display = 'none'; // Скрываем форму после отправки
                document.getElementById('result').style.display = 'none';
                document.getElementById('sendEmailBtn').style.display = 'none';
            }, function (error) {
                alert('Ошибка при отправке email: ' + error.text);
                console.error('Ошибка EmailJS:', error);
            });
    });
});

