<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Callback,
    Footer,
  },
};
</script>

<template>
  <div class="page-404">
    <Header />
    <div class="notfound">
      <img src="../assets/img/test.png" class="notfound__bg" alt="" />
      <div class="notfound__text">
        Страница, которую вы ищете не существует,<br />
        либо она перемещена по другому адресу
      </div>
      <RouterLink to="/" class="notfound__btn btn-primary"
        >Вернуться на Главную</RouterLink
      >
    </div>
    <Footer />
  </div>
</template>
