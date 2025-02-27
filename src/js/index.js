document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

  // Активируем первый элемент при загрузке страницы
  if (faqItems.length > 0) {
    faqItems[0].classList.add("active");
  }

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq__tab-header");

    header.addEventListener("click", () => {
      // Проверяем, активен ли текущий элемент
      const isActive = item.classList.contains("active");

      // Закрываем все элементы
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // Если элемент не был активен, открываем его
      // Если был активен - просто закрываем (ничего не добавляем)
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
