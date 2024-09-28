const data = [
  {
    id: 1,
    img: './img/imgi20.png',
    description: 'Seedra Cilantro Seeds for Planting Indoor and Outdoor',
    price: '$12.56',
  },
  {
    id: 2,
    img: './img/imgi21.png',
    description: 'SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting',
    price: '$12.56',
  },
  {
    id: 3,
    img: './img/imgi22.png',
    description: 'SEEDRA Spinach Seeds for Indoor and Outdoor Planting',
    price: '$12.56',
  },
  {
    id: 4,
    img: './img/imgi20.png',
    description: 'Seedra Cilantro Seeds for Planting Indoor and Outdoor',
    price: '$12.56',
  },
  {
    id: 5,
    img: './img/imgi21.png',
    description: 'SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting',
    price: '$12.56',
  },
  {
    id: 6,
    img: './img/imgi22.png',
    description: 'SEEDRA Spinach Seeds for Indoor and Outdoor Planting',
    price: '$12.56',
  },
];

let cart = []; // Массив для корзины
let favorites = []; // Массив для избранного

// Функция для отображения данных
function showData(data) {
  const root = document.querySelector('#root');

  data.forEach(item => {
    const listItem = document.createElement('div');
    listItem.innerHTML = `
      <div class='w-[350px] border-2 border-[#EFEFEF] rounded-[8px] mt-[30px] relative p-[20px] hover:shadow-lg'>
        <img src=${item.img} alt="Product Image" id='product-${item.id}' class='${favorites.some(fav => fav.id === item.id) ? 'favorite-item' : ''}' style='cursor:pointer;'>
        <p>${item.description}</p>
        <p>${item.price}</p>
        <div class='w-[48px] h-[48px] rounded-[8px] border border-[#EFEFEF] flex justify-center items-center absolute bottom-[15px] right-[15px] cart-btn'>
          <img src='./img/img6.png' class='cursor-pointer' data-id='${item.id}' alt="Add to Cart">
        </div>
        <div class='w-[48px] h-[48px] rounded-[50%] bg-white border border-[#EFEFEF] flex justify-center items-center absolute top-[15px] right-[15px]'>
          <img src='./img/imgi23.png' class='cursor-pointer' data-id='${item.id}' alt="Add to Favorites">
        </div>
      </div>
    `;

    root.appendChild(listItem);
  });

  // Добавляем обработчики для перехода на detail.html
  data.forEach(item => {
    const imgElement = document.getElementById(`product-${item.id}`);
    if (imgElement) {
      imgElement.addEventListener('click', function () {
        window.location.href = `./pages/AllProducts/detail/detail.html?id=${item.id}`; // Переход на страницу с передачей id
      });
    }
  });
}
 // Добавляем обработчик события на элемент "ABOUT SEEDRA"
const aboutSeedraElement = document.getElementById('about-seedra');
if (aboutSeedraElement) {
  aboutSeedraElement.addEventListener('click', function () {
    window.location.href = './pages/AllProducts/about/about.html'; // Переход на страницу about.html
  });
}

// Функция для добавления товара в корзину
function addToCart(itemId) {
  const item = data.find(product => product.id === itemId);
  if (item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 0) + 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    updateCartCount(); // Обновляем счётчик
  }
}

// Функция для добавления товара в избранное
function addToFavorites(itemId) {
  const item = data.find(product => product.id === itemId);
  if (item) {
    const existingFavoriteIndex = favorites.findIndex(favItem => favItem.id === itemId);
    if (existingFavoriteIndex === -1) {
      favorites.push(item);
    } else {
      favorites.splice(existingFavoriteIndex, 1); // Удаление из избранного
    }
    updateFavoritesCount(); // Обновляем счётчик избранного
    updateUI(); // Обновляем интерфейс
  }
}

// Функция для обновления счётчика корзины
function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  cartCount.textContent = cart.reduce((total, item) => total + (item.quantity || 0), 0);
}

// Функция для обновления счётчика избранного
function updateFavoritesCount() {
  const favoritesCount = document.querySelector('.favorites-count');
  favoritesCount.textContent = favorites.length;
}

