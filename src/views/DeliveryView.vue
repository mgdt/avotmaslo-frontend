<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";
import DeliveryMap from "../components/icons/DeliveryMap.vue";
import DeliveryMapMob from "../components/icons/DeliveryMapMob.vue";

export default {
  components: {
    Header,
    Callback,
    Footer,
    DeliveryMap,
    DeliveryMapMob,
  },
};
</script>

<template>
  <div class="page-delivery">
    <img class="delivery__bg" src="../assets/img/delivery-bg.png" alt="" />
    <img src="../assets/img/blog/bg-2.png" alt="" class="delivery__bg-btm" />
    <Header />
    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">Доставка и оплата</span>
      </div>
    </section>

    <section class="delivery">
      <div class="container">
        <h1 class="delivery__title section__title">Доставка и оплата</h1>
        <div class="delivery__blocks">
          <div class="delivery__block">
            <h2 class="delivery__block-title">Как сделать заказ</h2>
            <p class="delivery__block-text">
              <span>Оформить заказ можно любым из перечисленных способов:</span>
            </p>
            <div class="delivery__list">
              <div class="delivery__list-item">
                <div class="delivery__list-circle"></div>
                <p class="delivery__list-text">
                  С помощью удобной корзины на сайте — выберите интересующий
                  товар и нажмите «Купить». После оформления заказа вам
                  перезвонит наш менеджер. Он уточнит детали заказа, и предложит
                  наиболее выгодные варианты доставки.
                </p>
              </div>
              <div class="delivery__list-item">
                <div class="delivery__list-circle"></div>
                <p class="delivery__list-text">
                  По телефону 8 (800) 350-36-05 — наш менеджер поможет выбрать
                  товар, ответит на любые вопросы и оформит заказ.
                </p>
              </div>
              <div class="delivery__list-item">
                <div class="delivery__list-circle"></div>
                <p class="delivery__list-text">
                  По электронной почте — вы можете отправить запрос на наш
                  email: info@avtomaslo-optom.ru указав список интересующих
                  товаров и ваш контактный телефон. Мы свяжемся с вами для
                  оформления заказа.
                </p>
              </div>
            </div>
            <p class="delivery__block-text">
              <span>
                Зарегистрировавшись на нашем сайте и оформляя заказ с помощью
                корзины, вы получаете возможность копить бонусы, участвуя в
                нашей <a href="#">бонусной программе.</a>
              </span>
            </p>
          </div>
          <div class="delivery__block">
            <h2 class="delivery__block-title">Как оплатить</h2>
            <p class="delivery__block-text">
              Вы можете выбрать наиболее удобные для вас условия оплаты: 100%
              предоплата, частичная предоплата, оплата при&nbsp;получении или
              оформить рассрочку. Оплата возможна как банковской картой, так и
              по безналичному расчету (с&nbsp;НДС&nbsp;или&nbsp;без НДС ).
            </p>
          </div>
          <div class="delivery__block">
            <h2 class="delivery__block-title">Как происходит доставка</h2>
            <p class="delivery__block-text">
              Мы отправляем заказы с помощью транспортных компаний. При
              оформлении заказа наш менеджер подберет для вас наиболее выгодный
              и быстрый вариант доставки. По вашему желанию мы можем отправить
              заказ любой транспортной компанией.<br />
              <br />
              <span
                >Отгрузка товаров осуществляется на следующий день после
                оплаты.</span
              >
            </p>
          </div>
          <div class="delivery__block">
            <h2 class="delivery__block-title">
              В какие города осуществляем доставку
            </h2>
            <p class="delivery__block-text">
              Работаем по всей России.
              <span>Доставка возможна в любой город.</span>
            </p>
            <div class="delivery__map">
              <DeliveryMap />
            </div>
            <div class="delivery__map-mob mob">
              <DeliveryMapMob />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/delivery.css"></style>
