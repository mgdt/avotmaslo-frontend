<script setup>
import { useCategoriesStore } from "@/stores/categories";
import { onMounted } from "vue";

const categoriesStore = useCategoriesStore();

onMounted(async () => {
  await categoriesStore.fetchCategoreis();
});
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__col">
        <img src="../assets/img/logo.png" alt="" class="footer__logo" />
        <div class="footer__info">
          <p class="footer__copyright">© 2022 Все права защищены</p>
          <p class="footer__author">
            Разработано в
            <a target="_blank" href="https://zaytsevstudio.ru/"
              >Студии Зайцева</a
            >
          </p>
        </div>
      </div>
      <div class="footer__col">
        <div class="footer__col-name">Пн-Пт: 09:00 до 18:00</div>
        <div class="footer__col-big">
          <img src="../assets/img/phone-icon.svg" alt="" />
          <a href="tel:88003503605">8 (800) 350-36-05</a>
        </div>
        <div class="footer__col-links">
          <RouterLink to="/blog" class="footer__col-link">Блог</RouterLink>
          <RouterLink to="/delivery" class="footer__col-link"
            >Доставка и оплата</RouterLink
          >
          <RouterLink to="/contacts" class="footer__col-link"
            >Контакты</RouterLink
          >
          <RouterLink to="/faq" class="footer__col-link"
            >Вопросы и ответы</RouterLink
          >
          <RouterLink to="/" class="footer__col-link"
            >Политика конфиденциальности</RouterLink
          >
        </div>
      </div>
      <div class="footer__col">
        <div class="footer__col-name">Напишите нам:</div>
        <div class="footer__col-big">
          <img src="../assets/img/envelope-icon.svg" alt="" />
          <a href="mailto:info@avtomaslo-optom.ru">info@avtomaslo-optom.ru</a>
        </div>
        <div class="footer__col-links">
          <RouterLink
            v-for="category in categoriesStore.categories"
            :to="`/products/${category.slug}`"
            class="footer__col-link"
            >{{ category.name }}</RouterLink
          >
        </div>
      </div>
      <div class="footer__col">
        <div class="footer__col-name">Наши мессенджеры:</div>
        <div class="footer__col-socials">
          <a
            target="_blank"
            href="https://vk.com/public203400103"
            class="footer__col-social"
          >
            <img src="../assets/img/vk-icon.svg" alt="" />
          </a>
          <a
            target="_blank"
            href="https://salebot.site/r/avtomaslo-optom_6"
            class="footer__col-social"
          >
            <img src="../assets/img/wa-icon.svg" alt="" />
          </a>
          <a
            target="_blank"
            href="https://t.me/avtomaslo_optom_bot"
            class="footer__col-social"
          >
            <img src="../assets/img/tg-icon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  <div class="footer-mob mob">
    <div class="container">
      <a href="tel:88003503605" class="footer__phone">
        <img src="../assets/img/phone-icon.svg" alt="" />
        <span>8 (800) 350-36-05</span>
      </a>
      <a
        href="mailto:info@avtomaslo-optom.ru"
        class="footer__phone footer-mob__mail"
      >
        <img src="../assets/img/envelope-icon.svg" alt="" />
        <span>info@avtomaslo-optom.ru</span>
      </a>
      <div class="footer-mob__links">
        <RouterLink to="/catalog" class="footer-mob__link">
          <span>Каталог</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.999249 1L6.07617 6L0.999249 11" stroke="white" />
          </svg>
        </RouterLink>
        <RouterLink to="/delivery" class="footer-mob__link">
          <span>Доставка и оплата</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.999249 1L6.07617 6L0.999249 11" stroke="white" />
          </svg>
        </RouterLink>
        <RouterLink to="/faq" class="footer-mob__link">
          <span>Вопросы и ответы</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.999249 1L6.07617 6L0.999249 11" stroke="white" />
          </svg>
        </RouterLink>
        <RouterLink to="/blog" class="footer-mob__link">
          <span>Блог</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.999249 1L6.07617 6L0.999249 11" stroke="white" />
          </svg>
        </RouterLink>
        <RouterLink to="/contacts" class="footer-mob__link">
          <span>Контакты</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.999249 1L6.07617 6L0.999249 11" stroke="white" />
          </svg>
        </RouterLink>
      </div>
      <div class="footer-mob__socials">
        <a
          href="https://vk.com/public203400103"
          target="_blank"
          class="footer-mob__social"
        >
          <img src="../assets/img/vk-icon.svg" alt="" />
        </a>
        <a
          href="https://salebot.site/r/avtomaslo-optom_6"
          target="_blank"
          class="footer-mob__social"
        >
          <img src="../assets/img/wa-icon.svg" alt="" />
        </a>
        <a
          href="https://t.me/avtomaslo_optom_bot"
          target="_blank"
          class="footer-mob__social"
        >
          <img src="../assets/img/tg-icon.svg" alt="" />
        </a>
      </div>
      <div class="footer-mob__copyright">© 2022 Все права защищены</div>
      <div class="footer-mob__author">
        Разработано в
        <a href="https://zaytsevstudio.ru/" target="_blank">Студии Зайцева</a>
      </div>
    </div>
  </div>
</template>
