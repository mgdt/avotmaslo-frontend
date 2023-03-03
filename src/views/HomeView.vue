<script>
import { ref, onMounted, onBeforeMount } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Callback from "../components/Callback.vue";
import CategoryList from "@/components/CategoryList.vue";
import BrandList from "@/components/BrandList.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { useSertsStore } from "@/stores/serts";
import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
import { formatNumber } from "@/helpers";
import Lightbox from "vue-my-photos";
import { useUiStore } from "@/stores/ui";

import { useNotification } from "@kyvg/vue3-notification";

import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Header,
    Footer,
    Callback,
    Swiper,
    SwiperSlide,
    CategoryList,
    BrandList,
    Lightbox,
  },
  setup() {
    const uiStore = useUiStore();
    const { notify } = useNotification();

    const bestItems = ref([]);
    const bestSwiperPrev = ref(null);
    const bestSwiperNext = ref(null);
    const bestSwiperPagination = ref(null);
    const bestSwiperBreakpoints = ref({
      slidesPerView: 1,
      spaceBetween: 20,
      loopedSlides: 2,
    });

    const sertsSwiperPrev = ref(null);
    const sertsSwiperNext = ref(null);
    const sertsSwiperPagination = ref(null);
    const sertsSwiperBreakpoints = ref({
      slidesPerView: 1,
      spaceBetween: 17,
      loopedSlides: 2,
    });

    if (document.documentElement.offsetWidth > 600) {
      bestSwiperBreakpoints.value.slidesPerView = 4;
      bestSwiperBreakpoints.value.spaceBetween = 30;
      bestSwiperBreakpoints.value.loopedSlides = 0;

      sertsSwiperBreakpoints.value.slidesPerView = 4;
      sertsSwiperBreakpoints.value.spaceBetween = 30;
      sertsSwiperBreakpoints.value.loopedSlides = 0;
    }

    const productsStore = useProductsStore();
    const cartStore = useCartStore();
    const sertsStore = useSertsStore();

    function handleAddCart(product) {
      if (product.stock > 0) {
        cartStore.addToCart(product, 1);
        notify({
          title: "Добавлено",
          text: `Добавлено ${product.name} ${1} шт. в корзину`,
          type: "success",
        });
      } else {
        notify({
          title: "Ошибка",
          text: `Нет в наличии`,
          type: "error",
        });
      }
    }

    const currentImageName = ref("");
    const sertsImages = ref([]);
    const myLightbox = ref(null);

    function openLightBox(imageUrl) {
      currentImageName.value = imageUrl;
      myLightbox.value.show();
    }

    function closeLightBox() {
      currentImageName.value = "";
    }

    const sertsArr = ref([]);

    onBeforeMount(async () => {
      bestItems.value = await productsStore.fetchBestProducts();
      sertsArr.value = await sertsStore.getSerts();

      await sertsStore.fetchSerts();

      const sertsItems = [];
      sertsArr.value.forEach((item) => {
        sertsItems.push({
          name: productsStore.getImageUrl(item),
        });
      });
      sertsImages.value = sertsItems;
    });

    function handleSerstSwiper(val) {
      console.log(val);
    }

    return {
      modules: [Navigation, Pagination],
      bestSwiperBreakpoints,
      bestSwiperPrev,
      bestSwiperNext,
      bestSwiperPagination,
      sertsSwiperPrev,
      sertsSwiperNext,
      sertsSwiperPagination,
      sertsSwiperBreakpoints,
      productsStore,
      bestItems,
      formatNumber,
      handleAddCart,
      handleSerstSwiper,
      uiStore,
      sertsStore,
      currentImageName,
      sertsImages,
      openLightBox,
      closeLightBox,
      myLightbox,
    };
  },
};
</script>

