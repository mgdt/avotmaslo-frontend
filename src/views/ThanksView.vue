<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <div class="page-thanks">
    <img class="thanks__bg" src="../assets/img/thanks-bg.png" alt="" />
    <Header />
    <div class="thanks">
      <h1 class="thanks__title">Спасибо за вашу заявку!</h1>
      <p class="thanks__subtitle">
        Мы ознакомимся с вашей заявкой <span>и&nbsp;свяжемся с вами</span><br />
        по указанному телефону в ближайшее время
      </p>
      <a href="/" class="thanks__link btn-primary">Вернуться на Главную</a>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.page-thanks {
  position: relative;
}
.thanks__bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 1000px;
  z-index: -1;
}
.thanks {
  padding-top: 150px;
  padding-bottom: 150px;
  position: relative;
  z-index: 2;
}
.thanks__title {
  font-weight: 700;
  font-size: 50px;
  line-height: 110%;
  text-align: center;
  color: #ffffff;
  margin-bottom: 25px;
}
.thanks__subtitle {
  font-weight: 400;
  font-size: 24px;
  line-height: 135%;
  text-align: center;
  color: #ffffff;
  margin-bottom: 50px;
}
.thanks__subtitle span {
  color: #f7ca60;
  font-weight: bold;
}
.thanks__link {
  text-decoration: none;
  width: 416px;
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .thanks {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .thanks__subtitle {
    font-size: 18px;
  }
  .thanks__subtitle br {
    display: none;
  }
  .thanks__title {
    font-size: 30px;
  }
  .thanks__link {
    max-width: 100%;
  }
}
</style>
