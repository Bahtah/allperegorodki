document.addEventListener('DOMContentLoaded', function () {
    // Инициализация EmailJS
    emailjs.init('lRKjRzakGdg2KQHXm');

    let contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Предотвращаем стандартную отправку формы

            let userName = contactForm.querySelector('input[name="name"]').value.trim();
            let userEmail = contactForm.querySelector('input[name="email"]').value.trim();
            let userMessage = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!userName || !userEmail || !userMessage) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }

            // Отправляем данные через EmailJS
            emailjs.send('service_w3xkkkf', 'template_ol549mo', {
                name: userName,
                email: userEmail,
                message: userMessage
            })
            .then(function () {
                alert('Ваше сообщение отправлено! Мы свяжемся с вами.');
                console.log('Email успешно отправлен');
                contactForm.reset();
            }, function (error) {
                alert('Ошибка при отправке сообщения: ' + error.text);
                console.error('Ошибка EmailJS:', error);
            });
        });
    }
});