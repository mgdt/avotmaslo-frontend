<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";
import CategoryList from "../components/CategoryList.vue";
import BrandList from "../components/BrandList.vue";

export default {
  components: {
    Header,
    Callback,
    Footer,
    CategoryList,
    BrandList,
  },
};
</script>

<template>
  <div class="page-catalog">
    <img src="../assets/img/catalog/bg-3.png" alt="" class="bg-3" />
    <div class="bg-1">
      <div class="bg-1-inner">
        <div class="bg-1-overlay"></div>
        <img src="../assets/img/catalog/bg-1.png" alt="" />
      </div>
    </div>
    <img
      src="../assets/img/main/bg-car-mob.png"
      alt=""
      class="producers__bg mob"
    />

    <Header />

    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">Каталог</span>
      </div>
    </section>

    <section class="producers">
      <div class="container">
        <h2 class="producers__title section__title">Производители</h2>
        <BrandList />
      </div>
    </section>

    <section class="catalog">
      <img src="../assets/img/catalog/bg-2.png" class="bg-2" alt="" />
      <div class="container">
        <h2 class="catalog__title section__title">
          <span>Каталог</span> товаров
        </h2>
        <p class="catalog__subtitle">
          Интернет-магазин «АвтоМасло Оптом» осуществляет продажу
          любых&nbsp;типов масел в бочках для легкового и коммерческого
          транспорта.
        </p>
        <div class="catalog__description">
          <p class="catalog__text">
            В нашем каталоге представлена только оригинальная продукция:
            моторные, гидравлические, трансмиссионные,<br />
            редукторные масла и другие технические жидкости ведущих брендов от
            официальных производителей.
          </p>
          <p class="catalog__text">
            <span>Мы работаем с 2013 года</span> и можем гарантировать
            высочайшее качество продукции, подтвержденное<br />
            сертификатами, а также минимальные цены и выгодную систему бонусов
            для наших постоянных клиентов.
          </p>
        </div>
        <CategoryList />
      </div>
    </section>

    <Callback />

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/catalog.css"></style>
