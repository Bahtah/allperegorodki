document.addEventListener("DOMContentLoaded", function() {
    let script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Перегородки в Москве",
        "image": "https://allperegorodki.ru/img/logo.webp",
        "url": "https://allperegorodki.ru",
        "telephone": "+7 (495) 123-45-67",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Липецкая 40",
            "addressLocality": "Москва",
            "addressCountry": "RU"
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "description": "Изготовление и установка офисных и домашних перегородок в Москве. Более 12 лет опыта.",
        "email": "interner0206@gmail.com",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 55.730568,
            "longitude": 37.429006
        },
        "sameAs": [
            "https://vk.com/peregorodki_moscow",
            "https://instagram.com/peregorodki_moscow",
            "https://t.me/peregorodki_moscow"
        ]
    });
    document.head.appendChild(script);
});
