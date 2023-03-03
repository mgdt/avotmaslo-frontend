<script>
import { useBrandsStore } from "@/stores/brands";
import { storeToRefs } from "pinia";
import { onMounted, ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["mainPage"],
  setup(props) {
    const brandsSwiperPrev = ref(null);
    const brandsSwiperNext = ref(null);
    const brandsSwiperPagination = ref(null);

    const { brands } = storeToRefs(useBrandsStore());
    const { fetchBrands } = useBrandsStore();

    const brandsParts = computed(() => {
      const parts = [];
      const brandsCopy = JSON.parse(JSON.stringify(brands.value));
      while (brandsCopy.length > 0) {
        parts.push(brandsCopy.splice(0, 8));
      }

      if (parts.length > 0) {
        while (parts[parts.length - 1].length < 8) {
          parts[parts.length - 1].push({
            name: "",
          });
        }
      }

      return parts;
    });

    onMounted(async () => {
      await fetchBrands();

      if (document.documentElement.offsetWidth > 600) {
        if (props.mainPage) {
          return;
        }
        while (brands.value.length % 4 != 0) {
          brands.value.push({
            name: "",
          });
        }
      } else {
        if (props.mainPage) {
          return;
        }
        while (brands.value.length % 2 != 0) {
          brands.value.push({
            name: "",
          });
        }
      }
    });

    return {
      brands,
      brandsSwiperPrev,
      brandsSwiperNext,
      brandsSwiperPagination,
      brandsParts,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<template>
  <div v-if="mainPage">
    <div class="brands__content">
      <img
        class="producers__left"
        src="../assets/img/main/arrow-left.svg"
        alt=""
        ref="brandsSwiperPrev"
      />
      <img
        class="producers__right"
        src="../assets/img/main/arrow-right.svg"
        alt=""
        ref="brandsSwiperNext"
      />
      <Swiper
        :navigation="{
          prevEl: brandsSwiperPrev,
          nextEl: brandsSwiperNext,
        }"
        :loop="true"
        :pagination="{ clickable: true, el: brandsSwiperPagination }"
        :modules="modules"
        class="brands__content-swiper"
      >
        <SwiperSlide
          class="producers__items"
          v-for="(brandsPart, index) in brandsParts"
          :key="index"
        >
          <RouterLink
            :to="`/products?brand=${brand._id}`"
            class="producers__item"
            v-for="brand in brandsPart"
            :key="brand._id"
            :class="{ disabled: !brand.name }"
            >{{ brand.name }}</RouterLink
          >
        </SwiperSlide>
      </Swiper>
    </div>
    <div ref="brandsSwiperPagination" class="brands__pag mob"></div>
  </div>
  <div v-else>
    <div class="producers__items">
      <RouterLink
        v-for="(brand, index) in brands"
        :key="index"
        :to="`/products?brand=${brand._id}`"
        class="producers__item"
        :class="{ disabled: !brand.name }"
        >{{ brand.name }}</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.producers__items {
  display: flex;
  flex-wrap: wrap;
}

.disabled {
  pointer-events: none;
}

.producers__item {
  border: 1px solid #353535;
  width: 25%;
  height: 161px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #848485;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 0.2s;
}
.producers__item:hover {
  color: #f7ca60;
  opacity: 1;
}
.producers__item:nth-child(4n) {
  border-right: 1px solid transparent;
}
.producers__item:nth-child(4n + 1) {
  border-left: 1px solid transparent;
}
.producers__item:nth-child(-n + 4) {
  border-top: 1px solid transparent;
}
.producers__item:nth-last-child(-n + 4) {
  border-bottom: 1px solid transparent;
}
.brands__content {
  position: relative;
}
.brands__content-swiper {
  width: 100%;
  overflow-x: hidden;
}
.producers__left {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
}

.producers__right {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
}
@media only screen and (max-width: 600px) {
  .producers__left,
  .producers__right {
    display: none;
  }
  .producers__item {
    width: 50%;
    font-size: 22px;
    line-height: 110%;
    height: 90px;
    border: 1px solid #353535;
  }
  .producers__item:hover {
    color: #f7ca60;
    opacity: 1;
  }
  .producers__item:nth-child(-n + 4) {
    border-top: 1px solid #353535;
  }
  .producers__item:nth-last-child(-n + 4) {
    border-bottom: 1px solid #353535;
  }
  .producers__item:nth-last-child(-n + 2) {
    border-bottom: 1px solid transparent;
  }
  .producers__item:nth-child(2n) {
    border-right: 1px solid transparent;
  }
  .producers__item:nth-child(2n + 1) {
    border-left: 1px solid transparent;
  }
  .producers__item:nth-child(1) {
    border-top: 1px solid transparent;
  }
  .producers__item:nth-child(2) {
    border-top: 1px solid transparent;
  }
}
</style>