// Функция для обновления UI
function updateUI() {
  const images = document.querySelectorAll('#root img[src*="imgi"]');
  images.forEach(img => {
    const itemId = parseInt(img.parentElement.querySelector('img.cursor-pointer').getAttribute('data-id'));
    if (favorites.some(fav => fav.id === itemId)) {
      img.classList.add('favorite-item');
    } else {
      img.classList.remove('favorite-item');
    }
  });
}

// Добавляем обработчики событий при загрузке страницы
window.onload = function () {
  showData(data);

  const root = document.querySelector('#root');
  root.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('cursor-pointer')) {
      const itemId = parseInt(event.target.getAttribute('data-id'));
      if (!isNaN(itemId)) {
        if (event.target.src.includes('img6.png')) {
          addToCart(itemId);
        } else if (event.target.src.includes('imgi23.png')) {
          addToFavorites(itemId);
        }
      }
    }
  });
};
let carts = JSON.parse(localStorage.getItem('cart')) || []; // Массив для корзины сохраняем в localStorage

// Функция для добавления товара в корзину
function addToCart(itemId) {
  const item = data.find(product => product.id === itemId);
  if (item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 0) + 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем корзину в localStorage
    updateCartCount(); // Обновляем счётчик
  }
}

// Функция для отображения товаров в корзине на странице корзины
function showCart() {
  const cartItemsContainer = document.querySelector('#cart-items');
  const cartTotal = document.querySelector('#cart-total');

  cartItemsContainer.innerHTML = ''; // Очищаем существующие элементы

  let total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <div class='cart-item'>
        <p>${item.description}</p>
        <p>Количество: <button class="decrease" data-id="${item.id}">-</button> ${item.quantity} <button class="increase" data-id="${item.id}">+</button></p>
        <p>Цена: $${(item.price * item.quantity).toFixed(2)}</p>
        <button class="remove-item" data-id="${item.id}">Удалить</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);

    total += item.price * item.quantity;
  });

  cartTotal.textContent = `Итого: $${total.toFixed(2)}`;

  // Добавляем обработчики для увеличения, уменьшения и удаления товаров
  document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', (e) => {
      const itemId = parseInt(e.target.getAttribute('data-id'));
      changeQuantity(itemId, 1);
    });
  });

  document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', (e) => {
      const itemId = parseInt(e.target.getAttribute('data-id'));
      changeQuantity(itemId, -1);
    });
  });

  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', (e) => {
      const itemId = parseInt(e.target.getAttribute('data-id'));
      removeFromCart(itemId);
    });
  });
}

// Функция для изменения количества товаров в корзине
function changeQuantity(itemId, change) {
  const item = cart.find(cartItem => cartItem.id === itemId);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(itemId);
    } else {
      localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем обновленную корзину
      showCart(); // Обновляем страницу корзины
      updateCartCount(); // Обновляем счетчик товаров в корзине
    }
  }
}

// Функция для удаления товара из корзины
function removeFromCart(itemId) {
  cart = cart.filter(cartItem => cartItem.id !== itemId);
  localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем обновленную корзину
  showCart(); // Обновляем страницу корзины
  updateCartCount(); // Обновляем счётчик товаров в корзине
}

// Функция для обновления счётчика корзины
function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  cartCount.textContent = cart.reduce((total, item) => total + (item.quantity || 0), 0);
}

// Переход на страницу корзины
document.querySelector('.cart-icon').addEventListener('click', function () {
  window.location.href = './pages/Korzinna/index.html'; // Перенаправление на страницу корзины
});
let currentSlideIndex = 0;

// Функция для отображения слайдов
function showSlides() {
    const carousel = document.getElementById('carousel');
    const totalSlides = document.querySelectorAll('.dot').length;

    // Переключаем карусель
    carousel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Обновление активных индикаторов
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === currentSlideIndex) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-gray-600');
        } else {
            dot.classList.remove('bg-gray-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

// Устанавливаем текущий слайд
function currentSlide(n) {
    const totalSlides = document.querySelectorAll('.dot').length;
    currentSlideIndex = n - 1;
    if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;
    showSlides();
}

// Показ слайда при загрузке
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});





