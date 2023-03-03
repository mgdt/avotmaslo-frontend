<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";
import { useProductsStore } from "@/stores/products";
import { useCategoriesStore } from "@/stores/categories";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import { formatNumber } from "@/helpers";
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { useNotification } from "@kyvg/vue3-notification";

export default {
  components: {
    Header,
    Callback,
    Footer,
  },
  setup() {
    const { notify } = useNotification();

    const { fetchProduct, getImageUrl } = useProductsStore();
    const { categories } = storeToRefs(useCategoriesStore());
    const { fetchCategoreis } = useCategoriesStore();
    const { addToCart } = useCartStore();

    const descriptionShown = ref(false);
    const documentShown = ref(false);
    const deliveryShown = ref(false);
    const specsShown = ref(true);
    const counter = ref(1);
    const product = ref({});
    const route = useRoute();

    function handleAdd() {
      if (product.value.stock > 0) {
        addToCart(product.value, counter.value);
        notify({
          title: "Добавлено",
          text: `Добавлено ${product.value.name} ${counter.value} шт. в корзину`,
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

    function handleClickTab() {
      descriptionShown.value = false;
      documentShown.value = false;
      deliveryShown.value = false;
      specsShown.value = false;
    }

    const getCategoryName = (category) => {
      return category.name.replaceAll("<b>", "").replaceAll("</b>", "");
    };

    watch(counter, () => {
      if (counter.value < 1) {
        counter.value = 1;
      }
    });

    onMounted(async () => {
      product.value = await fetchProduct(route.params.id);
      await fetchCategoreis();
      console.log(product.value);
    });

    return {
      descriptionShown,
      documentShown,
      deliveryShown,
      specsShown,
      product,
      getImageUrl,
      formatNumber,
      handleClickTab,
      getCategoryName,
      categories,
      handleAdd,
      counter,
    };
  },
};
</script>

<template>
  <div class="page-product">
    <notifications />

    <img src="../assets/img/catalog/bg-3.png" alt="" class="bg-3" />
    <Header />

    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <RouterLink to="/products" class="breadcrumbs__link"
          >Каталог</RouterLink
        >
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <RouterLink
          v-if="product.category"
          :to="`/products/${product.category.slug}`"
          class="breadcrumbs__link"
          >{{ getCategoryName(product.category) }}</RouterLink
        >
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <RouterLink
          v-if="product.brand"
          :to="`/products/?band=${product.brand._id}`"
          class="breadcrumbs__link"
          >{{ product.brand.name }}</RouterLink
        >
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">{{ product.name }}</span>
      </div>
    </section>

    <div class="product">
      <div class="container">
        <div class="product__left">
          <div class="product__left-box">
            <span>Каталог</span>
            <div class="product__left-arrow">
              <img src="../assets/img/product/arrow.svg" alt="" />
            </div>
          </div>
          <ul class="product__links">
            <li
              class="product__link"
              v-for="category in categories"
              :key="category._id"
            >
              <div class="product__link-circle"></div>
              <RouterLink
                :to="`/products/${category.slug}`"
                class="product__link-text"
              >
                {{ getCategoryName(category) }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="product__right">
          <div class="product__img-wrap">
            <img :src="getImageUrl(product)" class="product__img" alt="" />
            <img
              src="../assets/img/product/shadow-bottom.svg"
              alt=""
              class="product__img-shadow-bottom"
            />
            <img
              src="../assets/img/product/shadow-right.svg"
              alt=""
              class="product__img-shadow-right"
            />
          </div>
          <div class="product__content">
            <h1 class="product__title">
              {{ product.name }} ({{ product.volume }}
              {{ product.volumeUnits }})
            </h1>
            <div class="product__subtitle">
              <div class="product__price">
                {{ formatNumber(product.price) }} ₽
              </div>
              <!-- <div class="product__bonuses">
                <img
                  src="../assets/img/product/star.svg"
                  alt=""
                  class="product__bonuses-star"
                />
                <div class="product__bonuses-text">Бонусные баллы: 150</div>
              </div> -->
            </div>
            <div class="product__delivery-price">
              {{ product.stock > 0 ? "Есть в наличии" : "Нет в наличии" }}
            </div>
            <div class="product__tabs">
              <div
                class="product__tab"
                :class="{ active: specsShown }"
                @click="
                  handleClickTab();
                  specsShown = true;
                "
              >
                Характеристики
              </div>
              <div
                class="product__tab"
                :class="{ active: descriptionShown }"
                @click="
                  handleClickTab();
                  descriptionShown = true;
                "
              >
                Описание
              </div>
              <div
                class="product__tab"
                :class="{ active: deliveryShown }"
                @click="
                  handleClickTab();
                  deliveryShown = true;
                "
              >
                Доставка и оплата
              </div>
            </div>
            <div
              v-show="descriptionShown"
              class="product__tabs-content"
              v-html="product.description"
            ></div>
            <div v-show="specsShown" class="product__tabs-content">
              <div class="product__specs">
                <div class="product__spec">
                  <div class="product__spec-key">Страна производства:</div>
                  <div class="product__spec-value">{{ product.country }}</div>
                </div>
                <div class="product__spec">
                  <div class="product__spec-key">Артикул:</div>
                  <div class="product__spec-value">{{ product.articul }}</div>
                </div>
                <div class="product__spec">
                  <div class="product__spec-key">Тип масла:</div>
                  <div class="product__spec-value">{{ product.type }}</div>
                </div>
                <div class="product__spec">
                  <div class="product__spec-key">Объем:</div>
                  <div class="product__spec-value">
                    {{ product.volume }} {{ product.volumeUnits }}
                  </div>
                </div>
                <div class="product__spec">
                  <div class="product__spec-key">Вязкость (SAE):</div>
                  <div class="product__spec-value">
                    {{ product.viscosity }}
                  </div>
                </div>
                <div class="product__spec">
                  <div class="product__spec-key">Классификация API:</div>
                  <div class="product__spec-value">
                    {{ product.classification }}
                  </div>
                </div>
              </div>
            </div>
            <div
              v-show="documentShown"
              class="product__tabs-content"
              v-html="product.description"
            ></div>
            <div
              v-show="deliveryShown"
              class="product__tabs-content"
              v-html="product.deliveryText"
            ></div>
            <div class="product__nav">
              <!-- <button class="product__fav">
                <img src="../assets/img/product/heart.svg" alt="" />
                <span>в избранное</span>
              </button> -->
              <div class="product__counter">
                <div @click="counter--" class="product__minus">
                  <img src="../assets/img/product/minus.svg" alt="" />
                </div>
                <div class="product__count">{{ counter }}</div>
                <div @click="counter++" class="product__plus">
                  <img src="../assets/img/product/plus.svg" alt="" />
                </div>
              </div>
              <div class="product__cart" @click="handleAdd">
                <span>В корзину</span>
              </div>
            </div>
          </div>
        </div>
        <div class="product-mob mob">
          <h2 class="product-mob__title">
            {{ product.name }} ({{ product.volume }} {{ product.volumeUnits }})
          </h2>
          <div class="product-mob__box">
            <div class="product-mob__box-inner">
              <div class="product-mob__img">
                <img
                  class="product-mob__img-img"
                  :src="getImageUrl(product)"
                  alt=""
                />
                <img
                  src="../assets/img/product/shadow-bottom.svg"
                  alt=""
                  class="product-mob__img-shadow"
                />
              </div>
              <h3 class="product-mob__name">
                {{ product.name }} ({{ product.volume }}
                {{ product.volumeUnits }})
              </h3>
              <p class="product-mob__subtitle mb">
                {{ product.stock > 0 ? "Есть в наличии" : "Нет в наличии" }}
              </p>
              <div class="product-mob__specs">
                <div class="product-mob__spec">
                  <div class="product-mob__spec-key">Страна производства:</div>
                  <div class="product-mob__spec-value">
                    {{ product.country }}
                  </div>
                </div>
                <div class="product-mob__spec">
                  <div class="product-mob__spec-key">Артикул:</div>
                  <div class="product-mob__spec-value">
                    {{ product.articul }}
                  </div>
                </div>
                <div class="product-mob__spec">
                  <div class="product-mob__spec-key">Тип масла:</div>
                  <div class="product-mob__spec-value">{{ product.type }}</div>
                </div>
                <div class="product-mob__spec">
                  <div class="product-mob__spec-key">Объем:</div>
                  <div class="product-mob__spec-value">
                    {{ product.volume }} {{ product.volumeUnits }}
                  </div>
                </div>
                <div class="product-mob__spec">
                  <div class="product-mob__spec-key">Вязкость (SAE):</div>
                  <div class="product-mob__spec-value">
                    {{ product.viscosity }}
                  </div>
                </div>
                <div class="product-mob__spec">
                  <div class="product-mob__spec-key">Классификация API:</div>
                  <div class="product-mob__spec-value">
                    {{ product.classification }}
                  </div>
                </div>
              </div>
              <div class="product-mob__tabs">
                <div
                  class="product-mob__tab"
                  :class="{ active: descriptionShown }"
                >
                  <div class="product-mob__tab-header">
                    <span class="product-mob__tab-title">Описание</span>
                    <div
                      class="product-mob__tab-btn"
                      @click="descriptionShown = !descriptionShown"
                    >
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div
                    class="product-mob__tab-text"
                    v-html="product.description"
                  ></div>
                </div>
                <div
                  class="product-mob__tab"
                  :class="{ active: deliveryShown }"
                >
                  <div class="product-mob__tab-header">
                    <span class="product-mob__tab-title"
                      >Доставка и оплата</span
                    >
                    <div
                      class="product-mob__tab-btn"
                      @click="deliveryShown = !deliveryShown"
                    >
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div
                    class="product-mob__tab-text"
                    v-html="product.deliveryText"
                  ></div>
                </div>
              </div>
              <div class="product-mob__price">
                <span>Цена:</span>
                <span>{{ formatNumber(product.price) }} ₽</span>
              </div>
              <!-- <div class="product-mob__bonuses">
                <img
                  src="../assets/img/product/star.svg"
                  alt=""
                  class="product-mob__star"
                />
                <span>Бонусные баллы: 150</span>
              </div> -->
            </div>
            <div class="product-mob__btm">
              <div class="product-mob__counter">
                <div class="product-mob__minus" @click="counter--">
                  <svg
                    width="15"
                    height="3"
                    viewBox="0 0 15 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.44708H15" stroke="white" stroke-width="2" />
                  </svg>
                </div>
                <div class="product-mob__count">{{ counter }}</div>
                <div class="product-mob__plus" @click="counter++">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 0V14.8941M0 7.44706H15"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <button @click="handleAdd" class="product-mob__btn">
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/product.css"></style>
