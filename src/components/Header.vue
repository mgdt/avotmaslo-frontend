<script>
import { ref, watch } from "vue";
import { useUiStore } from "../stores/ui";
import { useRouter, useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const menuOpened = ref(false);
    const uiStore = useUiStore();
    const cartStore = useCartStore();
    const searchTerm = ref("");
    const { filterCategory } = storeToRefs(useProductsStore());

    if (route.query.search) {
      searchTerm.value = route.query.search;
    }

    function handleSearch() {
      searchTerm.value = searchTerm.value.trim();
      if (searchTerm.value.length > 0) {
        router.push(`/products?search=${searchTerm.value}`);
      } else {
        router.push(`/products`);
      }
      filterCategory.value = "";
    }

    return {
      menuOpened,
      uiStore,
      searchTerm,
      handleSearch,
      cartStore,
    };
  },
};
</script>

<template>
  <div class="header-mob">
    <div class="container">
      <div @click="menuOpened = true" class="header-mob__burger">
        <img src="../assets/img/burger.svg" alt="" />
      </div>
      <RouterLink to="/">
        <img src="../assets/img/logo.png" alt="" class="header-mob__logo" />
      </RouterLink>
      <RouterLink to="/cart" class="header__cart-wrap">
        <div v-if="cartStore.cartCount > 0" class="header__cart-counter">
          {{ cartStore.cartCount }}
        </div>
        <img src="../assets/img/cart.svg" alt="" />
      </RouterLink>
    </div>
  </div>

  <div class="mob-menu" :class="{ active: menuOpened }">
    <div class="mob-menu__inner">
      <div class="mob-menu__top">
        <div class="mob-menu__left">
          <img
            src="../assets/img/mob-menu-close.svg"
            alt=""
            class="mob-menu__close"
            @click="menuOpened = false"
          />
        </div>
        <div class="mob-menu__right">
          <a href="#">
            <img src="../assets/img/mob-menu-search.svg" alt="" />
          </a>
          <!-- <RouterLink to="/profile">
            <img src="../assets/img/mob-menu-person.svg" alt="" />
          </RouterLink> -->
          <a href="tel:88003503605" class="mob-menu__open-popup">
            <img src="../assets/img/mob-menu-phone.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="footer-mob__links mob-menu__links">
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
      <a href="tel:88003503605" class="footer__phone mob-menu__phone">
        <img src="../assets/img/phone-icon.svg" alt="" />
        <span>8 (800) 350-36-05</span>
      </a>
      <a
        href="mailto:info@avtomaslo-optom.ru"
        class="footer__phone mob-menu__mail"
      >
        <img src="../assets/img//envelope-icon.svg" alt="" />
        <span>info@avtomaslo-optom.ru</span>
      </a>
      <div class="footer-mob__socials mob-menu__links">
        <a href="#" class="footer-mob__social">
          <img src="../assets/img/vk-icon.svg" alt="" />
        </a>
        <a href="#" class="footer-mob__social">
          <img src="../assets/img/wa-icon.svg" alt="" />
        </a>
        <a href="#" class="footer-mob__social">
          <img src="../assets/img/tg-icon.svg" alt="" />
        </a>
      </div>
      <button class="mob-menu__btn" @click="uiStore.togglePopupCallback(true)">
        Связаться с менеджером
      </button>
    </div>
  </div>

  <header class="header">
    <div class="container">
      <RouterLink to="/" class="header__logo">
        <img src="../assets/img/logo.png" alt="" />
      </RouterLink>
      <div class="header__middle">
        <div class="header__search-wrap">
          <form @submit.prevent="handleSearch" class="header__search">
            <input
              type="text"
              class="header__search-input"
              placeholder="Поиск по каталогу"
              v-model="searchTerm"
            />
            <svg
              class="header__search-btn"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="handleSearch"
            >
              <path
                d="M24.1663 24.1666L17.4997 17.5M10.833 20.8333C9.51979 20.8333 8.21943 20.5747 7.00617 20.0721C5.79292 19.5696 4.69053 18.833 3.76194 17.9044C2.83335 16.9758 2.09676 15.8734 1.59421 14.6601C1.09167 13.4469 0.833008 12.1465 0.833008 10.8333C0.833008 9.52009 1.09167 8.21973 1.59421 7.00648C2.09676 5.79322 2.83335 4.69083 3.76194 3.76225C4.69053 2.83366 5.79292 2.09706 7.00617 1.59452C8.21943 1.09197 9.51979 0.833313 10.833 0.833313C13.4852 0.833313 16.0287 1.88688 17.9041 3.76225C19.7794 5.63761 20.833 8.18115 20.833 10.8333C20.833 13.4855 19.7794 16.029 17.9041 17.9044C16.0287 19.7797 13.4852 20.8333 10.833 20.8333Z"
                stroke="#1E1E20"
                stroke-width="1.9"
              />
            </svg>
          </form>
          <div class="header__links">
            <RouterLink to="/catalog" class="header__link">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.85"
                  y1="1.15"
                  x2="15.15"
                  y2="1.15"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="square"
                />
                <line
                  x1="0.85"
                  y1="6.15"
                  x2="15.15"
                  y2="6.15"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="square"
                />
                <line
                  x1="0.85"
                  y1="11.15"
                  x2="15.15"
                  y2="11.15"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="square"
                />
              </svg>
              <span>Каталог</span>
            </RouterLink>
            <RouterLink to="/delivery" class="header__link"
              ><span>Доставка и оплата</span>
            </RouterLink>
            <RouterLink to="/faq" class="header__link"
              ><span>Вопросы и ответы</span>
            </RouterLink>
            <RouterLink to="/blog" class="header__link"
              ><span>Блог</span>
            </RouterLink>
            <RouterLink to="/contacts" class="header__link"
              ><span>Контакты</span>
            </RouterLink>
          </div>
        </div>
        <div class="header__search-profile">
          <!-- <RouterLink to="/profile">
            <img src="../assets/img/profile.svg" alt="" />
          </RouterLink> -->
          <RouterLink to="/cart" class="header__cart-wrap">
            <div v-if="cartStore.cartCount > 0" class="header__cart-counter">
              {{ cartStore.cartCount }}
            </div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00168 10.65L3.17335 10.5567L4.00168 10.65ZM2.70502 22.3167L3.53335 22.4083L2.70502 22.3167ZM22.295 22.3167L21.4667 22.4083L22.295 22.3167ZM20.9984 10.65L21.8267 10.5567L20.9984 10.65ZM3.17335 10.5567L1.87668 22.2233L3.53335 22.4067L4.83002 10.74L3.17335 10.5567ZM4.36168 25H20.6384V23.3333H4.36168V25ZM23.1234 22.2233L21.8267 10.5567L20.17 10.74L21.4667 22.4067L23.1217 22.2233H23.1234ZM19.34 8.33333H5.66002V10H19.3434V8.33333H19.34ZM21.8267 10.5567C21.7586 9.94525 21.4675 9.3804 21.009 8.9702C20.5505 8.56 19.9569 8.33325 19.3417 8.33333V10C19.5468 9.99999 19.7448 10.0756 19.8976 10.2125C20.0505 10.3493 20.1475 10.5378 20.17 10.7417L21.8267 10.5583V10.5567ZM20.6384 25C20.9899 24.9998 21.3374 24.9255 21.6583 24.7819C21.9792 24.6383 22.2661 24.4286 22.5005 24.1666C22.7348 23.9046 22.9113 23.5961 23.0183 23.2612C23.1254 22.9264 23.1606 22.5727 23.1217 22.2233L21.4667 22.4067C21.4798 22.5233 21.4682 22.6413 21.4326 22.7531C21.3969 22.8649 21.3381 22.9679 21.2599 23.0554C21.1817 23.1428 21.0859 23.2128 20.9788 23.2607C20.8717 23.3086 20.7557 23.3334 20.6384 23.3333V25ZM1.87668 22.2233C1.83777 22.5728 1.87303 22.9266 1.98016 23.2616C2.0873 23.5966 2.2639 23.9052 2.49843 24.1672C2.73296 24.4293 3.02014 24.6389 3.34121 24.7824C3.66227 24.9259 4.01001 25 4.36168 25V23.3333C4.24451 23.3333 4.12865 23.3086 4.02167 23.2608C3.91469 23.213 3.81899 23.1432 3.74083 23.0559C3.66266 22.9686 3.60378 22.8658 3.56803 22.7543C3.53228 22.6427 3.52046 22.5248 3.53335 22.4083L1.87668 22.225V22.2233ZM4.83002 10.74C4.85297 10.5364 4.95012 10.3484 5.10292 10.2119C5.25572 10.0754 5.45346 9.99994 5.65835 10V8.33333C5.04344 8.33366 4.45022 8.56059 3.99209 8.97075C3.53396 9.38092 3.24307 9.94553 3.17502 10.5567L4.83002 10.74ZM8.33335 6.66667V5.83333H6.66668V6.66667H8.33335ZM16.6667 5.83333V6.66667H18.3334V5.83333H16.6667ZM12.5 1.66667C13.6051 1.66667 14.6649 2.10565 15.4463 2.88705C16.2277 3.66846 16.6667 4.72826 16.6667 5.83333H18.3334C18.3334 4.28624 17.7188 2.80251 16.6248 1.70854C15.5308 0.614581 14.0471 0 12.5 0V1.66667ZM8.33335 5.83333C8.33335 4.72826 8.77234 3.66846 9.55374 2.88705C10.3351 2.10565 11.3949 1.66667 12.5 1.66667V0C10.9529 0 9.46919 0.614581 8.37523 1.70854C7.28127 2.80251 6.66668 4.28624 6.66668 5.83333H8.33335Z"
                fill="white"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
      <div class="header__right">
        <a href="tel:88003503605" class="header__right-link"
          >8 (800) 350-36-05</a
        >
        <a href="mailto:info@avtomaslo-optom.ru" class="header__right-link"
          >info@avtomaslo-optom.ru</a
        >
        <a
          href="#"
          class="header__right-btn"
          @click="uiStore.togglePopupCallback(true)"
          >Связаться с менеджером</a
        >
      </div>
    </div>
  </header>
</template>
