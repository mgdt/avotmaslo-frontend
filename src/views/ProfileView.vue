<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

import "swiper/css";

export default {
  components: {
    Header,
    Callback,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const oldPasswordShown = ref(false);
    const passwordShown = ref(false);
    const repeatPasswordShown = ref(false);

    const favSwiperNext = ref(null);
    const favSwiperPrev = ref(null);
    const favSwiperBreakpoins = ref({
      slidesPerView: 1,
    });

    if (document.documentElement.offsetWidth > 600) {
      favSwiperBreakpoins.value.slidesPerView = 2;
    }

    onMounted(() => {
      function progressView() {
        let diagramBox = document.querySelectorAll(".diagram.progress");
        diagramBox.forEach((box) => {
          let deg = (360 * box.dataset.percent) / 100 + 180;
          if (box.dataset.percent >= 50) {
            box.classList.add("over_50");
          } else {
            box.classList.remove("over_50");
          }
          box.querySelector(".piece.right").style.transform =
            "rotate(" + deg + "deg)";
        });
      }
      progressView();
    });

    return {
      oldPasswordShown,
      passwordShown,
      repeatPasswordShown,
      favSwiperBreakpoins,
      modules: [Navigation],
      favSwiperNext,
      favSwiperPrev,
    };
  },
};
</script>

