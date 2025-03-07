document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

  // Активируем первый элемент при загрузке страницы
  if (faqItems.length > 0) {
    faqItems[0].classList.add("active");
  }

  faqItems.forEach((item) => {
    // Получаем оба заголовка - для мобильной и полной версии
    const headerFull = item.querySelector(".faq__tab-header-full");
    const headerMini = item.querySelector(".faq__tab-header-mini");

    // Функция переключения для элемента
    const toggleItem = () => {
      // Проверяем, активен ли текущий элемент
      const isActive = item.classList.contains("active");

      // Закрываем все элементы
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // Если элемент не был активен, открываем его
      if (!isActive) {
        item.classList.add("active");
      }
    };

    // Добавляем слушатель события на оба заголовка
    if (headerFull) {
      headerFull.addEventListener("click", toggleItem);
    }

    if (headerMini) {
      headerMini.addEventListener("click", toggleItem);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".header__burger");
  const closeBtn = document.querySelector(".mobile-menu__close");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const mobileLinks = document.querySelectorAll(".mobile-menu__link");

  burgerBtn.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", closeMenu);

  overlay.addEventListener("click", closeMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});
