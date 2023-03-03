<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";
import { useBlogStore } from "@/stores/blog";
import { onMounted, ref, watch, computed } from "vue";

export default {
  components: {
    Header,
    Callback,
    Footer,
  },
  setup() {
    const blogStore = useBlogStore();

    function formatDate(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month =
        date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
      const day =
        date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;

      return `${day}.${month}.${year}`;
    }

    const currentPage = ref(1);
    const perPage = 6;
    const limit = ref(6);

    const slicedArticles = computed(() => {
      const start = (currentPage.value - 1) * limit.value;
      const end = currentPage.value * limit.value;
      return blogStore.articles.slice(start, end);
    });

    const pagesCount = computed(() => {
      return Math.ceil(blogStore.articles.length / limit.value);
    });

    watch(
      () => blogStore.articles,
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

    onMounted(async () => {
      await blogStore.fetchArticles();
    });

    return {
      blogStore,
      currentPage,
      limit,
      slicedArticles,
      pagesCount,
      perPage,
      formatDate,
    };
  },
};
</script>

<template>
  <div class="page-blog">
    <img src="../assets/img/blog/bg-1.png" alt="" class="blog__bg-top" />
    <img src="../assets/img/blog/bg-2.png" alt="" class="blog__bg-btm" />

    <Header />

    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">Блог</span>
      </div>
    </section>

    <section class="blog">
      <div class="container">
        <h1 class="section__title blog__title">
          <span>Блог компании</span>
        </h1>
        <div class="blog__items">
          <RouterLink
            :to="`/article/${article.slug}`"
            class="blog__item"
            v-for="article in slicedArticles"
            :key="article._id"
          >
            <img
              :src="blogStore.getImageUrl(article)"
              alt=""
              class="blog__item-img"
            />
            <div class="blog__item-date">
              {{ formatDate(article.createdAt) }}
            </div>
            <h3 class="blog__item-title">
              {{ article.title }}
            </h3>
            <div class="blog__item-link">Читать статью</div>
          </RouterLink>
        </div>
        <div class="blog__nav" v-show="blogStore.articles.length > limit">
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
          <button @click="limit += perPage" class="blog__button btn-primary">
            Показать больше
          </button>
        </div>
      </div>
    </section>

    <Callback />

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/blog.css"></style>
