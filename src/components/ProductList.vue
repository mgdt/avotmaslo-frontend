<script>
import { useProductsStore } from "@/stores/products";
import { formatNumber } from "@/helpers";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";
import { useUiStore } from "@/stores/ui";
import { useNotification } from "@kyvg/vue3-notification";
import { ref, watch, computed } from "vue";

export default {
  setup() {
    const { notify } = useNotification();

    const uiStore = useUiStore();
    const { getImageUrl } = useProductsStore();
    const { products } = storeToRefs(useProductsStore());
    const { addToCart } = useCartStore();

    const currentPage = ref(1);
    const perPage = 15;
    const limit = ref(15);

    function handleAddCart(product) {
      if (product.stock > 0) {
        addToCart(product, 1);
        notify({
          title: "Добавлено",
          text: `Добавлено ${product.name} ${1} шт. в корзину`,
          type: "success",
        });
      } else {
        notify({
          title: "Ошибка",
          text: `Нет в наличии`,
          type: "error",
        });
      }
    }

    const slicedProducts = computed(() => {
      const start = (currentPage.value - 1) * limit.value;
      const end = currentPage.value * limit.value;
      return products.value.slice(start, end);
    });

    const pagesCount = computed(() => {
      return Math.ceil(products.value.length / limit.value);
    });

    watch(
      () => products,
      async () => {
        currentPage.value = 1;
      },
      { deep: true }
    );

    watch(
      () => currentPage,
      () => {
        window.scrollTo(0, 0);
      },
      { deep: true }
    );

    return {
      products,
      currentPage,
      limit,
      slicedProducts,
      pagesCount,
      perPage,
      uiStore,
      getImageUrl,
      formatNumber,
      handleAddCart,
    };
  },
};
</script>

<template>
  <div class="products__items">
    <notifications />
    <h3
      v-show="products.length == 0"
      class="products__item-title"
      style="margin-top: 50px"
    >
      По вашему запросу ничего не найдено
    </h3>
    <RouterLink
      :to="`/product/${product._id}`"
      class="products__item"
      v-for="product in slicedProducts"
      :key="product._id"
      target="_blank"
    >
      <div class="products__item-img">
        <img :src="getImageUrl(product)" alt="" />
        <img
          src="../assets/img/products/shadow.svg"
          alt=""
          class="products__item-shdaow"
        />
      </div>
      <h3 class="products__item-title">
        {{ product.name }}
      </h3>
      <div class="products__item-price" v-if="product.price > 0">
        {{ formatNumber(product.price) }} ₽
      </div>
      <div class="products__item-price" v-else>Под заказ</div>
      <div class="products__item-volume">
        Объем: {{ product.volume }} {{ product.volumeUnits }}
      </div>
      <button
        @click.prevent="handleAddCart(product)"
        class="products__item-btn"
        v-if="product.price > 0"
      >
        В корзину
      </button>
      <button
        class="products__item-btn"
        v-else
        @click.prevent="uiStore.togglePopupCallback(true)"
      >
        Оставить заявку
      </button>
    </RouterLink>
  </div>
  <div class="products__btm" v-show="products.length > limit">
    <div class="pagination">
      <div
        class="pagination__prev pagination__button"
        @click="currentPage > 1 ? currentPage-- : ''"
      >
        <div class="pagination__arrow">
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 12L2 6.5L8 1" stroke="black" stroke-width="2" />
          </svg>
        </div>
        <div class="pagination__button-text">Назад</div>
      </div>

      <div class="pagination__pages">
        <div
          class="pagination__page"
          :class="{ 'pagination__page--active': page == currentPage }"
          @click="currentPage = page"
          v-for="(page, index) in pagesCount"
          :key="index"
        ></div>
      </div>

      <div
        class="pagination__next pagination__button"
        @click="currentPage < pagesCount ? currentPage++ : ''"
      >
        <div class="pagination__button-text">Вперёд</div>
        <div class="pagination__arrow">
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 12L7 6.5L1 1" stroke="black" stroke-width="2" />
          </svg>
        </div>
      </div>
    </div>
    <div @click="limit += perPage" class="products__btm-btn btn-primary">
      Показать больше
    </div>
  </div>
</template>
