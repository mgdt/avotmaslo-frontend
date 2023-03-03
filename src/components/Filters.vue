<script>
import FilterItem from "./FilterItem.vue";
import { onMounted, ref, computed, watch } from "vue";
import { useCategoriesStore } from "@/stores/categories";
import { useBrandsStore } from "@/stores/brands";
import { useProductsStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { formatNumber } from "@/helpers";
import { useRoute } from "vue-router";
import { loadFilterField, addCheckedToFilters } from "@/helpers";
import noUiSlider from "../assets/libs/range-slider";

export default {
  components: { FilterItem },
  props: ["fullPath"],
  setup(props) {
    let initialMinPrice = 0;
    let initialMaxPrice = 0;
    let initialMinVolume = 0;
    let initialMaxVolume = 0;

    const filtersShown = ref(false);

    const route = useRoute();
    const currentCategory = route.params;
    const currentBrandId = route.query.brand;

    const { categories } = storeToRefs(useCategoriesStore());

    const { filtersBody } = storeToRefs(useProductsStore());
    const { fetchMinMaxValues, fetchProducts, fetchFilterFields } =
      useProductsStore();

    const { getBrands } = useBrandsStore();

    const getCategoryName = (category) => {
      return category.name.replaceAll("<b>", "").replaceAll("</b>", "");
    };

    const minMaxPriceSlider = ref(null);
    const minMaxPriceElem = ref(null);
    const minMaxVolumeSlider = ref(null);
    const minMaxVolumeElem = ref(null);

    const minPrice = ref(0);
    const maxPrice = ref(999999999);
    const minVolume = ref(0);
    const maxVolume = ref(999999999);
    const brands = ref([]);
    const viscosityList = ref([]);
    const typeList = ref([]);
    const engineTypeList = ref([]);
    const vehicleTypeList = ref([]);

    const filters = computed(() => {
      const filters = {
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
        minVolume: minVolume.value,
        maxVolume: maxVolume.value,
      };

      const checkedBrands = [];
      brands.value.map((brand) => {
        if (brand.checked) checkedBrands.push(brand._id);
      });
      if (checkedBrands.length > 0) filters.brand = checkedBrands;

      addCheckedToFilters("viscosity", viscosityList, filters);
      addCheckedToFilters("type", typeList, filters);
      addCheckedToFilters("engineType", engineTypeList, filters);
      addCheckedToFilters("vehicleType", vehicleTypeList, filters);

      if (route.query.search) filters.search = route.query.search;

      return filters;
    });

    async function handleFilter() {
      filtersBody.value = filters.value;
      await fetchProducts();
    }

    watch(
      () => props.fullPath,
      async () => {
        minMaxPriceSlider.value.noUiSlider.updateOptions(
          {
            start: [initialMinPrice, initialMaxPrice],
          },
          true
        );
        minMaxVolumeSlider.value.noUiSlider.updateOptions(
          {
            start: [initialMinVolume, initialMaxVolume],
          },
          true
        );
        brands.value.forEach((item) => (item.checked = false));
        viscosityList.value.forEach((item) => (item.checked = false));
        typeList.value.forEach((item) => (item.checked = false));
        engineTypeList.value.forEach((item) => (item.checked = false));
        vehicleTypeList.value.forEach((item) => (item.checked = false));
        await handleFilter();
      }
    );

    onMounted(async () => {
      const { minMaxPrice, minMaxVolume } = await fetchMinMaxValues();
      const { viscosity, engineType, type, vehicleType } =
        await fetchFilterFields();

      loadFilterField(viscosity, viscosityList);
      loadFilterField(engineType, engineTypeList);
      loadFilterField(type, typeList);
      loadFilterField(vehicleType, vehicleTypeList);

      brands.value = await getBrands();

      const currentBrand = brands.value.find(
        (brand) => brand._id == currentBrandId
      );
      if (currentBrand) {
        currentBrand.checked = true;
      }

      initialMinPrice = minMaxPrice.min;
      initialMaxPrice = minMaxPrice.max;
      initialMinVolume = minMaxVolume.min;
      initialMaxVolume = minMaxVolume.max;

      minPrice.value = minMaxPrice.min;
      maxPrice.value = minMaxPrice.max;
      minVolume.value = minMaxVolume.min;
      maxVolume.value = minMaxVolume.max;

      minMaxPriceSlider.value = minMaxPriceElem.value;
      minMaxVolumeSlider.value = minMaxVolumeElem.value;

      noUiSlider.create(minMaxPriceSlider.value, {
        start: [minMaxPrice.min, minMaxPrice.max],
        connect: true,
        step: 1,
        range: {
          min: minMaxPrice.min,
          max: minMaxPrice.max,
        },
      });

      minMaxPriceSlider.value.noUiSlider.on("update", (values) => {
        minPrice.value = values[0];
        maxPrice.value = values[1];
      });

      noUiSlider.create(minMaxVolumeSlider.value, {
        start: [minMaxVolume.min, minMaxVolume.max],
        connect: true,
        step: 1,
        range: {
          min: minMaxVolume.min,
          max: minMaxVolume.max,
        },
      });

      minMaxVolumeSlider.value.noUiSlider.on("update", (values) => {
        minVolume.value = values[0];
        maxVolume.value = values[1];
      });

      await handleFilter();
    });

    return {
      minMaxPriceElem,
      categories,
      getCategoryName,
      formatNumber,
      filtersShown,
      minPrice,
      maxPrice,
      filters,
      handleFilter,
      currentCategory,
      brands,
      viscosityList,
      typeList,
      engineTypeList,
      vehicleTypeList,
      minMaxVolumeElem,
      minVolume,
      maxVolume,
    };
  },
};
</script>

<template>
  <div class="products__left">
    <div
      class="products__left-select"
      @click="filtersShown = !filtersShown"
      :class="{ active: filtersShown }"
    >
      <span>Фильтр</span>
      <div class="products__left-select-circle">
        <img src="../assets/img/products/arrow.svg" alt="" />
      </div>
    </div>
    <div class="products__left-inner" :class="{ active: filtersShown }">
      <div class="products__filters">
        <div class="products__filter products__filter-price">
          <div class="products__filter-label">Цена</div>
          <div class="products__prices">
            <span>{{ formatNumber(minPrice) }}</span>
            <span>{{ formatNumber(maxPrice) }}</span>
          </div>
          <div
            class="products__price"
            id="min-max-slider"
            ref="minMaxPriceElem"
          ></div>
        </div>
        <div class="products__filter products__filter-price">
          <div class="products__filter-label">Объем</div>
          <div class="products__prices">
            <span>{{ formatNumber(minVolume) }}</span>
            <span>{{ formatNumber(maxVolume) }}</span>
          </div>
          <div
            class="products__price"
            id="min-max-slider"
            ref="minMaxVolumeElem"
          ></div>
        </div>
        <FilterItem name="Тип" :list="typeList" />
        <FilterItem name="Производитель" :list="brands" />
        <FilterItem name="Тип двигателя" :list="engineTypeList" />
        <FilterItem name="Категория т/с" :list="vehicleTypeList" />
        <FilterItem name="Вязкость" :list="viscosityList" />
      </div>
      <div class="products__filters-btn-wrap">
        <button @click="handleFilter" class="products__filters-btn">
          Применить фильтры
        </button>
      </div>
    </div>
    <div class="products__left-select active">
      <span>Каталог</span>
      <div class="products__left-select-circle">
        <img src="../assets/img/products/arrow.svg" alt="" />
      </div>
    </div>
    <div class="products__left-links">
      <RouterLink
        :to="`/products/${category.slug}`"
        class="products__left-link"
        :class="{ active: category.slug == currentCategory }"
        v-for="category in categories"
        :key="category._id"
      >
        <div></div>
        <span>{{ getCategoryName(category) }}</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.router-link-active div {
  opacity: 1;
  background: #f7ca60;
  box-shadow: 0px 0px 14px #f7ca60;
}
</style>
