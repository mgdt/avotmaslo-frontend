<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";
import ProductList from "@/components/ProductList.vue";
import Filters from "../components/Filters.vue";
import "../assets/libs/range-slider.css";
import { ref, onMounted, onUpdated, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { useCategoriesStore } from "@/stores/categories";
import { storeToRefs } from "pinia";
import { remove } from "dom7";

export default {
  components: {
    Header,
    Callback,
    Footer,
    ProductList,
    Filters,
  },
  setup() {
    const filtersShown = ref(false);
    const route = useRoute();
    const currentCategory = ref("");

    const { categories } = storeToRefs(useCategoriesStore());
    const { products, filterCategory, filtersBody, sort, sortDir } =
      storeToRefs(useProductsStore());
    const { fetchCategoreis } = useCategoriesStore();
    const { fetchProducts } = useProductsStore();

    sort.value = "price";
    sortDir.value = "1";

    const sortBy = ref("price:1");
    const component = ref("Filters");

    watch(sortBy, async () => {
      sort.value = sortBy.value.split(":")[0];
      sortDir.value = sortBy.value.split(":")[1];
      await fetchProducts();
    });

    function applyCategory() {
      if (route.params.slug) {
        const category = categories.value.find(
          (category) => category.slug == route.params.slug
        );

        filterCategory.value = category._id;
        currentCategory.value = category.name;
      } else {
        filterCategory.value = "";
        if (filtersBody.value.category) {
          delete filtersBody.value.category;
        }
      }
    }

    const catalogTitle = computed(() => {
      if (route.query.search) return `Поиск по запросу: ${route.query.search}`;
      if (currentCategory.value) return currentCategory.value;
      return "Каталог";
    });

    onMounted(async () => {
      await fetchCategoreis();
      applyCategory();
    });

    onUpdated(async () => {
      applyCategory();
      await fetchProducts();
    });

    return {
      filtersShown,
      route,
      sortBy,
      component,
      currentCategory,
      catalogTitle,
      filterCategory,
    };
  },
};
</script>

<template>
  <div class="page-products">
    <img src="../assets/img/blog/bg-2.png" alt="" class="products__bg-btm" />

    <Header />

    <section class="breadcrumbs">
      <div class="container" v-if="!filterCategory">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">Каталог</span>
      </div>
      <div class="container" v-else>
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <RouterLink to="/catalog" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">{{ currentCategory }}</span>
      </div>
    </section>

    <div class="products">
      <div class="container">
        <h1 class="products__title section__title">
          {{ catalogTitle }}
        </h1>
        <div class="products__filters-mob mob">
          <div class="products__filters-mob-items-wrap">
            <select class="products__filters-items" v-model="sortBy">
              <option value="price:1">
                Сортировать: по цене (возрастание)
              </option>
              <option value="price:-1">Сортировать: по цене (убывание)</option>
              <option value="volume:1">
                Сортировать: по объему (возрастание)
              </option>
              <option value="volume:-1">
                Сортировать: по объему (убывание)
              </option></select
            ><svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 7L12 1" stroke="#F7CA60" stroke-width="1.5" />
            </svg>
          </div>
          <div
            class="products__filters-mob-filters"
            @click="filtersShown = !filtersShown"
            :class="{ active: filtersShown }"
          >
            <span>Фильтр</span>
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 7L12 1" stroke="#F7CA60" stroke-width="1.5" />
            </svg>
          </div>
        </div>
        <div class="products__content" :class="{ active: filtersShown }">
          <Filters :fullPath="route.fullPath" />
          <div class="products__right">
            <label class="products__select">
              <select v-model="sortBy">
                <option value="price:1">
                  Сортировать: по цене (возрастание)
                </option>
                <option value="price:-1">
                  Сортировать: по цене (убывание)
                </option>
                <option value="volume:1">
                  Сортировать: по объему (возрастание)
                </option>
                <option value="volume:-1">
                  Сортировать: по объему (убывание)
                </option>
              </select>
              <div class="products__select-circle">
                <img src="../assets/img/products/arrow.svg" alt="" />
              </div>
            </label>

            <ProductList />
          </div>
        </div>
      </div>
    </div>

    <Callback />

    <Footer />
  </div>
</template>

<style src="@/assets/css/products.css"></style>
