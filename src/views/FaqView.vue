<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useFaqStore } from "@/stores/faq";
import { useFormsStore } from "@/stores/forms";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { vMaska } from "maska";

const router = useRouter();
const faqStore = useFaqStore();
const formsStore = useFormsStore();

onMounted(async () => {
  await faqStore.fetchFaqs();
});

const question = ref({
  question: "",
  name: "",
  phone: "",
  email: "",
});

async function handleSubmit() {
  await formsStore.sendQuestionForm(question.value);
  question.value.name = "";
  question.value.phone = "";
  question.value.question = "";
  question.value.email = "";
  router.push("/thanks");
}
</script>

<template>
  <div class="page-faq">
    <div class="faq-bg-1">
      <div class="faq-bg-inner">
        <div class="faq-bg-overlay"></div>
        <img src="../assets/img/faq/bg-1.png" alt="" />
      </div>
    </div>
    <div class="faq-bg-2">
      <div class="faq-bg-inner">
        <div class="faq-bg-overlay"></div>
        <img src="../assets/img/faq/bg-2.png" alt="" />
      </div>
    </div>
    <img class="faq-bg-1-mob mob" src="../assets/img/faq/bg-1-mob.png" alt="" />
    <img class="faq-bg-2-mob mob" src="../assets/img/faq/bg-2-mob.png" alt="" />

    <Header />

    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">Вопросы и ответы</span>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <h1 class="faq__title section__title">
          Часто задаваемые <span>вопросы</span>
        </h1>
        <div class="faq__items">
          <div
            v-for="(question, index) in faqStore.faqs"
            :key="index"
            :class="{ active: question.opened }"
            class="faq__item"
          >
            <div
              class="faq__item-header"
              @click="question.opened = !question.opened"
            >
              <div class="faq__item-title">
                {{ question.title }}
              </div>
              <div class="faq__item-btn">
                <div class="faq__item-stick"></div>
                <div class="faq__item-stick"></div>
              </div>
            </div>
            <div class="faq__item-content">
              {{ question.content }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="question">
      <img
        class="oil-btm-right"
        src="../assets/img/faq/oil-btm-right.png"
        alt=""
      />
      <form @submit.prevent="handleSubmit" class="container">
        <h2 class="section__title question__title">
          <span>Не нашли ответ</span> на&nbsp;свой вопрос?
        </h2>
        <p class="question__subtitle">
          Напишите ваш вопрос и&nbsp;мы&nbsp;обязательно ответим!
        </p>
        <div action="#" class="question__form">
          <img
            class="oil-top-left"
            src="../assets/img/faq/oil-top-left.png"
            alt=""
          />
          <img
            class="oil-btm-left"
            src="../assets/img/faq/oil-btm-left.png"
            alt=""
          />
          <img
            class="oil-top-right"
            src="../assets/img/faq/oil-top-right.png"
            alt=""
          />
          <textarea
            cols="30"
            rows="10"
            class="question__form-textarea"
            required
            placeholder="Ваш вопрос"
            v-model="question.question"
          ></textarea>
          <div class="question__form-row">
            <input
              type="text"
              class="question__form-input"
              required
              placeholder="Введите имя"
              v-model="question.name"
            />
            <input
              type="text"
              class="question__form-input"
              required
              placeholder="Введите e-mail"
              v-model="question.email"
            />
            <input
              type="text"
              class="question__form-input"
              required
              placeholder="Введите телефон"
              v-model="question.phone"
              v-maska
              data-maska="+7 (###) ###-##-##"
            />
          </div>
        </div>
        <div class="question__btn-wrap">
          <button type="submit" class="question__btn btn-primary">
            Отправить
          </button>
        </div>
      </form>
    </section>

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/faq.css"></style>
