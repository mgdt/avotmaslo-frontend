<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";
import { useRoute } from "vue-router";
import { useBlogStore } from "@/stores/blog";
import { onMounted, ref } from "vue";

export default {
  components: {
    Header,
    Callback,
    Footer,
  },
  setup() {
    const route = useRoute();
    const blogStore = useBlogStore();
    const article = ref({});

    function formatDate(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month =
        date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
      const day =
        date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;

      return `${day}.${month}.${year}`;
    }

    onMounted(async () => {
      article.value = await blogStore.fetchArticleBySlug(route.params.slug);
    });

    return {
      article,
      formatDate,
    };
  },
};
</script>

<template>
  <div class="page-article">
    <img class="bg-mob mob" src="../assets/img/article/bg-mob.png" alt="" />
    <div class="top-bg">
      <div class="top-bg__inner">
        <img
          class="article__bg-top"
          src="../assets/img/article/top-bg.png"
          alt=""
        />
        <div class="top-bg__overlay"></div>
      </div>
    </div>
    <img class="btm-bg" src="../assets/img/article/btm-bg.png" alt="" />

    <Header />

    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <RouterLink to="/blog" class="breadcrumbs__link">Блог</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">{{ article.title }}</span>
      </div>
    </section>

    <section class="article">
      <div class="container">
        <h1 class="article__title section__title">
          {{ article.title }}
        </h1>
        <div class="article__content">
          <div class="article__date">{{ formatDate(article.createdAt) }}</div>
          <div v-html="article.content"></div>
          <!-- <div class="article__paragraph">
            <p class="article__text">
              Ну что, коллеги, ждете наплыв клиентов, желающих подготовить свое
              авто к холодами и сменить моторное масло? Наверняка ждете! А чтобы
              облегчить вам жизнь и избавить от сомнений и вопросов, мы
              подготовили эту статью, в которой расскажем, какое масло надо лить
              на зиму и почему. Погнали!
            </p>
          </div>
          <div class="article__paragraph">
            <h2 class="article__content-title">
              Зачем вообще менять масло перед зимой
            </h2>
            <p class="article__text">
              Если ты работаешь в регионе с резкой сменой климата, с
              похолоданием к тебе всегда выстраивается очередь автолюбителей,
              желающих поменять масло. И это здорово! Значит люди умны и знают,
              что масло, отработавшее больше половины своего ресурса, теряет
              изначальную термостойкость и не сможет полноценно защитить мотор в
              сильные холода. Так что обновить лубрикант к началу зимы —
              отличная идея. Сохранившее текучесть, масло снижает трение в ДВС и
              позволяет экономить на топливе.
            </p>
            <p class="article__text">
              Если к тебе на сервис заехал обладатель турбированного движка,
              обязательно предложи ему залить свежее масло перед началом
              холодов. Слишком густое или загрязненное масло может вызвать
              масляное голодание и снизить теплоотвод. Это приведет к поломке
              улитки, а штуковина эта редко когда попадает под гарантию, так что
              влетит в копеечку. Для таких ребят отлично пойдет моторное масло
              <a href="#">Shell Helix HX8 Syn 5W-40.</a>
            </p>
          </div>
          <div class="article__paragraph article__paragraph--img">
            <div>
              <h2 class="article__content-title">
                Зачем вообще менять масло перед зимой
              </h2>
              <p class="article__text">
                Выбирать предстоит между минеральным, полусинтетическим и
                синтетическим маслами. Минеральные не очень-то хорошо себя
                показывают в холодное время, они густеют и плохо прокачиваются в
                момент запуска. Но есть такие четырехколесные уникумы, которым
                производитель советует использовать именно минералку. Сильно
                изношенные моторы тоже проживут подольше на таком масле.<br />
                Выбирая между синтетикой и полусинтетикой, нужно смотреть на
                возраст и пробег автомобиля. Новые машины больше жалуют чистую
                синтетику. Она остается одинаково текучей как при низких, так и
                при высоких температурах. После того как одометр накрутит 100
                тысяч, желательно переходить на полусинтетику, чтобы снизить
                скорость износа двигателя. Однако, при экстремально низких
                температурах (ниже 45°) ее лучше не использовать.<br />
                Классная полусинтетика есть у Mobil — моторное масло
                <a href="#">Mobil Ultra 10W-40.</a> И цена очень приятная — 71
                600 рублей за 200-литровую бочку.
              </p>
            </div>
            <img src="../assets/img/article/1.png" alt="" />
          </div>
          <div class="article__paragraph">
            <h2 class="article__content-title">
              Зачем вообще менять масло перед зимой
            </h2>
            <p class="article__text">
              Об этом мы уже подробно рассказывали ранее —
              <a href="#">прочти,</a> не поленись.<br />
              Если вкратце, то система SAE разделяет масла на группы по их
              способности сохранять оптимальную текучесть при низких и высоких
              температурах. Чем меньше число перед литерой W в обозначениях типа
              5W-40, тем ниже температура, на которую рассчитано масло. На
              вторую цифру обращают внимание при выборе летних вариантов.
            </p>
            <div class="article__paragraph--img">
              <div>
                <p class="article__text">
                  Если на масле стоит индекс 5W, значит, это — морозостойкий
                  продукт, с которым мотор будет стабильно работать при -30
                  градусах. Выбирая лубриканты под свой климат, сверяйся с
                  таблицей SAE. Например, если твоя СТО расположена в средней
                  полосе, где температура не опускается ниже 20 градусов, тогда
                  на зиму стоит закупить масло с индексом, начинающимся на 5W и
                  10W. В ассортименте «Автомасло Оптом» есть масла для всех
                  регионов нашей необъятной страны.
                </p>
                <p class="article__text">
                  <span
                    >Сделать правильный выбор помогут наши менеджеры — оставляй
                    заявку прямо сейчас, и мы с тобой свяжемся.</span
                  >
                </p>
              </div>
              <img src="../assets/img/article/2.png" alt="" />
            </div>
          </div> -->
          <RouterLink
            to="/blog"
            class="article__back"
            style="text-decoration: none"
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.9744 0L0 6L5.9744 12H8.30441L3.16643 6.84H14V5.16H3.16643L8.30441 0H5.9744Z"
                fill="#F7CA60"
              />
            </svg>
            <span>Вернуться назад</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <Callback />

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/article.css"></style>