<template>
  <div class="page-profile">
    <Header />

    <img src="../assets/img/blog/bg-2.png" alt="" class="profile__bg-btm" />

    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">Личный кабинет</span>
      </div>
    </section>

    <section class="profile">
      <div class="container">
        <h1 class="profile__title section__title">Личный кабинет</h1>
        <div class="profile__content">
          <div class="profile__left">
            <div class="profile__block profile__personal">
              <div class="profile__block-top">
                <h3 class="profile__block-title">Личные данные</h3>
                <img
                  src="../assets/img/profile/edit.svg"
                  alt=""
                  class="profile__edit"
                />
              </div>
              <div class="profile__person">
                <img
                  src="../assets/img/profile/photo.png"
                  alt=""
                  class="profile__photo"
                />
                <div class="profile__name">
                  Алексей<br />
                  Иванов
                </div>
              </div>
              <div class="profile__city">
                <div class="profile__block-key">Город:</div>
                <div class="profile__block-value">Казань</div>
              </div>
              <div class="profile__phone">
                <div class="profile__block-key">Телефон:</div>
                <div class="profile__block-value">8 (951) 063 25 05</div>
              </div>
              <div class="profile__exit">
                <a class="profile__link">Выйти из профиля</a>
              </div>
            </div>

            <div class="profile__block profile__addresses">
              <div class="profile__block-top">
                <h3 class="profile__block-title">Адреса доставки</h3>
                <img
                  src="../assets/img/profile/edit.svg"
                  alt=""
                  class="profile__edit"
                />
              </div>
              <div class="profile__block-addresses">
                <div class="profile__address active">
                  <div class="profile__address-circle"></div>
                  <p>г. Казань, ул. Чистопольская 75</p>
                </div>
                <div class="profile__address">
                  <div class="profile__address-circle"></div>
                  <p>г. Москва, ул. Смоленская 35</p>
                </div>
              </div>
            </div>

            <div class="profile__block profile__password">
              <div class="profile__block-top">
                <h3 class="profile__block-title">Сменить пароль</h3>
              </div>
              <div class="profile__block-password">
                <div class="profile__input">
                  <input
                    :type="oldPasswordShown ? 'text' : 'password'"
                    placeholder="Старый пароль"
                  />
                  <img
                    @click="oldPasswordShown = true"
                    src="../assets/img/profile/eye-closed.svg"
                    alt=""
                  />
                  <img
                    @click="oldPasswordShown = false"
                    src="../assets/img/profile/eye-opened.svg"
                    alt=""
                  />
                </div>
                <div class="profile__input">
                  <input
                    :type="passwordShown ? 'text' : 'password'"
                    placeholder="Новый пароль"
                  />
                  <img
                    @click="passwordShown = true"
                    src="../assets/img/profile/eye-closed.svg"
                    alt=""
                  />
                  <img
                    @click="passwordShown = false"
                    src="../assets/img/profile/eye-opened.svg"
                    alt=""
                  />
                </div>
                <div class="profile__input">
                  <input
                    :type="repeatPasswordShown ? 'text' : 'password'"
                    placeholder="Повторите пароль"
                  />
                  <img
                    @click="repeatPasswordShown = true"
                    src="../assets/img/profile/eye-closed.svg"
                    alt=""
                  />
                  <img
                    @click="repeatPasswordShown = false"
                    src="../assets/img/profile/eye-opened.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="profile__password-change">
                <a class="profile__link">Сохранить новый пароль</a>
              </div>
            </div>
          </div>
          <div class="profile__right">
            <div class="profile__block profile__orders">
              <div class="profile__orders-title mob">Мои заказы</div>
              <div class="profile__orders-select mob">
                <select>
                  <option selected>Все заказы: 17</option>
                  <option>Выполненные заказы: 12</option>
                  <option>Заказы в работе: 5</option>
                </select>
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6.5 7L12 1"
                    stroke="#F7CA60"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div class="profile__orders-wrap">
                <div class="profile__orders-inner">
                  <div class="profile__block-top">
                    <h3 class="profile__block-title">Мои заказы</h3>
                    <div class="profile__orders-categories">
                      <div class="profile__orders-category">Все заказы: 17</div>
                      <div class="profile__orders-category active">
                        Выполненные заказы: 12
                      </div>
                      <div class="profile__orders-category">
                        Заказы в работе: 5
                      </div>
                    </div>
                  </div>
                  <div class="profile__orders-labels">
                    <div class="profile__orders-label">Номер заказа</div>
                    <div class="profile__orders-label">Дата заказа</div>
                    <div class="profile__orders-label">Кол-во товаров</div>
                    <div class="profile__orders-label">Статус заказа</div>
                    <div class="profile__orders-label">Общая сумма</div>
                  </div>
                  <div class="profile__orders-items">
                    <div class="profile__order">
                      <div class="profile__order-text">257-658</div>
                      <div class="profile__order-text">16.11.2022</div>
                      <div class="profile__order-text">8 шт.</div>
                      <div class="profile__order-text">Доставлен</div>
                      <div class="profile__order-text">300.000 ₽</div>
                    </div>
                    <div class="profile__order">
                      <div class="profile__order-text">257-658</div>
                      <div class="profile__order-text">16.11.2022</div>
                      <div class="profile__order-text">8 шт.</div>
                      <div class="profile__order-text">Доставлен</div>
                      <div class="profile__order-text">300.000 ₽</div>
                    </div>
                    <div class="profile__order">
                      <div class="profile__order-text">257-658</div>
                      <div class="profile__order-text">16.11.2022</div>
                      <div class="profile__order-text">8 шт.</div>
                      <div class="profile__order-text">Доставлен</div>
                      <div class="profile__order-text">300.000 ₽</div>
                    </div>
                    <div class="profile__order">
                      <div class="profile__order-text">257-658</div>
                      <div class="profile__order-text">16.11.2022</div>
                      <div class="profile__order-text">8 шт.</div>
                      <div class="profile__order-text">Доставлен</div>
                      <div class="profile__order-text">300.000 ₽</div>
                    </div>
                    <div class="profile__order">
                      <div class="profile__order-text">257-658</div>
                      <div class="profile__order-text">16.11.2022</div>
                      <div class="profile__order-text">8 шт.</div>
                      <div class="profile__order-text">Доставлен</div>
                      <div class="profile__order-text">300.000 ₽</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="profile__right-btm">
              <div class="profile__block profile__fav">
                <div class="profile__block-top">
                  <h3 class="profile__block-title">Избранное</h3>
                  <div class="profile__block-arrows">
                    <img
                      class="profile__arrow-left"
                      src="../assets/img/profile/arrow.svg"
                      alt=""
                      ref="favSwiperPrev"
                    />
                    <img
                      class="profile__arrow-right"
                      src="../assets/img/profile/arrow.svg"
                      alt=""
                      ref="favSwiperNext"
                    />
                  </div>
                </div>
                <Swiper
                  :modules="modules"
                  :spaceBetween="20"
                  :slidesPerView="favSwiperBreakpoins.slidesPerView"
                  :navigation="{
                    prevEl: favSwiperPrev,
                    nextEl: favSwiperNext,
                  }"
                  class="profile__fav-items"
                >
                  <SwiperSlide
                    class="profile__fav-item"
                    v-for="(slide, index) in [1, 2, 3, 4]"
                    :key="index"
                  >
                    <div class="profile__fav-img">
                      <img
                        src="../assets/img/profile/barrel.png"
                        alt=""
                        class=""
                      />
                      <svg
                        class="profile__fav-shadow"
                        width="87"
                        height="12"
                        viewBox="0 0 87 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="43.0994"
                          cy="6.1228"
                          rx="43.0994"
                          ry="5.87719"
                          fill="#090909"
                        />
                      </svg>
                    </div>
                    <p>Моторное масло Mobil SUPER 2000 X1 10W-40</p>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="profile__block profile__bonuses">
                <div class="profile__block-top">
                  <h3 class="profile__block-title">Мои бонусы</h3>
                </div>
                <div class="profile__block-bonuses">
                  <div class="diagram progress" data-percent="70">
                    <div class="piece left"></div>
                    <div class="piece right"></div>
                    <div class="text">
                      <div>
                        <b>70</b>
                        <span>баллов</span>
                      </div>
                    </div>
                  </div>
                  <div class="profile__bonuses-text">
                    Баллами можно оплатить<br />
                    до 10% от стоимости заказа.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/profile.css"></style>
