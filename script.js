     // Простой поиск
        document.querySelector('.search-btn').addEventListener('click', function() {
            const searchTerm = document.querySelector('.search-input').value;
            if (searchTerm.trim()) {
                alert(`Выполняется поиск: "${searchTerm}"`);
            } else {
                alert('Введите запрос для поиска');
            }
        });
        
        // Обработка нажатия клавиши Enter в поле поиска
        document.querySelector('.search-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.querySelector('.search-btn').click();
            }
        });
        
        // Обработка кнопок навигации
        document.querySelectorAll('.nav-btn').forEach(button => {
            button.addEventListener('click', function() {
                const btnText = this.textContent;
                if (btnText.includes('Каталог')) {
                    alert('Открывается каталог ноутбуков');
                } else if (btnText.includes('Корзина')) {
                    alert('Переход в корзину покупок');
                }
            });
        });