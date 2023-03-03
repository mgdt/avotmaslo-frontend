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
  <div class="page-contacts">
    <img src="../assets/img/blog/bg-2.png" alt="" class="contacts__bg-btm" />

    <Header />

    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">Контакты</span>
      </div>
    </section>

    <section class="contacts">
      <div class="container">
        <div class="section__title contacts__title">
          <span>Контакты</span>
        </div>
        <div class="contacts__content">
          <img
            src="../assets/img/contacts/map-mob.svg"
            alt=""
            class="contacts__map-mob mob"
          />
          <img
            class="contacts__map"
            src="../assets/img/contacts/map.svg"
            alt=""
          />
          <div class="contacts__circle-1"></div>
          <div class="contacts__circle-2"></div>
          <div class="contacts__circle-3"></div>
          <div class="contacts__circle-4"></div>
          <div class="contacts__circle-5"></div>
          <div class="contacts__circle-6"></div>
          <div class="contacts__section">
            <div class="contacts__label">Телефоны:</div>
            <div class="contacts__items">
              <div class="contacts__item contacts__item--img">
                <img src="../assets/img/contacts/phone.svg" alt="" />
                <span>8 (800) 350-36-05</span>
              </div>
              <div class="contacts__item">
                <span>8 (969) 777-45-96</span>
              </div>
            </div>
          </div>
          <div class="contacts__section">
            <div class="contacts__label">E-mail:</div>
            <div class="contacts__items">
              <div class="contacts__item contacts__item--img">
                <img src="../assets/img/contacts/envelope.svg" alt="" />
                <span>info@avtomaslo-optom.ru</span>
              </div>
            </div>
          </div>
          <div class="contacts__section">
            <div class="contacts__label">Реквизиты:</div>
            <div class="contacts__items">
              <div class="contacts__item contacts__item--img">
                <img src="../assets/img/contacts/doc.svg" alt="" />
                <span>ИП Капинос Евгения Сергеевна, ИНН 632411199769</span>
              </div>
              <div class="contacts__item">
                <span>ИП Лукоянова Татьяна Игоревна, ИНН 781141304290</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Callback />

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/contacts.css"></style>
