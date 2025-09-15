document.addEventListener("DOMContentLoaded", function() {
  // Получаем все кнопки и модальное окно
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close');
  const modalImg = modal.querySelector('.modal-image img');
  const modalTitle = modal.querySelector('.modal-text h2');
  
  // Для каждой карточки добавляем обработчик
  cards.forEach(card => {
      const btn = card.querySelector('.btn');
      const imgSrc = card.querySelector('img').src;
      const title = card.querySelector('.card-title').textContent;
      const price = card.querySelector('.price').textContent;
      const time = card.querySelector('.install-time').textContent;
      
      btn.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Заполняем модальное окно данными из карточки
          modalImg.src = imgSrc;
          modalImg.alt = title;
          modalTitle.textContent = title;
          
          // Обновляем информацию о цене и сроках
          const highlights = modal.querySelector('.modal-highlights');
          highlights.innerHTML = `
              <p><i class="icon">💰</i> Цена от <strong>${price} руб./м²</strong></p>
              <p><i class="icon">⏱</i> Монтаж за <strong>${time}</strong></p>
              <p><i class="icon">🛠</i> Гарантия <strong>5 лет</strong></p>
          `;
          
          // Показываем модальное окно
          modal.style.display = 'block';
      });
  });
  
  // Закрытие модального окна
  closeBtn.onclick = function() {
      modal.style.display = 'none';
  };
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  };
});