<template>
  <div class="page-main">
    <Lightbox
      id="myLightbox"
      ref="myLightbox"
      @on-lightbox-close="closeLightBox"
      :currentImageName="currentImageName"
      :images="sertsImages"
      :filter="'all'"
    />
    <notifications />

    <img src="../assets/img/blog/bg-2.png" alt="" class="main__bg-btm" />
    <div class="intro-bg">
      <div class="intro-bg__inner">
        <img
          class="intro-bg__img"
          src="../assets/img/main/intro-bg.png"
          alt=""
        />
        <div class="intro-bg__overlay"></div>
      </div>
    </div>

    <Header />

    <section class="intro">
      <img
        class="intro__img-mob mob"
        src="../assets/img/main/intro-img-mob.png"
        alt=""
      />
      <div class="container">
        <h1 class="intro__title">
          Оригинальные автомобильные масла <span>ОПТОМ</span>
        </h1>
        <h2 class="intro__subtitle">Бесплатная доставка в Санкт-Петербург</h2>
        <p class="intro__text">
          <span>
            Покупайте бочку <b>на 3 000 рублей&nbsp;дешевле!</b><br />
          </span>
          <span>
            Заработайте <b>на 300% больше,</b>&nbsp;чем&nbsp;обычно!<br />
          </span>
          <span>
            Полный пакет документов с&nbsp;каждой&nbsp;бочкой.<br />
          </span>
        </p>
        <div class="intro__btm">
          <button
            @click="uiStore.togglePopupCallback(true)"
            class="intro__btn btn-primary"
          >
            Получить прайс-лист
          </button>
          <div class="intro__note">
            <div class="intro__circle">
              <div class="intro__circle-inner"></div>
              <img src="../assets/img/main/intro-docs.png" alt="" />
            </div>
            <p class="intro__note-text">
              Пройдите тест и получите прайс и&nbsp;бесплатную доставку в
              подарок!
            </p>
          </div>
        </div>
        <img src="../assets/img/main/intro-img.png" alt="" class="intro__img" />
      </div>
    </section>

    <section class="best">
      <div class="best__bg">
        <div class="best__bg-inner">
          <img
            src="../assets/img/main/best-bg.png"
            alt=""
            class="best__bg-img"
          />
          <div class="best__bg-overlay"></div>
        </div>
      </div>
      <div class="container">
        <h2 class="best__title section__title">
          <span>Лучшие</span> предложения
        </h2>
        <div class="best__items">
          <img
            src="../assets/img/main/arrow-left.svg"
            alt=""
            class="best__items-left"
            ref="bestSwiperPrev"
          />
          <img
            src="../assets/img/main/arrow-right.svg"
            alt=""
            class="best__items-right"
            ref="bestSwiperNext"
          />
          <Swiper
            v-if="bestItems.length"
            :loop="true"
            :slidesPerView="bestSwiperBreakpoints.slidesPerView"
            :spaceBetween="bestSwiperBreakpoints.spaceBetween"
            :loopedSlides="bestSwiperBreakpoints.loopedSlides"
            :navigation="{
              prevEl: bestSwiperPrev,
              nextEl: bestSwiperNext,
            }"
            :pagination="{ clickable: true, el: bestSwiperPagination }"
            :modules="modules"
            class="best__items-swiper"
          >
            <SwiperSlide v-for="(slide, index) in bestItems" :key="index">
              <div class="products__item">
                <div class="products__item-img">
                  <img :src="productsStore.getImageUrl(slide)" alt="" />
                  <img
                    src="../assets/img/products/shadow.svg"
                    alt=""
                    class="products__item-shdaow"
                  />
                </div>
                <h3 class="products__item-title">
                  {{ slide.name }}
                </h3>
                <div class="products__item-price">
                  {{ formatNumber(slide.price) }} ₽
                </div>
                <div class="products__item-volume">
                  Объем: {{ slide.volume }} л.
                </div>
                <button
                  @click="handleAddCart(slide)"
                  class="products__item-btn"
                >
                  В корзину
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div ref="bestSwiperPagination" class="best__pag mob"></div>
      </div>
    </section>

    <section class="brands">
      <img src="../assets/img/main/bg-car.png" alt="" class="brands__bg" />
      <img
        src="../assets/img/main/bg-car-mob.png"
        alt=""
        class="brands__bg-mob mob"
      />
      <div class="container">
        <h2 class="brands__title section__title">
          <span>Бренды,</span> представленные в&nbsp;нашем интернет-магазине
        </h2>
        <BrandList :mainPage="true" />
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

    <section class="how">
      <div class="container">
        <h2 class="section__title how__title">Как мы <span>работаем?</span></h2>
        <ul class="how__list">
          <li class="how__item">
            <span class="how-item__number">01</span>
            <h3 class="how-item__title">Заявка</h3>
            <p class="how-item__text mobile-none">
              От заявки до звонка 60&nbsp;секунд.<br />
              Проверьте сами!
            </p>
            <img
              class="how-item__img img-1"
              src="../assets/img/how/how-img01.png"
            />
          </li>
          <li class="how__item">
            <span class="how-item__number">02</span>
            <h3 class="how-item__title">Детали</h3>
            <p class="how-item__text">
              Расчет цены менеджером,<br />
              согласование условий доставки.<br />
              Мы очень внимательны и ответственны!
            </p>
            <img
              class="how-item__img img-2"
              src="../assets/img/how/how-img02.png"
            />
          </li>
          <li class="how__item">
            <span class="how-item__number">03</span>
            <h3 class="how-item__title">Договор</h3>
            <p style="position: relative; z-index: 3" class="how-item__text">
              С договором вам будет еще спокойнее<br />
              и все переживания на счет поставки<br />
              просто исчезнут из вашей головы.
            </p>
            <img
              class="how-item__img img-3"
              src="../assets/img/how/how-img04.png"
            />
          </li>
          <li class="how__item">
            <span class="how-item__number">04</span>
            <h3 class="how-item__title">Доставка</h3>
            <p class="how-item__text">
              Сами забирем со склада, отвезем в<br />
              транспортную компанию, оформим,<br />
              проконтролируем и напомним о том,<br />
              что груз&nbsp;уже приехал.
            </p>
            <img
              class="how-item__img img-4"
              src="../assets/img/how/how-img03.png"
            />
          </li>
          <li class="how__item">
            <span class="how-item__number">05</span>
            <h3 class="how-item__title">Подход</h3>
            <p class="how-item__text">
              Мы давно работаем и можем угадать<br />
              ваши мысли, фото бочек, накладные,<br />
              подарки, скидки, и отдел контроля<br />
              качества товара.<br />
              И даже готовы поделится клиентами<br />
              для увеличения вашей прибыли!
            </p>
            <img
              class="how-item__img img-5"
              src="../assets/img/how/how-img05.png"
            />
          </li>
          <li class="how__item">
            <span class="how-item__number">06</span>
            <h3 class="how-item__title">VIP клуб</h3>
            <p class="how-item__text">
              После первой покупки вы попадаете в VIP клуб.<br />
              Личный менеджер готов обсудить с вами<br />
              любые вопросы. Также, вас ждет: подарки на<br />
              день рождения и важные для вас праздники,<br />
              участие в розыгрышах, гибкая система оплат<br />
              и конечно же, постоянные скидки.
            </p>
            <img
              class="how-item__img img-6"
              src="../assets/img/how/how-img06.png"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="why">
      <div class="why__bg">
        <div class="why__bg-inner">
          <img src="../assets/img/main/why-bg.png" alt="" class="why__bg-img" />
          <div class="why__bg-overlay"></div>
        </div>
      </div>
      <img
        src="../assets/img/main/why-bg-mob.png"
        alt=""
        class="why__bg-mob mob"
      />
      <div class="container">
        <h2 class="why__title section__title">
          <span>Почему</span> заказывают у нас?
        </h2>
        <div class="why__items">
          <div class="why__item">
            <div class="why__item-circle">
              <img src="../assets/img/main/why-1.png" alt="" />
              <div class="why__irem-shadow"></div>
            </div>
            <p class="why__item-text">
              <span>Быстрая доставка</span><br />
              во все города России
            </p>
          </div>
          <div class="why__item">
            <div class="why__item-circle">
              <img src="../assets/img/main/why-2.png" alt="" />
              <div class="why__irem-shadow"></div>
            </div>
            <p class="why__item-text">
              <span
                >Подлинность продукции<br />
                подтверждена</span
              >
              независимыми<br />
              экспертизами
            </p>
          </div>
          <div class="why__item">
            <div class="why__item-circle">
              <img src="../assets/img/main/why-3.png" alt="" />
              <div class="why__irem-shadow"></div>
            </div>
            <p class="why__item-text">
              <span>Гибкая система бонусов</span><br />
              для постоянных клиентов
            </p>
          </div>
        </div>
        <RouterLink class="why__btn btn-primary" to="/products"
          >ВЫБРАТЬ МАСЛО</RouterLink
        >
      </div>
    </section>

    <section class="bonus">
      <div class="container">
        <div class="bonus__content">
          <img
            src="../assets/img/main/bonus-img.png"
            alt=""
            class="bonus__img"
          />
          <img
            src="../assets/img/main/bonus-img-mob.png"
            alt=""
            class="bonus__img-mob mob"
          />
          <img
            src="../assets/img/main/bonus-top-left.png"
            alt=""
            class="bonus__top-left"
          />
          <img
            src="../assets/img/main/bonus-top-right.png"
            alt=""
            class="bonus__top-right"
          />
          <img
            src="../assets/img/main/bonus-btm-right.png"
            alt=""
            class="bonus__btm-right"
          />
          <div class="bonus__left">
            <div class="bonus__left-top">
              <h2 class="bonus__title">Бонусная программа</h2>
              <h3 class="bonus__subtitle">
                Для наших клиентов действует система бонусов.
              </h3>
              <p class="bonus__text">
                Бонусные баллы начисляются за каждый заказ. Чтобы получить
                возможность накапливать и тратить баллы, необходимо завести
                личный кабинет.
              </p>
            </div>
            <div class="bonus__left-middle">
              <h3 class="bonus__subtitle">Как начисляются баллы:</h3>
              <div class="bonus__list">
                <div class="bonus__list-item">
                  <div class="bonus__list-line"></div>
                  <p class="bonus__text">
                    приветственный бонус за регистрацию —
                    <span>50 баллов;</span>
                  </p>
                </div>
                <div class="bonus__list-item">
                  <div class="bonus__list-line"></div>
                  <p class="bonus__text">
                    за каждый выполненный заказ начисляется количество баллов
                    равное <span>1% от стоимости товара</span>
                    с округлением до&nbsp;целого в&nbsp;меньшую сторону.
                  </p>
                </div>
              </div>
            </div>
            <div class="bonus__left-btm">
              <p class="bonus__text-gray">
                Баллами можно оплатить до 10% от&nbsp;стоимости заказа.<br />
                Посмотреть накопленное количество баллов и&nbsp;обменять их
                на<br />
                промо-код можно&nbsp;в личном кабинете в&nbsp;разделе «Мои
                бонусы».
              </p>
            </div>
            <button class="btn-primary bonus__btn">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </section>

    <div class="serts">
      <div class="container">
        <h2 class="serts__title section__title">
          Подлинность продукции подтверждена<br />
          <span>независимыми экспертизами</span>
        </h2>
        <div class="serts__items">
          <img
            src="../assets/img/main/serts-left.svg"
            alt=""
            class="serts__left"
            ref="sertsSwiperPrev"
          />
          <img
            src="../assets/img/main/serts-right.svg"
            alt=""
            class="serts__right"
            ref="sertsSwiperNext"
          />
          <Swiper
            v-if="sertsImages.length > 0"
            class="serts__items-swiper"
            :modules="modules"
            :navigation="{
              prevEl: sertsSwiperPrev,
              nextEl: sertsSwiperNext,
            }"
            :pagination="{ clickable: true, el: sertsSwiperPagination }"
            :loop="true"
            :loopedSlides="sertsSwiperBreakpoints.loopedSlides"
            :slidesPerView="sertsSwiperBreakpoints.slidesPerView"
            :spaceBetween="sertsSwiperBreakpoints.spaceBetween"
            @swiper="handleSerstSwiper"
          >
            <SwiperSlide v-for="(image, index) in sertsImages" :key="image._id">
              <img
                :src="image.name"
                alt=""
                class="serts__item"
                @click="openLightBox(image.name)"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="serts__pag" ref="sertsSwiperPagination"></div>
      </div>
    </div>

    <Callback />

    <Footer />
  </div>
</template>

<style scoped src="../assets/css/main.css"></style>
<style>
.lightbox-image-container {
  padding: 30px;
}
</style>
