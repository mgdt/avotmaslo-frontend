<script>
import { useCategoriesStore } from "@/stores/categories";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const { categories } = storeToRefs(useCategoriesStore());
    const { fetchCategoreis, getImageUrl } = useCategoriesStore();

    function getCategoryName(category) {
      if (category.name) {
        return category.name.replaceAll("\n", "<br>");
      }
    }

    onMounted(async () => {
      await fetchCategoreis();
    });

    return {
      categories,
      getImageUrl,
      getCategoryName,
    };
  },
};
</script>

<template>
  <div class="catalog__items">
    <RouterLink
      class="catalog__item"
      v-for="category in categories"
      :key="category._id"
      :to="`/products/${category.slug}`"
    >
      <img :src="getImageUrl(category)" alt="" class="catalog__item-img" />
      <div class="catalog__item-overlay"></div>
      <div class="catalog__item-radial"></div>
      <div class="catalog__item-title" v-html="getCategoryName(category)"></div>
    </RouterLink>
    <div class="catalog__item" style="height: 0; opacity: 0">
      <img alt="" class="catalog__item-img" />
      <div class="catalog__item-overlay"></div>
      <div class="catalog__item-radial"></div>
      <div class="catalog__item-title">
        Моторные масла<br />
        <span>для коммерческой техники</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog__items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
}
.catalog__item {
  width: 388px;
  height: 370px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
}

.catalog__item-img {
  width: 100%;
  height: 100%;
  position: absolute;
  filter: grayscale(1);
  z-index: -3;
  border-radius: 25px;
  transition-duration: 0.2s;
  -o-object-fit: cover;
  object-fit: cover;
}

.catalog__item-overlay {
  z-index: -2;
  position: absolute;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  transition-duration: 0.2s;
  background: linear-gradient(
    180deg,
    #020202 0%,
    rgba(11, 11, 11, 0.69395) 15%,
    transparent 40%,
    transparent 60%,
    rgba(11, 11, 11, 0.69395) 85%,
    #020202 100%
  );
}

.catalog__item-radial {
  transition-duration: 0.2s;
  z-index: -1;
  position: absolute;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    65.58% 65.58% at 50% 34.42%,
    rgba(30, 26, 1, 0.29) 0%,
    rgba(22, 22, 18, 0.901048) 71.33%,
    #151515 100%
  );
}

.catalog__item:hover .catalog__item-radial {
  visibility: hidden;
  opacity: 0;
}
.catalog__item:hover .catalog__item-img {
  filter: grayscale(0);
}

.catalog__items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
}

.catalog__item-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 105.8%;
  text-align: center;
  color: #ffffff;
  padding-bottom: 30px;
}
.catalog__item-title >>> b {
  color: #f7ca60;
}

@media only screen and (max-width: 600px) {
  .catalog__item {
    width: 100%;
    height: 178px;
  }
  .catalog__item-title {
    font-size: 20px;
    line-height: 105.8%;
    padding-bottom: 20px;
  }
  .catalog__items {
    row-gap: 10px;
  }
  .catalog__items {
    row-gap: 10px;
  }
}
</style>
